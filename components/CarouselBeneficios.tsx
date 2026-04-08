"use client";
import { useEffect } from "react";
import { resolveDictPath } from "@/lib/resolveDictPath";

interface CarouselBeneficiosProps {
  title: string;
  location: "australia" | "dubai";
  data: any[];
  dict: any;
}

export default function CarouselBeneficios({ title, location, data, dict }: CarouselBeneficiosProps) {
  useEffect(() => {
    const checkInterval = setInterval(() => {
      if (window.funciones?.getBeneficios) {
        window.funciones.getBeneficios(location);
        clearInterval(checkInterval);
      }
    }, 300);
    return () => clearInterval(checkInterval);
  }, [location]);

  return (
    <section className="section-australia section-australia_benefits container-fluid bg-blue-dark-5 py-5">
			<section className="container py-lg-4">
				<div className="row d-flex justify-content-center">
					<div className="col-12 col-lg-11 pt-4 pb-5">
						<h2 className="section-australia_title text-center text-uppercase text-white">{title}</h2>
					</div>
					<div className="col-12 col-lg-10">
						<div
							id={`carousel-benefits-${location}`}
							className="carousel-benefits owl-carousel owl-theme"
						>
              
              {data.map((item: any, index: number) => (
                <div className="item d-flex flex-column align-items-center  px-3">
                    <div className="card card-benefit border-0 bg-transparent">
                        <div className="card-body d-flex flex-column align-items-center px-4 px-lg-5">
                            <img src={item.img} alt={item.title} className="img-fluid mb-3 benefit-img" />
                            <h3 className="text-center"><strong>{resolveDictPath(item.title, dict)}</strong></h3>
                            <p>{resolveDictPath(item.description, dict)}</p>
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
