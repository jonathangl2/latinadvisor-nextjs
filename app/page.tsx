"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Página principal cargada ✅");
  }, []);

  return (
    <>
      {/* ====================== HERO / PRINCIPAL BANNER ====================== */}
      <section id="principal_banner" className="container-fluid">
        <div className="row">
          <div className="col-12 px-0">
            <video autoPlay muted loop id="bgVideo" className="d-block d-md-none">
              <source src="/assets/documents/video-vertical-bg.mp4" type="video/mp4" />
            </video>
            <video autoPlay muted loop id="bgVideo" className="d-none d-md-block">
              <source src="/assets/documents/video-horizontal-bg.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="caption">
            <h1>
              Vive, estudia y trabaja en el extranjero
            </h1>
            <p className="text-white mt-2 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          
            <section className="row d-flex justify-content-center px-4 mb-5 section-home_ctaDestination">
              <div className="col-10 col-lg-4">
                <a
                  href="#studyplans"
                  className="scrolling triggerTabInitial"
                  data-tab="tab-australia"
                >
                  <div className="card card-ctaDestination">
                    <img
                      src="/assets/images/home/estudiar-en-australia.webp"
                      alt="Estudiar en Australia"
                    />
                    <h5 className="card-ctaDestination_title">Estudiar en Australia</h5>
                  </div>
                </a>
              </div>
              <div className="col-10 col-lg-4">
                <a
                  href="#studyplans"
                  className="scrolling triggerTabInitial"
                  data-tab="tab-dubai"
                >
                  <div className="card card-ctaDestination">
                    <img
                      src="/assets/images/home/estudiar-en-dubai.webp"
                      alt="Estudiar en Dubái"
                    />
                    <h5 className="card-ctaDestination_title">Estudiar en Dubái</h5>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* ====================== NUESTROS SERVICIOS ====================== */}
      <section className="section-home section-home_ourServices container-fluid">
        <section className="container py-5">
          <div className="row d-flex justify-content-center pb-lg-5">
            <div className="col-10 pt-4 pb-5 mb-2">
              <h2 className="section-home_title section-home_ourServices--title text-center text-uppercase">Otros Servicios en Australia</h2>
            </div>

            {[
              {
                img: "/assets/images/home/renovacion-visa-de-estudios.webp",
                title: "Renovación de visa de estudio",
              },
              {
                img: "/assets/images/home/procesos-migratorios-otras-visas.webp",
                title: "Procesos Migratorios y otras visas",
              },
              {
                img: "/assets/images/home/work-and-holiday.webp",
                title: "Work and Holiday",
              },
            ].map((item, i) => (
              <div className="col-10 col-lg-4 mb-5 mb-lg-0" key={i}>
                <div className="card card-ourServices">
                  <img src={item.img} alt={item.title} />
                  <h3 className="card-ourServices_title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* ====================== FORMULARIO DE CONTACTO / PERFILAMIENTO ====================== */}
      <section className="section-home section-home_contactForm bg-grey-light-3">
        <section className="container py-5">
          <div className="row d-flex justify-content-around align-items-start py-5">
            <div className="col-11 col-lg-5">
              <div className="card card-contactForm">
                <div className="card-header text-center py-3">
                  <h2 className="text-uppercase">
                    <strong>Formulario de</strong>
                    <strong className="text-uppercase text-green-1 mb-3 d-block">
                      Perfilamiento
                    </strong>
                  </h2>
                  <p>
                    Completa estas preguntas para analizar tu perfil y brindarte
                    asesoría personalizada.
                  </p>
                </div>
                <div className="card-body">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/1Hc0dJ19yyTGDsdjYhVI"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: 0 }}
                    id="inline-1Hc0dJ19yyTGDsdjYhVI" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="1. Formulario - Web global"
                    data-height="2822"
                    data-layout-iframe-id="inline-1Hc0dJ19yyTGDsdjYhVI"
                    data-form-id="1Hc0dJ19yyTGDsdjYhVI"
                    title="1. Formulario - Web global"></iframe>
                   <Script src="https://link.msgsndr.com/js/form_embed.js" />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 section-home_contactForm--stickySlider ps-5 d-none d-md-block">
              
              <h2 className="title-featuredLatinadvisor my-5">
                ¿Por qué <br />
                <strong>Latinadvisor?</strong>
              </h2>

              <p className="mb-3">Rellena el formulario para analizar tu perfil y recibir una asesoría gratuita con LatinAdvisor. Así podrás conocerás los requisitos y posibilidades de tu proyecto, el curso, los costos y todo basado en tus objetivos y metas.</p>
              
              <ul>
                <li>Después de evaluar tu perfil te llegará un link de agendamiento para separar tu asesoría para estudiar en Australia o Dubái y solucionar todas tus preguntas. </li>
                <li>Cuando te sientas list@, preparamos contigo todo lo que necesitas para estudiar y trabajar en el destino que tú elijas sin ningún costo extra.</li>
                <li>Te ayudamos con la visa, el college, acompañamiento, el seguro médico, tips para conseguir trabajo, etc.</li>
                <li>Además, te invitamos a todos sus eventos educativos y recreativo en Australia o Dubái.</li>
              </ul>
              
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
