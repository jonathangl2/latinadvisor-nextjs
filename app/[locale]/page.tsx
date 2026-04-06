import FormEmbed from "@/components/FormEmbed";
import { getAssetUrl } from "@/lib/url";
import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';

export const generateStaticParams = generateLocaleParams;
export default async function Home({
    params
  }: {
    params: Promise<{ locale: Locale }>
  }) {
  
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const localePath = (path: string) => getAssetUrl(path, locale);
  const assetPath = (path: string) => getAssetUrl(path);
  
  return (
    <>
      {/* ====================== HERO / PRINCIPAL BANNER ====================== */}
      <section id="principal_banner" className="container-fluid">
        <div className="row">
          <div className="col-12 px-0">
            
            {/* <video autoPlay muted loop id="bgVideo" className="d-block d-md-none">
              <source src={getAssetUrl("/assets/documents/video-vertical-bg.mp4")} type="video/mp4" />
            </video> */}
            
            {/* Video solo en desktop */}
            <video autoPlay muted loop id="bgVideo" className="d-none d-md-block">
              <source src={getAssetUrl("/assets/documents/video-horizontal-bg.mp4")} type="video/mp4" />
            </video>
            {/* Imagen fallback para móviles */}
            <img
              src={getAssetUrl("/assets/images/home/bg-mobile.webp")}
              alt="Background mobile"
              className="d-block d-md-none"
            />
          </div>
          <div className="caption">
            <h1>
              {dict.pages.home.caption}
            </h1>
            <a href="#contactForm" className="btn btn-lg btn-round px-5 py-3 btn-green-1 text-uppercase scrolling mb-lg-4">
              {dict.pages.home.cta}
            </a>
          
            <section className="row d-flex justify-content-center px-4 mb-5 section-home_ctaDestination mx-auto w-100">
              <div className="col-11 col-sm-8 col-lg-4">
                <a
                  href={localePath("/australia")}
                >
                  <div className="card card-ctaDestination">
                    <img
                      src={getAssetUrl("/assets/images/home/estudiar-en-australia.webp")}
                      alt={dict.pages.home.destinations.au}
                    />
                    <h5 className="card-ctaDestination_title">{dict.pages.home.destinations.au}</h5>
                  </div>
                </a>
              </div>
              {/* <div className="col-11 col-lg-4">
                <a
                  href={getAssetUrl("/dubai")}
                >
                  <div className="card card-ctaDestination">
                    <img
                      src={getAssetUrl("/assets/images/home/estudiar-en-dubai.webp")}
                      alt={dict.pages.home.destinations.db}
                    />
                    <h5 className="card-ctaDestination_title">{dict.pages.home.destinations.db}</h5>
                  </div>
                </a>
              </div> */}
            </section>
          </div>
        </div>
      </section>

      {/* ====================== NUESTROS SERVICIOS ====================== */}
      <section className="section-home section-home_ourServices container-fluid">
        <section className="container py-5">
          <div className="row d-flex justify-content-center pb-lg-5">
            <div className="col-10 pt-4 pb-5 mb-2">
              <h2 className="section-home_title section-home_ourServices--title text-center text-uppercase">{dict.pages.home.services.title}</h2>
            </div>

            {[
              {
                img: getAssetUrl("/assets/images/home/renovacion-visa-de-estudios.webp"),
                title: dict.pages.home.services.study_visa,
                url: 'renovaciondevisa'
              },
              {
                img: getAssetUrl("/assets/images/home/procesos-migratorios-otras-visas.webp"),
                title: dict.pages.home.services.migration_visa,
                url: 'migration'
              },
              {
                img: getAssetUrl("/assets/images/home/work-and-holiday.webp"),
                title: dict.pages.home.services.workandholiday,
                url: 'workandholiday'
              },
            ].map((item, i) => (
              <div className="col-10 col-lg-4 mb-5 mb-lg-0" key={i}>
                <a href={localePath("/australia/"+item.url)}>
                  <div className="card card-ourServices">
                    <img src={item.img} alt={item.title} />
                    <h3 className="card-ourServices_title">{item.title}</h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* ====================== FORMULARIO DE CONTACTO / PERFILAMIENTO ====================== */}
      <section className="section-home section-home_contactForm bg-grey-light-3" id="contactForm" >
        <section className="container py-5">
          <div className="row d-flex justify-content-around align-items-start py-5">

            <div className="col-11 col-lg-5">
              <FormEmbed
                formSrc="https://api.leadconnectorhq.com/widget/form/1Hc0dJ19yyTGDsdjYhVI"
                formName="1. Formulario - Web global"
                formId="1Hc0dJ19yyTGDsdjYhVI"
                formHeight={2822}
                title="1. Formulario - Web global"
                titleCard={dict.forms.home.title}
                subtitleCard={dict.forms.home.subtitle}
                descriptionCard={dict.forms.home.description}
              />
            </div>

            <div className="col-12 col-lg-6 section-home_contactForm--stickySlider ps-5 d-none d-md-block pt-5">
              <br></br>
              <h5 className="mt-5 mb-3 pt-4">{dict.pages.home.description_form}</h5>
              <ul>
                <li>{dict.pages.home.description_option_1}</li>
                <li>{dict.pages.home.description_option_2}</li>
                <li>{dict.pages.home.description_option_3}</li>
                <li>{dict.pages.home.description_option_4}</li>
              </ul>
            </div>
            
          </div>
        </section>
      </section>
    </>
  );
}
