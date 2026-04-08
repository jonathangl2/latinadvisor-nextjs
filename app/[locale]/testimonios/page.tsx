import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl, API_URL } from "@/lib/url";
import { Metadata } from "next";
import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';
import InstagramEmbed from "@/components/InstagramEmbed";


export const generateStaticParams = generateLocaleParams;

export const metadata: Metadata = {
  title: "Testimonios | LatinAdvisor",
  description: "",
}

// ========== PAGE COMPONENT ==========

export default async function EbooksGuiasPage({
  params
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
    
  const testimonios = [
    "https://www.instagram.com/p/DVaGYr_DB6b",
    "https://www.instagram.com/p/DUCNuSHDOCl",
    "https://www.instagram.com/p/DQapSvODMd5",
    "https://www.instagram.com/p/DQFzfFEDBu_",
    "https://www.instagram.com/p/DRN8XpojNxp",
    "https://www.instagram.com/p/DOr1lz9DCDC",
    "https://www.instagram.com/p/DOZZRkNCf5U",
    "https://www.instagram.com/p/DM09fK6J5HH"
  ]

  return (
    <>
      <BannerInterno
        imageSrc={getAssetUrl("/assets/images/banners/testimonios.webp")}
        title={dict.pages.testimonials.title_caption}
        className="internal_page"
      />

      <section className="section-australia container-fluid py-4 py-lg-5 mt-0">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-11">
              <div className="row d-flex align-items-stretch py-4">

                {testimonios.length > 0 ? (
                  testimonios.map((item: any, i:any) => {
                    return (
                        <div key={i} className="col-12 col-md-6 col-lg-4 mb-4 section-australiaTestimonials">
                        <InstagramEmbed url={item} />
                        </div>
                    )
                  })
                ) : (
                  <div className="col-12 text-center py-5">
                    <p className="text-muted">No hay testimonios disponibles en este momento.</p>
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