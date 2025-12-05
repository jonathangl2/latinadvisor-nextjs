"use client";

import BannerInterno from "@/components/BannerInterno";
import FormEmbed from "@/components/FormEmbed";
import { getAssetUrl } from "@/lib/url";

export default function RenovacionPage() {
  return (
    <>
			{/* ====================== HERO / PRINCIPAL BANNER ====================== */}
			<section className="section-australia section-australiaRenovacion container-fluid">
				<div className="row">
					<div className="col-12 px-0 section-australia_content mb-md-4">
						<img
							src={getAssetUrl("/assets/images/australia/renovacion/renovar-visa-estudiante-australia-min.webp")}
							alt=""
							className="img-fluid w-100 d-none d-md-block"
						/>
						<img 
							src={getAssetUrl("/assets/images/australia/renovacion/renovar-visa-estudiante-australia-responsive-min.webp")}
							alt=""
							className="img-fluid w-100 d-block d-md-none"
						/>
						<div className="caption">
								<h1>Renovación de visa de<br/>estudiante en Australia</h1>
								<a href="#agentes" className="btn btn-lg btn-round px-5 py-3 btn-green-1 scrolling mb-lg-4 d-none d-lg-block">¡APLICAR AHORA!<br/>Evaluemos tu elegibilidad</a>
						</div>
					</div>
				</div>
			</section>

			<section className="section-australia container-fluid">
				<section className="container">
					<div className="row d-flex justify-content-center py-4">
						<div className="col-12 col-lg-10 py-5 section-australia_contentCta">
							<p className="">La renovación de la visa de estudiante es la mejor opción para quedarte y seguir viviendo tu experiencia en este país lleno de oportunidades. Al extender tu estadía podrás continuar con tus estudios, trabajar legalmente hasta <strong>24 horas semanales</strong>, fortalecer tu perfil profesional y, lo más importante, abrir la puerta a <strong>nuevas oportunidades migratorias</strong>.</p>
							<a href="#agentes" className="btn scrolling">¡AGENDA TU ASESORÍA VIRTUAL GRATUITA!</a>
						</div>
					</div>
				</section>
			</section>

			<section className="section-australia section-australiaRenovacion container-fluid bg-blue-dark-5 py-5">
				<section className="container py-lg-4">
					<div className="row d-flex justify-content-center">
						<div className="col-12 col-lg-9 pt-4 pb-5">
							<h2 className="section-australia_title text-center text-uppercase text-white">Cursos con los que puedes renovar tu visa de estudiante</h2>
						</div>
						<div className="col-12 col-lg-10">
							<p className="text-white mb-3">Renovar tu visa no es solo un trámite, es la oportunidad de elegir el camino que más te acerque a tus metas. Ahora se trata de elegir el curso que mejor se adapte a tu perfil y objetivos:</p>
						</div>
						<div className="col-12 col-lg-10 my-4 section-australiaRenovacion_courses">
							<div className="row d-flex align-items-center mb-4">
								<div className="col-12 col-lg-6 information">
										<img src={getAssetUrl("/assets/images/australia/renovacion/cursos-de-ingles-renovacion-australia-min.webp")} alt="" className="img-fluid w-100 my-lg-4"/>
								</div>
								<div className="col-12 col-lg-6 ps-lg-5">
									<h3 className="mt-4 mb-3">Cursos de inglés:</h3>
									<h5 className="text-white mb-3">Es una buena opción para los estudiantes que quieren reforzar el idioma antes de avanzar a estudios vocacionales o universitarios, podrás renovar con cursos de:</h5>
									<ul className="mb-3 text-white">
										<li>General English</li>
										<li>English for Academic Purpose</li>
										<li>Business English</li>
										<li>Cambridge Certificate</li>
										<li>IELTS preparation.</li>
									</ul>
								</div>
							</div>
							<div className="row d-flex align-items-center mb-3">
								<div className="col-12 col-lg-6 information">
										<img src={getAssetUrl("/assets/images/australia/renovacion/cursos-vocacionales-renovacion-australia-min.webp")} alt="" className="img-fluid w-100 my-lg-4"/>
								</div>
								<div className="col-12 col-lg-6 ps-lg-5">
									<h3 className="mt-4 mb-3">Cursos Vocacionales (VET):</h3>
									<h5 className="text-white mb-3">Renovar con un curso VET, es recomendado estudiantes que ya tienen un nivel intermedio/alto de inglés y quieren especializarse en un área que, de alta demanda en el mercado laboral australiano, con posibilidades de un camino migratorio.</h5>
								</div>
							</div>
							<div className="row d-flex align-items-center mb-3">
								<div className="col-12 col-lg-6 information">
										<img src={getAssetUrl("/assets/images/australia/renovacion/educacion-superior-renovacion-australia-min.webp")} alt="" className="img-fluid w-100 my-lg-4"/>
								</div>
								<div className="col-12 col-lg-6 ps-lg-5">
									<h3 className="mt-4 mb-3">Educación superior-Postgrados:</h3>
									<h5 className="text-white mb-3">Puedes elegir entre carreras universitarias o maestrías, todas con reconocimiento internacional. Si cuentas con un nivel de inglés alto, una maestría es una excelente opción, no solo potencia tu perfil académico y laboral, sino que también puede abrirte el camino a mejores oportunidades migratorias, incluyendo la residencia permanente.</h5>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>


			<section className="section-australiaRenovacion container-fluid">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-9 mb-4">
							<h2 className="section-australia_title text-center  text-uppercase mb-4">Áreas con alta demanda laboral en Australia</h2>
						</div>
						<div className="col-12 col-lg-10">
							<div className="row d-flex justify-content-center">
								<div className="col-12 mb-3 information">
									<h5 className="mb-4">Renovar tu visa de estudiante no solo significa seguir trabajando mientras estudias, también puede ser el primer paso para abrir opciones migratorias a futuro si eliges áreas con alta demanda en el país.</h5>
								</div>
								<div className="col-12 col-lg-10 information">
									
									<div className="row d-flex align-items-center">
										{[
											{
												img: "/assets/images/australia/renovacion/ingenieria-min.webp",
												title: "Ingenerías"
											},
											{
												img: "/assets/images/australia/renovacion/construccion-min.webp",
												title: "Construcción y Oficios (Trade)"
											},
											{
												img: "/assets/images/australia/renovacion/tecnologia-informacion-min.webp",
												title: "Tecnología de la Información (IT)"
											},
											{
												img: "/assets/images/australia/renovacion/salud-cuidado-del-mayor-min.webp",
												title: "Salud y cuidado de adulto mayor"
											},
											{
												img: "/assets/images/australia/renovacion/hospitality-turismo-min.webp",
												title: "Hospitality y Turismo"
											},
											{
												img: "/assets/images/australia/renovacion/educacion-servicios-comunicarios-min.webp",
												title: "Educación y Servicios Comunitarios"
											},
											{
												img: "/assets/images/australia/renovacion/cocina-min.webp",
												title: "Cocina"
											}
										].map((area, idx) => (
											<div className="col-12 col-lg-6 mb-3 mb-lg-2" key={idx}>
												<div className="row d-flex align-items-center">
													<div className="col-3 col-lg-3">
														<img src={getAssetUrl(area.img)} alt="" className="img-fluid w-100 my-lg-4"/>
													</div>
													<div className="col-9 col-lg-9">
														<h5>{area.title}</h5>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
								<div className="col-12 information mt-5">
									<h5 className="mb-4">Al renovar tu visa de estudiante puedes elegir un curso que no solo te permita seguir trabajando, sino que también te acerque a opciones de residencia permanente en Australia. Nuestro equipo te orienta en seleccionar la mejor ruta según tus metas.</h5>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

			<section id="agentes" className="section-australiaRenovacion container-fluid bg-grey-light-3">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-9 mb-4">
							<h2 className="section-australia_title text-center text-uppercase mb-4">¡Agenda tu asesoría virtual o presencial sin costo!</h2>
						</div>
						<div className="col-12 col-lg-10">
							<div className="row d-flex justify-content-center">
								<div className="col-12 col-lg-10 mb-4">
									<h5>Selecciona una asesora:</h5>
								</div>
								<div className="col-12 col-lg-10">
									<div className="row">
										{[
											{
												img: "/assets/images/australia/renovacion/asesora-rosario-min.webp",
												name: "Rosario Orejuela",
												city: "Melbourne"
											},
											{
												img: "/assets/images/australia/renovacion/asesora-camila-min.webp",
												name: "María Camila",
												city: "Brisbane"
											},
											{
												img: "/assets/images/australia/renovacion/asesora-johanna-min.webp",
												name: "Johanna Gravenhorst",
												city: "Melbourne"
											}
										].map((agent, idx) => (
											<div className="col-12 col-lg-6 section-australiaRenovacion_agentes" key={idx}>
												<a href={getAssetUrl("/australia#contactForm")}>
													<div className="card">
														<div className="card-header">
															<img src={getAssetUrl(agent.img)} alt="" className="img-fluid w-100 my-lg-4"/>
														</div>
														<div className="card-body ps-4">
															<h5>{agent.name}</h5>
															<p>{agent.city}</p>
														</div>
													</div>
												</a>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

      {/* <section className="section-escribenos section-escribenos_contactForm container-escribenos container-fluid">
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
      </section> */}
    </>
  );
}
