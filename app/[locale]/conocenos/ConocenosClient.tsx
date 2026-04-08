"use client";

import { useEffect } from "react";
import { getAssetUrl, getRoutePath } from "@/lib/url";
import { resolveDictPath } from "@/lib/resolveDictPath";

export default function ConocenosClient({data, title}: any) {
  useEffect(() => {
    const checkInterval = setInterval(() => {
      if (window.funciones?.getTeamLatinAdvisorHome) {
        window.funciones.getTeamLatinAdvisorHome();
        clearInterval(checkInterval);
      }
    }, 300);

    return () => clearInterval(checkInterval);
  }, []);

  return (
      <section className="section-home section-home_aboutUs">
        <section className="container pb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-12 pt-4 pb-3">
              <h2 className="section-home_title text-center">{title}</h2>
            </div>
            <div className="col-12 pb-5 mb-2">
              <div id="carousel-teamLatinadvisor" className="carousel-teamLatinadvisor owl-carousel owl-theme">
                
                {data.map((member: any) => (
                  <div key={member.id} className="item px-5 pt-5 d-flex align-items-center">
                      <div className="card card-team">
                          <div className="card-body">
                              <div className="img-bg" style={{ backgroundImage: `url('${member?.image_background?.url}')`  }}>
                                  <p>{member.content[0].children[0].text}</p>
                              </div>
                              <div className="img-front" style={{ backgroundImage: `url('${member?.image_team?.url}')`  }}></div>
                          </div>
                          <div className="card-footer">
                              <h3>{member.title}</h3>
                              <h4>{member.position}</h4>
                          </div>
                      </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>
      </section>
  );
}
