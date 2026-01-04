import { getAssetUrl } from "@/lib/url";
import { Metadata } from 'next';
import AgentesClient from "./AgentesClient";

export const metadata:Metadata = {
	title: "Renovación de Visa | LatinAdvisor",
}

export default function RenovacionPage() {

	const agentes = [
		{
			img: "/assets/images/australia/renovacion/asesora-rosario-min.webp",
			name: "Rosario Orejuela",
			city: "Melbourne",
			url: "https://api.leadconnectorhq.com/widget/booking/0pIcQiJVuE3xw7LCNx6m",
		},
		{
			img: "/assets/images/australia/renovacion/asesora-camila-min.webp",
			name: "María Camila",
			city: "Brisbane",
			url: "https://api.leadconnectorhq.com/widget/booking/Fkag8dYLd7yy28O8xjCJ",
		},
		{
			img: "/assets/images/australia/renovacion/asesora-johanna-min.webp",
			name: "Johanna Gravenhorst",
			city: "Melbourne",
			url: "https://api.leadconnectorhq.com/widget/booking/BTZO6UtDAU29VUNhvjyl",
		},
	];

	return (
		<>
			{/* ====================== HERO / PRINCIPAL BANNER ====================== */}
			<section className="section-australia section-australiaRenovacion container-fluid">
				<div className="row">
					<div className="col-12 px-0 section-australia_content mb-md-4">
						<img
							src={getAssetUrl("/assets/images/australia/renovacion/renovar-visa-estudiante-australia-min.webp")}
							alt="Background renovacion de visa estudiante australia latinadvisor"
							className="img-fluid w-100 d-none d-md-block"
						/>
						<img 
							src={getAssetUrl("/assets/images/australia/renovacion/renovar-visa-estudiante-australia-responsive-min.webp")}
							alt="Background renovacion de visa estudiante australia latinadvisor"
							className="img-fluid w-100 d-block d-md-none"
						/>
						<div className="caption">
							<h1><div className="d-inline d-md-block">Renovación de visa </div>de estudiante en Australia</h1>
						</div>
					</div>
				</div>
			</section>

			<section className="section-australia container-fluid">
				<section className="container">
					<div className="row d-flex justify-content-center py-4">
						<div className="col-12 col-lg-10 pt-4 pb-5 section-australia_contentCta">
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
						<div className="col-12 col-lg-10 pb-5 pb-lg-0">
							<div className="row d-flex justify-content-center">
								<div className="col-12 col-lg-10 mb-4">
									<h5>Selecciona una asesora:</h5>
								</div>
								<div className="col-12 col-lg-10">
									<AgentesClient agentes={agentes} />
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

		</>
	);
}
