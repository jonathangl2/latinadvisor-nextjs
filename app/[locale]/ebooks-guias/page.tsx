import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl, API_URL } from "@/lib/url";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';

export const generateStaticParams = generateLocaleParams;

export const metadata: Metadata = {
  title: "Ebooks y Guías | LatinAdvisor",
  description: "Descarga nuestros ebooks y guías gratuitas para planificar tu viaje a Australia. Información actualizada sobre visas, destinos, consejos y más.",
}

// ========== DATA FETCHING ==========

async function getAllEbooks(locale: string) {
  try {
    const url = `${API_URL}/api/ebooks?locale=${locale}&populate=*&sort=createdAt:desc`;
    
    const res = await fetch(url, { 
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    if (!res.ok) {
      console.error("❌ Failed to fetch ebooks:", res.status);
      return [];
    }

    const data = await res.json();
    return data.data || [];

  } catch (err) {
    console.error("❌ Error fetching ebooks:", err);
    return [];
  }
}

// ========== PAGE COMPONENT ==========

export default async function EbooksGuiasPage({
  params
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  const ebooks = await getAllEbooks(locale);

  return (
    <>
      <BannerInterno
        imageSrc={getAssetUrl("/assets/images/banners/ebooks-guias.webp")}
        locale={locale}
        title={dict.pages.ebooks.title_caption}
        className="internal_page"
      />

      <section className="container-ebooksGuias container-fluid py-4 py-lg-5 mt-0">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-11">
              <div className="row d-flex align-items-stretch py-4">

                {ebooks.length > 0 ? (
                  ebooks.map((ebook: any) => {
                    const imageUrl = ebook.image_banner?.url || '';
                    const ebookUrl = `/${locale}/ebooks-guias/${ebook.slug}`;

                    return (
                      <div key={ebook.id} className="card-post col-12 col-md-6 col-lg-4 mb-4">
                        {imageUrl && (
                          <Image
                            src={imageUrl}
                            alt={ebook.title}
                            width={300}
                            height={400}
                            className="img-fluid mb-4"
                          />
                        )}
                        <h4 className="mb-3">
                          <strong>{ebook.title}</strong>
                        </h4>
                        <Link href={ebookUrl} className="mb-4 btn-blue-grey-4">
                          Descargar ahora
                        </Link>

                      </div>
                    );
                  })
                ) : (
                  <div className="col-12 text-center py-5">
                    <p className="text-muted">No hay ebooks disponibles en este momento.</p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}