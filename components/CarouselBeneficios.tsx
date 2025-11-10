"use client";
import { useEffect } from "react";

interface CarouselBeneficiosProps {
  title: string;
  location: "australia" | "dubai";
}

export default function CarouselBeneficios({ title, location }: CarouselBeneficiosProps) {
  useEffect(() => {
    const checkInterval = setInterval(() => {
      if (window.funciones?.getBeneficios) {
        console.log(`🚀 Ejecutando funciones.getBeneficios('${location}')`);
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
						></div>
					</div>
				</div>
			</section>
    </section>
  );
}
