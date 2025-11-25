import { getAssetUrl } from "@/lib/url";
import Image from "next/image";

export default function BannerInterno({ imageSrc, title, btnCtaForm = false, className = "" }:{ imageSrc:string, title:string, btnCtaForm?:boolean, className:string }) {
  return (
    <section id="internal_banner" className={`container-fluid ${className}`}>
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
        <div className="caption">
          <h1>{title}</h1>
          <div className="row w-100 mx-0 justify-content-center d-flex">
            {btnCtaForm && (
              <div className="d-none d-sm-block col-12 col-lg-11 section-australia_contentCta d-flex justify-content-center">
                <a href={getAssetUrl("/australia/#contactForm")} className="btn">¡AGENDA TU ASESORÍA VIRTUAL GRATUITA!</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
