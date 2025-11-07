"use client";
import BannerVideo from "@/components/BannerVideo";
import CarouselBeneficios from "@/components/CarouselBeneficios";
import FormEmbed from "@/components/FormEmbed";
import Link from "next/link";

export default function Dubai() {
	return (
		<>
			<BannerVideo
				imageSrc="/assets/images/dubai/dubai-estudia-y-trabaja.webp"
				imageSrcResponsive="/assets/images/dubai/dubai-estudia-y-trabaja-responsive.webp"
				videoSrc="https://www.youtube.com/embed/ky8n2saU2Wo?si=LWt-AmyzdzyjEDJi"
				title="Vive, estudia y trabaja en el extranjero"
				subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			/>
			
			<section className="section-australia container-fluid">
				<section className="container">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-11 mt-5 py-5 section-australia_contentCta">
							<p className="">Descubre por qué Dubái es el destino favorito para estudiantes internacionales, con un proceso de visado fácil, oportunidades laborales y una experiencia transformadora.</p>
							<a href="" className="btn">¡AGENDA TU ASESORÍA <br/>VIRTUAL GRATUITA!</a>
						</div>
					</div>
				</section>
			</section>

			<CarouselBeneficios title="5 Beneficios Exclusivos que Dubái Ofrece a Estudiantes Internacionales" location="dubai" />

			<section className="section-escribenos section-escribenos_contactForm container-escribenos container-fluid">
				<div className="row d-flex justify-content-center">
					<div className="col-11 col-lg-10 py-5 mt-lg-5">
						<div className="row d-flex justify-content-center">
							<div className="col-12 col-sm-9 col-lg-6">
								<FormEmbed
									formSrc="https://api.leadconnectorhq.com/widget/form/1Hc0dJ19yyTGDsdjYhVI"
									formName="1. Formulario - Web global"
									formId="1Hc0dJ19yyTGDsdjYhVI"
									formHeight={2822}
									title="1. Formulario - Web global"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
