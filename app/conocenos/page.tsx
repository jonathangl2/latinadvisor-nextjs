"use client";

import { useEffect } from "react";
import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl } from "@/lib/url";

export default function ConocenosPage() {
  useEffect(() => {
    const checkInterval = setInterval(() => {
      if (
        window.funciones?.getTeamLatinAdvisorHome
      ) {
        window.funciones.getTeamLatinAdvisorHome();
        clearInterval(checkInterval);
      }
      
    }, 300);
    return () => clearInterval(checkInterval);
  }, []);

  return (
    <>
      <BannerInterno
        imageSrc={getAssetUrl("/assets/images/conocenos/banner-conocenos.png")}
        title="QUIÉNES SOMOS"
        className="internal_page"
      />

      <section className="container-conocenos container-fluid pt-5">
        <div className="row">
          <div className="col-12 container-conocenos-description py-lg-5">
            <div className="row justify-content-center align-items-md-end">
              <div className="col-11 col-xl-9">
                <h4 className="mb-4">
                  Somos una empresa Australiana creada en el año 2014 con el fin
                  de ayudarte a cumplir tus sueños de vivir la experiencia en
                  Australia,{" "}
                  <strong>¿Te imaginas estar al otro lado del mundo?</strong>
                </h4>

                <h4 className="mb-4">
                  Todos en esta familia hemos tenido la oportunidad de
                  experimentar esta aventura, por eso podremos asesorarte como
                  buenos amigos, entender tus preocupaciones, inquietudes y
                  cualquier duda que tengas, así que no dudes en contactarnos.
                  Te ayudamos con todo el proceso sin costo alguno, desde elegir
                  el tipo de curso, institución, ciudad, trámite de visa,
                  soporte y acompañamiento al llegar a este país, sí, leíste
                  bien, estaremos allí para darte una mano amiga cuando llegues
                  a este maravilloso país.
                </h4>

                <h4 className="mb-4">
                  Nuestra función principal es ser un facilitador en el proceso
                  de decisión sobre qué estudiar, dónde estudiar y cómo hacerlo
                  para que disfrutes de una experiencia inolvidable que te hará
                  crecer no solo como profesional sino como persona.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-home section-home_aboutUs">
        <section className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-12 pt-4 pb-5">
              <h2 className="section-home_title text-center">Conócenos</h2>
            </div>
            <div className="col-12 pb-5 mb-2">
              <div
                id="carousel-teamLatinadvisor"
                className="carousel-teamLatinadvisor owl-carousel owl-theme"
              ></div>
            </div>
          </div>
        </section>
      </section>

    </>
  );
}
