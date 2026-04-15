import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl, API_URL } from "@/lib/url";
import { Metadata } from "next";
import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';

export const generateStaticParams = generateLocaleParams;

export const metadata: Metadata = {
  title: "Promociones | LatinAdvisor",
  description: "Descubre nuestras promociones exclusivas. Aprovecha descuentos especiales y ofertas limitadas para mejorar tu aprendizaje con LatinAdvisor.",
}

// ========== DATA FETCHING ==========

async function getAllPromotions(locale: string) {
  try {
    const url = `${API_URL}/api/promotions?locale=${locale}&populate=*&sort=createdAt:asc`;
    
    const res = await fetch(url, { 
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    if (!res.ok) {
      console.error("❌ Failed to fetch Promociones:", res.status);
      return [];
    }

    const data = await res.json();
    return data.data || [];

  } catch (err) {
    console.error("❌ Error fetching Promociones:", err);
    return [];
  }
}

// ========== PAGE COMPONENT ==========

export default async function PromocionesPage({
  params
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  const promotions = await getAllPromotions(locale);

  return (
    <>
      <BannerInterno
        imageSrc={getAssetUrl("/assets/images/banners/promociones.webp")}
        title={dict.pages.promociones.title_caption}
        className="internal_page"
      />


      <section className="container-pqr container-fluid py-4 py-lg-5 mt-0">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-9">

               <div className="accordion" id="pqrFirst">

                {promotions.length > 0 ? (
                  promotions.map((promotion: any) => {
                    return (
                        <div className="card">
                            <div className="card-header" id={`pqr${promotion.id}`}>
                                <button className="d-flex justify-content-between align-items-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapsePqr${promotion.id}`} aria-expanded="false" aria-controls={`collapsePqr${promotion.id}`}>
                                    <h4 className="mb-0">{promotion.title}</h4>
                                </button>
                            </div>
                            <div id={`collapsePqr${promotion.id}`} className="collapse" aria-labelledby={`pqr${promotion.id}`} data-parent={`#pqrFirst`}>
                                <div className="card-body" dangerouslySetInnerHTML={{ __html: promotion.content }}></div>
                            </div>
                        </div>
                    );
                  })
                ) : (
                  <div className="col-12 text-center py-5">
                    <p className="text-muted">No hay promociones disponibles en este momento.</p>
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