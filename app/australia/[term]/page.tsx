import { notFound } from "next/navigation";
import Image from "next/image";
import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl } from "@/lib/url";
import { console } from "inspector";
import React from "react";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  try {
    const filePath = path.join(process.cwd(), "public", "assets", "db", "la_home.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileContent);
    
    const ciudades = json.data?.ciudades || [];
    
    return ciudades.map((ciudad: any) => ({
      term: ciudad.slug,
    }));
  } catch (err) {
    console.error("❌ Error generando params:", err);
    return [];
  }
}

function getCiudadData(term: string) {
  try {
    const filePath = path.join(process.cwd(), "public", "assets", "db", "la_home.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileContent);
    const ciudad = json.data?.ciudades?.find((c: any) => c.slug === term);
    return ciudad;
  } catch (err) {
    console.error(`❌ Error cargando ciudad ${term}:`, err);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ term: string }> }) {
  const { term } = await params;
  const ciudad = getCiudadData(term);
  
  if (!ciudad) {
    return {
      title: "Ciudad no encontrada | LatinAdvisor",
    };
  }
  
  return {
    title: `${ciudad.title} | Estudiar en Australia | LatinAdvisor`,
    description: ciudad.description?.replace(/<[^>]*>/g, "").substring(0, 160) || "",
  };
}

export default async function AustraliaCityPage({ params }: { params: Promise<{ term: string }> }) {

  const { term } = await params;
  const ciudad = getCiudadData(term);
  if (!ciudad) {
    notFound();
  }

  return (
    <>
      <BannerInterno
        imageSrc={getAssetUrl(`/assets/images/australia/${ciudad.slug}/banner-${ciudad.slug}-australia.webp`)}
        title={ciudad.title}
        btnCtaForm={true}
        className="banner-cityAus"
      />

      <section className="section-cityAus container-donde-estudiar container-fluid">
        <div id="response" className="col-12 pb-5 pb-lg-0">
           <div id={ciudad.slug} className="container-donde-estudiar-city row d-flex justify-content-center">
            <div className="col-12 featured-information">
              <div className="row px-4 d-flex justify-content-center">
                <div className="col-12 col-lg-5 offset-lg-1 pt-3 pb-lg-5 ps-lg-0 order-0">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12">
                      <div
                        className="ciudad-description"
                        dangerouslySetInnerHTML={{ __html: ciudad.description }}
                      />
                    </div>
                    <div className="d-block d-sm-none col-12 col-lg-11 section-australia_contentCta d-flex justify-content-center my-4">
                      <a href={getAssetUrl("/australia/#contactForm")} className="btn">¡AGENDA TU ASESORÍA VIRTUAL GRATUITA!</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 offset-lg-1 pb-5 ps-lg-0 pe-lg-5 order-2 order-lg-1">
                  {ciudad.features?.length > 0 && (
                    <div className="row">

                      {ciudad.features.map((feature: any, i: number) => (
                        <div key={i} className="col-12 d-flex align-items-center py-2">
                          <img src={getAssetUrl(feature.icon)} alt="" className="featured-information-icon" />
                          <h5 className="mb-0">{feature.description}</h5>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="col-12 col-lg-11 d-flex justify-content-end order-3 order-lg-2">
                  <a href={getAssetUrl("/australia#ciudades")} className="view-more mb-5 mb-lg-2 mt-lg-4">Ver más ciudades <i className="icon icon-arrow-right ms-2"></i></a>
                </div>
                <div className="col-12 col-lg-10 mt-5 pb-5 order-1 order-lg-3">
                  {ciudad.imagenes?.length > 0 && (
                    <div id="carousel-donde-estudiar" className="carousel-donde-estudiar owl-carousel owl-theme owl-loaded owl-drag">
                      {ciudad.imagenes.map((img: string, i: number) => (
                        <div key={i} className="item px-3">
                          <img src={getAssetUrl(img)} className="img-fluid" />
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
