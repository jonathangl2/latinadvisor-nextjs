import { getAssetUrl } from "@/lib/url";
import Image from "next/image";

export default async function BannerInterno({ imageSrc, title, btnCtaForm = false, className = "", locale }:{ imageSrc:string, title:string, btnCtaForm?:boolean, className:string, locale: string }) {

  const localePath = (path: string) => getAssetUrl(path, locale);

  return (
    <section id="internal_banner" className={`container-fluid ${className}`}>
      
        {imageSrc && (
          <div className="row">
            <div className="col-12 px-0">
              <div className="position-relative w-100">
                <img
                  src={imageSrc}
                  alt={title}
                  className="internal_banner_img object-cover"
                />
              </div>
            </div>
          </div>
        )}
        
        <div className="caption">
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          {btnCtaForm && (
            <div className="row w-100 mx-0 justify-content-center d-flex">
              <div className="d-none d-sm-block col-12 col-lg-11 section-australia_contentCta d-flex justify-content-center">
                <a href={localePath("/australia/#contactForm")} className="btn">¡AGENDA TU ASESORÍA VIRTUAL GRATUITA!</a>
              </div>
            </div>
          )}
        </div>
    </section>
  );
}
