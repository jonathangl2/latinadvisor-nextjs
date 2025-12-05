import BannerInterno from "@/components/BannerInterno";
import FormEmbed from "@/components/FormEmbed";
import { getAssetUrl } from "@/lib/url";
import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";


export const metadata:Metadata = {
  title: "Contáctanos | LatinAdvisor",
  description: "Envíanos un mensaje, llámanos o visítanos. Déjanos saber tus inquietudes o síguenos en nuestras redes sociales.  Tú aventura en Australia comienza aquí."
}

export default function ContactoPage() {
  return (
    <>
      <BannerInterno
        imageSrc={getAssetUrl("/assets/images/banners/contactanos.webp")}
        title="CONTÁCTANOS"
        className="internal_page"
      />
      <section className="section-escribenos section-escribenos_contactForm container-escribenos container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-11 col-lg-10 py-5 mt-lg-5">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-sm-9 col-lg-6">
                <FormEmbed
                  formSrc="https://api.leadconnectorhq.com/widget/form/1Hc0dJ19yyTGDsdjYhVI"
                  formName="1. Formulario - Web global"
                  formId="1Hc0dJ19yyTGDsdjYhVI"
                  formHeight={2822}
                  title="1. Formulario - Web global"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
