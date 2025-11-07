import Image from "next/image";

export default function BannerInterno({ imageSrc, title, className = "" }:{ imageSrc:string, title:string, className:string }) {
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
        </div>
      </div>
    </section>
  );
}
