import { notFound } from "next/navigation";
import Image from "next/image";
import BannerInterno from "@/components/BannerInterno";
import { Metadata } from "next";
import EbookForm from "@/components/EbookForm";
import { API_URL, getAssetUrl } from "@/lib/url";
import { getDictionary, locales, type Locale } from '@/lib/i18n';

// ========== DATA FETCHING ==========

async function getAllEbooksFromStrapi() {
  try {

    const url = `${API_URL}/api/ebooks?populate=*`;
    
    const res = await fetch(url, { 
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.data || [];

  } catch (err) {
    console.error("❌ Error fetching all ebooks:", err);
    return [];
  }
}

async function getEbookFromStrapi(slug: string, locale: string) {
  try {
    
    const url = `${API_URL}/api/ebooks?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`;

    const res = await fetch(url, { 
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("❌ Response not OK:", res.status);
      return null;
    }

    const data = await res.json();
    return data.data?.[0] || null;

  } catch (err) {
    console.error("❌ Error fetching ebook:", err);
    return null;
  }
}

// ========== STATIC PARAMS ==========

export async function generateStaticParams() {
  try {
    // Obtener todos los ebooks de Strapi
    const ebooks = await getAllEbooksFromStrapi();
    
    // Generar combinaciones: cada ebook × cada idioma
    const params = [];
    for (const locale of locales) {
      for (const ebook of ebooks) {
        params.push({
          locale: locale,
          term: ebook.slug,
        });
      }
    }
    
    //console.log(`✅ Generated ${params.length} static params for ebooks`);
    return params;
    
  } catch (err) {
    console.error("❌ Error generating params:", err);
    return [];
  }
}

// ========== METADATA ==========

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: Locale; term: string }> 
}): Promise<Metadata> {
  const { locale, term } = await params;
  const ebook = await getEbookFromStrapi(term, locale);
  
  if (!ebook) {
    return {
      title: "Ebook not found | LatinAdvisor",
    };
  }
  
  return {
    title: `${ebook.title} | Ebooks | LatinAdvisor`,
    description: ebook.content?.replace(/<[^>]*>/g, "").substring(0, 160) || "",
  };
}

// ========== PAGE COMPONENT ==========

export default async function EbookPage({ 
  params 
}: { 
  params: Promise<{ locale: Locale; term: string }> 
}) {
  const { locale, term } = await params;
  const dict = await getDictionary(locale);
  
  const ebook = await getEbookFromStrapi(term, locale);

  if (!ebook) {
    notFound();
  }

  // Extraer URLs de imágenes
  const bannerImageUrl = ebook.image_banner?.url || '';
  const featuredImageUrl = ebook.image_featured?.url || '';

  return (
    <>
      <BannerInterno
        imageSrc={getAssetUrl("/assets/images/banners/ebooks-guias.webp")}
        title="EBOOKS Y GUÍAS"
        className="internal_page"
      />

      <section 
        id="container-ebooksGuias-form" 
        className="container-ebooksGuias container-escribenos container-fluid pb-4 py-lg-5"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 ccontainer-ebooksGuias-form py-lg-5">
              <div className="row d-flex align-items-strech justify-content-center">
                
                 {/* Formulario - Ahora es un componente cliente */}
                <div className="col-12 col-lg-5 text-center text-lg-start order-2 order-lg-1 mb-5 mb-lg-0 pb-5 pb-lg-0">
                  <EbookForm 
                    ebookTitle={ebook.title}
                    ebookPdfUrl={ebook.url_ebook}
                  />
                </div>

                {/* Contenido del ebook */}
                <div className="col-12 container-ebooksGuias-descriptionForm col-lg-6 pt-4 pt-lg-0 pb-5 mb-4 px-lg-5 order-1 order-lg-2">
                  {featuredImageUrl && (
                    <div className="mb-4 text-center">
                      <img
                        src={featuredImageUrl}
                        alt={ebook.title}
                        className="img-fluid "
                      />
                    </div>
                  )}
                  {ebook.title && (
                    <h2 className="title-detail mb-4">
                      <span>{ebook.title}</span>
                    </h2>
                  )}
                  {ebook.content && (
                    <div dangerouslySetInnerHTML={{ __html: ebook.content }} />
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}