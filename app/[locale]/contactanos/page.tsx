import BannerInterno from "@/components/BannerInterno";
import FormEmbed from "@/components/FormEmbed";
import { getAssetUrl } from "@/lib/url";
import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';

export const generateStaticParams = generateLocaleParams;

export const metadata:Metadata = {
  title: "Escríbenos, déjanos tus datos | LatinAdvisor",
  description: "Envíanos un mensaje, llámanos o visítanos. Déjanos saber tus inquietudes o síguenos en nuestras redes sociales.  Tú aventura en Australia comienza aquí."
}

export default async function ContactoPage({
    params
  }: {
    params: Promise<{ locale: Locale }>
  }) {

  const { locale } = await params;
  const dict = await getDictionary(locale);
  
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
                  titleCard={dict.forms.home.title}
                  subtitleCard={dict.forms.home.subtitle}
                  descriptionCard={dict.forms.home.description}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
