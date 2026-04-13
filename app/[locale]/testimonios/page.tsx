import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl, API_URL } from "@/lib/url";
import { Metadata } from "next";
import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';
import InstagramEmbed from "@/components/InstagramEmbed";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import Script from "next/script";


export const generateStaticParams = generateLocaleParams;

export const metadata: Metadata = {
  title: "Testimonios | LatinAdvisor",
  description: "",
}


// ========== DATA FETCHING ==========

async function getAllTestimonials(locale: string) {
  try {
    const url = `${API_URL}/api/testimonials?locale=${locale}&populate=*&sort=createdAt:desc`;
    
    const res = await fetch(url, { 
      next: { revalidate: 3600 }, // Cache por 1 hora
    }); 

    if (!res.ok) {
      console.error("❌ Failed to fetch testimonials:", res.status);
      return [];
    }

    const data = await res.json();  
    return data.data || [];

  } catch (err) {
    console.error("❌ Error fetching testimonials:", err);
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
    
  const testimonios = await getAllTestimonials(locale);

  return (
    <>
      <BannerInterno
        imageSrc={getAssetUrl("/assets/images/banners/testimonios.webp")}
        title={dict.pages.testimonials.title_caption}
        className="internal_page"
      />

      <section className="section-australia container-fluid pb-4 py-lg-5 mt-0 ">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-11">
                {testimonios.length > 0 ? (
                  <TestimonialsGrid testimonials={testimonios} />
                ) : (
                  <div className="row d-flex align-items-stretch py-4">
                    <div className="col-12 text-center py-5">
                      <p className="text-muted">No hay testimonios disponibles en este momento.</p>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-australia container-fluid bg-blue-grey-4">
        <section className="container py-3 py-lg-5">
          <div className="row d-flex justify-content-center py-5">
            <div className="col-12 mb-lg-4">
              <h2 className="section-australia_title text-white text-center  text-uppercase mb-4" dangerouslySetInnerHTML={{ __html: dict.pages.testimonials.success_title }} />
            </div>
            <div className="col-12 mb-lg-4 section-australia_reputation">

              <Script type="text/javascript" src="https://reputationhub.site/reputation/assets/review-widget.js"></Script>
              <iframe
                className="lc_reviews_widget"
                src="https://reputationhub.site/reputation/widgets/review_widget/yOvoI3RqcAHeOtiiNEyF?widgetId=690d5a98cf2958bcfac1a58c"
                style={{ minWidth: "100%", width: "100%" }}
              ></iframe>

            </div>
          </div>
        </section>
      </section>

    </>
  );
}