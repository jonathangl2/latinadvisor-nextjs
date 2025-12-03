"use client";
import BannerVideo from "@/components/BannerVideo";
import CarouselBeneficios from "@/components/CarouselBeneficios";
import FormEmbed from "@/components/FormEmbed";
import { getAssetUrl } from "@/lib/url";

import Link from "next/link";
import Script from "next/script";

export default function Australia() {
	return (
		<>
			<BannerVideo
				imageSrc={getAssetUrl("/assets/images/australia/australia-vive-estudia-y-trabaja.webp")}
				imageSrcResponsive={getAssetUrl("/assets/images/australia/australia-vive-estudia-y-trabaja-responsive.webp")}
				videoSrc="https://www.youtube.com/embed/b2rIxmDX2HA?si=U7v_GBW7vKiBh9Mg"
				title="Estudiar y Trabajar en Australia"
				subtitle="Tu Futuro Empieza Aquí"
			/>
			
			<section className="section-australia container-fluid">
				<section className="container">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-11 mt-lg-5 py-lg-5 section-australia_contentCta">
							<p className="">Australia es uno de los destinos más populares para estudiantes internacionales que buscan una experiencia académica de calidad, oportunidades laborales reales y opciones de migrar de forma permanente. Con ciudades costeras vibrantes, una economía estable y paisajes naturales incomparables, vivir en Australia es mucho más que una aventura: es una inversión en tu futuro.</p>
							<a href="#contactForm" className="btn scrolling">¡AGENDA TU ASESORÍA VIRTUAL GRATUITA!</a>
						</div>
					</div>
				</section>
			</section>

			<CarouselBeneficios title="5 Beneficios Clave de Estudiar en Australia" location="australia" />

			<section className="section-australia container-fluid">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-10 mb-lg-4">
							<h2 className="section-australia_title text-center text-uppercase mb-4">Amplía Oferta académica en Australia</h2>
						</div>
						<div className="col-12 col-lg-10 my-4">
							<div className="row d-flex justify-content-between align-items-center">
								<div className="col-12 col-lg-6 information order-1 order-lg-0 pt-5 py-lg-0">
									<img src={getAssetUrl("/assets/images/australia/cursos-de-ingles-australia.webp")} alt="" className="img-fluid w-100 mb-lg-4"/>
									<img src={getAssetUrl("/assets/images/australia/cursos-vocacionales-australia.webp")} alt="" className="img-fluid w-100 d-none d-lg-block"/>
								</div>
								<div className="col-12 col-lg-6 ps-lg-5 section-australia_courses order-0 order-lg-1">
									<div className="row">
										<div className="col-12">
											<p className="mb-3">Australia ofrece una gran variedad de programas académicos de alta calidad, según tus intereses, metas y nivel de inglés:</p>
										</div>
										<div className="col-12">
											<h3 className="bg-green-2 mt-4 mb-3 p-3">Cursos de inglés:</h3>
											<ul className="mb-3">
												<li>Inglés general</li>
												<li>Inglés para negocios</li>
												<li>Preparación para exámenes IELTS, Cambridge, PTE</li>
												<li>Inglés con propósitos académicos (EAP)</li>
											</ul>
										</div>
										<div className="col-12">
											<h3 className="bg-green-2 mt-4 mb-3 p-3">Programas técnicos Vocacionales (VET):</h3>
											<ul className="mb-3">
												<li>Certificados y Diplomas</li>
											</ul>
										</div>
										<div className="col-12">
											<h3 className="bg-green-2 mt-4 mb-3 p-3">Educación superior:</h3>
											<ul className="mb-4">
												<li>Higher Education (Bachelor’s)</li>
												<li>Maestrías (Master’s)</li>	
											</ul>
										</div>
										<div className="col-12">
											<p><strong>Nota:</strong> Para estudios de educación superior es necesario contar con un nivel avanzado de inglés certificado.</p>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</section>	
			</section>

			<section id="ciudades" className="section-australia container-fluid bg-grey-light-3">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-10 mb-4">
							<h2 className="section-australia_title text-center text-uppercase mb-4">Descubre las Ciudades Más Populares para Estudiantes</h2>
						</div>
						<div className="col-12 col-lg-10">
							<p className="mb-3">Estudia en las ciudades más populares y acogedoras para extranjeros, Sydney, Melbourne, Brisbane, Adelaide, Gold Coast, Perth y Byron Bay. </p>
							<p className="mb-3">Estas ciudades ofrecen un estilo de vida único, cercanía al mar, clima ideal, excelente transporte y comunidad estudiantil multicultural.</p>
							<p className="">Dale clic a la ciudad para ampliar más la información: </p>
						</div>
					</div>
				</section>
				<section className="container-donde-estudiar container-fluid">
					<div className="row px-3 px-lg-4 pb-5 justify-content-center align-items-md-end">
						<div className="col-12 col-lg-10 map-au">
							<a href={getAssetUrl("/australia/melbourne")} className="map-au-city melbourne">Melbourne</a>
							<a href={getAssetUrl("/australia/brisbane")} className="map-au-city brisbane">Brisbane</a>
							<a href={getAssetUrl("/australia/sydney")} className="map-au-city sydney">Sydney</a>
							<a href={getAssetUrl("/australia/gold-coast")} className="map-au-city gold-coast">Gold Coast</a>
							<a href={getAssetUrl("/australia/adelaide")} className="map-au-city adelaide">Adelaide</a>
							<a href={getAssetUrl("/australia/perth")} className="map-au-city perth">Perth</a>
							<a href={getAssetUrl("/australia/hobart")} className="map-au-city tasmania">Hobart</a>
							<a href={getAssetUrl("/australia/cairns")} className="map-au-city cairns">Cairns</a>
							<img src={getAssetUrl("/assets/images/australia/mapa-australia-linea-punto.svg")} alt="" className="img-fluid" />
						</div>
					</div>
				</section>
			</section>

			<section className="section-australia container-fluid">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 mb-4">
							<h2 className="section-australia_title text-center  text-uppercase mb-4">Requisitos Esenciales para tu Visa de Estudiante en Australia</h2>
						</div>
						<div className="col-12 col-lg-10">
							<div className="row">
								<div className="col-12 mb-3 information">
									<p className="mb-4">El gobierno australiano busca mejorar constantemente el proceso de visas, enfocándose en que los solicitantes tengan una intención genuina de estudiar. Por eso, evalúan factores como tu edad, historial académico y laboral, recursos económicos y la calidad de la institución educativa que elijas.</p>
									<h3 className="mb-4">Lista de Requisitos:</h3>
								</div>

								<div className="col-12 col-md-6 ps-lg-4 information">

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-carta-aceptacion"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>1. Carta de Aceptación (CoE):</strong></h5>
											<p className="mb-3">Debes estar inscrito en un curso aprobado por el gobierno australiano (CRICOS) y recibir la carta de aceptación oficial (CoE). Esta carta es obligatoria para aplicar a la visa.</p> 
										</div>
									</div>

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-seguro-medico-internacional"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>2. Seguro médico internacional:</strong></h5>
											<p className="mb-3">Que te ofrecerá asistencia médica con cobertura específica según el elegido.</p>
										</div>
									</div>

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-carta-de-intencion"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>3. Carta de intención (GTE):</strong></h5>
											<p className="mb-3">Que te permite exponer tu intención real de ser un estudiante temporal en Australia.</p>
										</div>
									</div>

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-pasaporte-vigente"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>4. Pasaporte vigente:</strong></h5>
											<p className="mb-3">con vigencia mínimo de 6 meses.</p>
										</div>
									</div>

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-examen-medico"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>5. Examen médico:</strong></h5>
											<p className="mb-3">(según país de origen). Dependiendo de tu nacionalidad o tiempo de estadía, el gobierno puede solicitar exámenes médicos antes de otorgar la visa.</p>
										</div>
									</div>	
								
								</div>	


								<div className="col-12 col-md-6 ps-lg-4 information">

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-carta-aceptacion"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>6. Traducciones oficiales:</strong></h5>
											<p className="mb-3">De toda tu documentación a idioma inglés.</p>
										</div>
									</div>

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-fondos-economicos"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>7. Prueba de fondos económicos:</strong></h5>
											<p className="mb-3">Según tu nacionalidad, podrías tener que demostrar fondos adicionales al valor del curso para cubrir tu estadía en Australia. Este dinero solo debe estar disponible hasta que aprueben tu visa, no es un gasto real que debas pagar.</p>
										</div>
									</div>

									<div className="row">
										<div className="col">
											<h5 className="mb-1"><strong>¿Cuánto dinero necesitas demostrar?</strong></h5>
											<p className="mb-3">Depende de la duración de tu curso:</p>
											<ul className="mb-3">
												<li>3 meses: aprox. AUD $14,400</li>
												<li>6 meses: aprox. AUD $25,600</li>
												<li>12 meses: aprox. AUD $37,200</li>
											</ul>

											<h5 className="mb-1"><strong>¿Cómo puedes demostrarlo?</strong></h5>
											<p className="mb-3">
												✅ Con tus extractos bancarios (últimos 3 meses)<br/>
												✅ O mediante un patrocinador familiar que respalde tus gastos
											</p>
										</div>
									</div>
									
								</div>
								<div className="col-12 mt-5 information">
									<img src={getAssetUrl("/assets/images/australia/requisitos-visa-estudiante-australia.webp")} className="w-100" alt="" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

			<section className="section-australia container-fluid bg-blue-grey-4">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 mb-lg-4">
							<h2 className="section-australia_title text-white text-center  text-uppercase mb-4">Historias de Éxito de <br/>Nuestros Estudiantes</h2>
						</div>
						<div className="col-12 mb-lg-4 section-australia_reputation">

							<Script type="text/javascript" src="https://reputationhub.site/reputation/assets/review-widget.js"></Script>
							<iframe
								className="lc_reviews_widget"
								src="https://reputationhub.site/reputation/widgets/review_widget/yOvoI3RqcAHeOtiiNEyF?widgetId=690d5a98cf2958bcfac1a58c"
								frameBorder={0}
								scrolling="no"
								style={{ minWidth: "100%", width: "100%" }}
							></iframe>

						</div>
					</div>
				</section>
			</section>

			<section id="contactForm" className="section-escribenos section-escribenos_contactForm container-escribenos container-fluid">
				<div className="row d-flex justify-content-center">
					<div className="col-11 col-lg-10 mt-4 py-5 py-lg-5 mt-lg-5">
						<h2 className="section-australia_title text-center text-uppercase mb-lg-4">¿Listo para Impulsar tu <span className="d-inline-block d-lg-block fw-bold">Futuro en Australia?</span></h2>
					</div>
					<div className="col-11 col-lg-10 pb-5">
						<div className="row d-flex justify-content-center">
							<div className="col-12 col-sm-9 col-lg-6">
								<FormEmbed
									formSrc="https://api.leadconnectorhq.com/widget/form/2v14tZNWKuPXVhu3l9hi"
									formName="2. Formulario - Web Australia"
									formId="2v14tZNWKuPXVhu3l9hi"
									formHeight={1612}
									title="2. Formulario - Web Australia"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
