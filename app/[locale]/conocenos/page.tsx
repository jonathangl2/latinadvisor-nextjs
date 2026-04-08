import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl, API_URL } from "@/lib/url";
import { Metadata } from 'next';
import ConocenosClient from "./ConocenosClient";
import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';
import { loadHomeJson } from "@/lib/loadJson";

export const generateStaticParams = generateLocaleParams;

export const metadata:Metadata = {
	title: "Conoce a la familia | LatinAdvisor",
	description: "Nuestro equipo te ayudará a hacer realidad tus sueños. Todos han hecho parte de esta experiencia de estudiar, vivir y trabajar en el exterior.",
}


// ========== DATA FETCHING ==========

async function getAllTeamLatinadvisor(locale: string) {
  try {
    const url = `${API_URL}/api/latinadvisor-team-members?locale=${locale}&populate=*&sort=createdAt:asc`;
    
    const res = await fetch(url, { 
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("❌ Failed to fetch latinadvisor team:", res.status);
      return [];
    }

    const data = await res.json();
    return data.data || [];

  } catch (err) {
    console.error("❌ Error fetching latinadvisor team:", err);
    return [];
  }
}

export default async function ConocenosPage({
    params
  }: {
    params: Promise<{ locale: Locale }>
  }) {


  const { locale } = await params;
  const teamLatin = await getAllTeamLatinadvisor(locale);

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

      <ConocenosClient data={teamLatin} title={dict.pages.about_us.title_team}/>

    </>
  );
}
