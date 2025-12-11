"use client";

interface BannerVideoProps {
  imageSrc: string;
  imageSrcResponsive: string;
  videoSrc: string;
  title: any;
  subtitle?: string;
}

export default function BannerVideo({
  imageSrc,
  imageSrcResponsive,
  videoSrc,
  title,
  subtitle,
}: BannerVideoProps) {
  return (
    <section className="section-australia container-fluid">
      <div className="row">
        <div className="col-12 px-0 section-australia_content mb-md-4">
          <img
            src={imageSrc}
            alt={title}
            className="img-fluid w-100 d-none d-md-block"
          />
          <img 
            src={imageSrcResponsive} 
            alt={title} 
            className="img-fluid w-100 d-block d-md-none"
          />
          <div className="caption">
            <div className="row d-flex justify-content-center w-100 mx-auto">
              <div className="col-11 mb-3">
                <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                {subtitle && (
                  <p className="text-white mt-2">{subtitle}</p>
                )}
              </div>
              <div className="col-11 col-md-10 col-lg-9">
                <div className="ratio ratio-16x9 section-australia_videoEmbed">
                  <iframe
                    src={videoSrc}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
