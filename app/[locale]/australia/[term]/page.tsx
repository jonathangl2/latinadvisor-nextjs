import { notFound } from "next/navigation";
import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl, API_URL } from "@/lib/url";
import { Metadata } from "next";
import { getDictionary, locales, type Locale } from '@/lib/i18n';

// ========== DATA FETCHING ==========

async function getAllCitiesFromStrapi() {
  try {
    const url = `${API_URL}/api/australia-cities?populate=*`;
    
    const res = await fetch(url, { 
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.data || [];

  } catch (err) {
    console.error("❌ Error fetching all cities:", err);
    return [];
  }
}

async function getCityFromStrapi(slug: string, locale: string) {
  try {
    const url = `${API_URL}/api/australia-cities?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`;
    
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
    console.error("❌ Error fetching city:", err);
    return null;
  }
}

// ========== STATIC PARAMS ==========

export async function generateStaticParams() {
  try {
    const cities = await getAllCitiesFromStrapi();
    
    const params = [];
    for (const locale of locales) {
      for (const city of cities) {
        params.push({
          locale: locale,
          term: city.slug,
        });
      }
    }
    
    console.log(`✅ Generated ${params.length} static params for cities`);
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
  const city = await getCityFromStrapi(term, locale);
  
  if (!city) {
    return {
      title: "Ciudad no encontrada | LatinAdvisor",
    };
  }
  
  return {
    title: `${city.title} | Estudiar en Australia | LatinAdvisor`,
    description: city.content?.replace(/<[^>]*>/g, "").substring(0, 160) || "",
  };
}

// ========== PAGE COMPONENT ==========

export default async function AustraliaCityPage({ 
  params 
}: { 
  params: Promise<{ locale: Locale; term: string }> 
}) {
  const { locale, term } = await params;
  const dict = await getDictionary(locale);
  const city = await getCityFromStrapi(term, locale);
  const localePath = (path: string) => getAssetUrl(path, locale);

  if (!city) {
    notFound();
  }

  // Extraer URLs de banner (si existe en Strapi)
  const bannerImageUrl = city.image_banner?.url 
    ? city.image_banner.url 
    : getAssetUrl(`/assets/images/australia/${city.slug}/banner-${city.slug}-australia.webp`);

  return (
    <>
      <BannerInterno
        imageSrc={bannerImageUrl}
        title={city.title}
        btnCtaForm={true}
        locale={locale}
        className="banner-cityAus"
      />

      <section className="section-cityAus container-donde-estudiar container-fluid">
        <div id="response" className="col-12 pb-5 pb-lg-0">
          <div id={city.slug} className="container-donde-estudiar-city row d-flex justify-content-center">
            <div className="col-12 featured-information">
              <div className="row px-4 d-flex justify-content-center">
                
                {/* Descripción de la ciudad */}
                <div className="col-12 col-lg-5 offset-lg-1 pt-3 pb-lg-5 ps-lg-0 order-0">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12">
                      <div
                        className="ciudad-description"
                        dangerouslySetInnerHTML={{ __html: city.content }}
                      />
                    </div>
                    <div className="d-block d-sm-none col-12 col-lg-11 section-australia_contentCta d-flex justify-content-center my-4">
                      <a href={localePath("/australia/#contactForm")} className="btn">
                        {dict.pages.australia.cta_caption}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Features de la ciudad */}
                <div className="col-12 col-lg-5 offset-lg-1 pb-5 ps-lg-0 pe-lg-5 order-2 order-lg-1">
                  {city.featured_content?.length > 0 && (
                    <div className="row">
                      {city.featured_content.map((feature: any, i: number) => (
                        <div 
                          key={i} 
                          className="col-12 d-flex align-items-center py-2"
                          dangerouslySetInnerHTML={{ __html: feature.content }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Link ver más ciudades */}
                <div className="col-12 col-lg-11 d-flex justify-content-end order-3 order-lg-2">
                  <a href={localePath("/australia#ciudades")} className="view-more mb-5 mb-lg-2 mt-lg-4">
                    {dict.pages.australia.view_more_cities} <i className="icon icon-arrow-right ms-2"></i>
                  </a>
                </div>

                {/* Carrusel de imágenes */}
                <div className="col-12 col-lg-10 mt-5 pb-5 order-1 order-lg-3">
                  {city.multimedia?.length > 0 && (
                    <div id="carousel-donde-estudiar" className="carousel-donde-estudiar owl-carousel owl-theme owl-loaded owl-drag">
                      {city.multimedia.map((media: any, i: number) => (
                        <div key={i} className="item px-3">
                          <img 
                            src={media.url} 
                            alt={media.alternativeText || city.title}
                            className="img-fluid" 
                          />
                        </div>
                      ))}
                    </div>
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