import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl } from "@/lib/url";
import { Metadata } from 'next';
import ConocenosClient from "./ConocenosClient";

export const metadata:Metadata = {
	title: "Conoce a la familia | LatinAdvisor",
	description: "Nuestro equipo te ayudará a hacer realidad tus sueños. Todos han hecho parte de esta experiencia de estudiar, vivir y trabajar en el exterior.",
}

export default function ConocenosPage() {
  return (
    <>
      <BannerInterno
        imageSrc={getAssetUrl("/assets/images/banners/quienes-somos.webp")}
        title="QUIÉNES SOMOS"
        className="internal_page"
      />

      <ConocenosClient />

    </>
  );
}
