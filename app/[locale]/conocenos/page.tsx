import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl } from "@/lib/url";
import { Metadata } from 'next';
import ConocenosClient from "./ConocenosClient";
import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';
import { loadHomeJson } from "@/lib/loadJson";

export const generateStaticParams = generateLocaleParams;

export const metadata:Metadata = {
	title: "Conoce a la familia | LatinAdvisor",
	description: "Nuestro equipo te ayudará a hacer realidad tus sueños. Todos han hecho parte de esta experiencia de estudiar, vivir y trabajar en el exterior.",
}

export default async function ConocenosPage({
    params
  }: {
    params: Promise<{ locale: Locale }>
  }) {

  const {data} = loadHomeJson();
  const teamLatin = data.home.team;

  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <BannerInterno
        imageSrc={getAssetUrl("/assets/images/banners/quienes-somos.webp")}
        title={dict.pages.about_us.title_caption}
        className="internal_page"
      />

      <section className="container-conocenos container-fluid pt-5">
        <div className="row">
          <div className="col-12 container-conocenos-description py-lg-5">
            <div className="row justify-content-center align-items-md-end">
              <div className="col-11 col-xl-9">
                <h4 className="mb-4" dangerouslySetInnerHTML={{ __html: dict.pages.about_us.description1 }}></h4>
                <h4 className="mb-4">{dict.pages.about_us.description2}</h4>
                <h4 className="mb-4">{dict.pages.about_us.description3}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConocenosClient data={teamLatin} dict={dict}/>

    </>
  );
}
