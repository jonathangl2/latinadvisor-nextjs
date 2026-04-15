import { getAssetUrl } from "@/lib/url";
import { Metadata } from 'next';
import AgentesClient from "./AgentesClient";
import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';

export const generateStaticParams = generateLocaleParams;

export const metadata:Metadata = {
	title: "Renovación de Visa | LatinAdvisor",
}

export default async function RenovacionPage({
		params
	}: {
		params: Promise<{ locale: Locale }>
	}) {

	const { locale } = await params;
	const dict = await getDictionary(locale);

	const agentes = [
		{
			img: "/assets/images/australia/renovacion/asesora-rosario.webp",
			name: "Rosario Orejuela",
			city: "Melbourne - Perth",
			url: "https://api.whatsapp.com/send?phone=61423165193&text=Hola,%20estoy%20interesado%20en%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20Renovaci%C3%B3n%20de%20Visa.%20Gracias.",
			// url: "https://api.leadconnectorhq.com/widget/booking/0pIcQiJVuE3xw7LCNx6m",
		},
		{
			img: "/assets/images/australia/renovacion/asesora-johanna.webp",
			name: "Johanna Gravenhorst",
			city: "Melbourne - Sydney - Adelaide",
			url: "https://api.whatsapp.com/send?phone=61452518562&text=Hola,%20estoy%20interesado%20en%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20Renovaci%C3%B3n%20de%20Visa.%20Gracias.",
			// url: "https://api.leadconnectorhq.com/widget/booking/BTZO6UtDAU29VUNhvjyl",
		},
		{
			img: "/assets/images/australia/renovacion/asesora-andre.webp",
			name: "Andrea Lotero",
			city: "Brisbane - Gold Coast",
			url: "https://wa.link/kq5rz7",
		},
		{
			img: "/assets/images/australia/renovacion/asesora-adaliz.webp",
			name: "Adaliz Enriquez Lara",
			city: "Sydney",
			url: "https://wa.link/0kxr3v",
		},
		{
			img: "/assets/images/australia/renovacion/asesora-sandra.webp",
			name: "Sandra Orejuela",
			city: "Brisbane - Gold Coast",
			url: "https://wa.link/b1hgqd",
		},
		{
			img: "/assets/images/australia/renovacion/asesora-mechas.webp",
			name: "Maria Mercedes Becerra",
			city: "Melbourne - Perth",
			url: "https://wa.link/b1hgqd",
		}
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
							<h1><div className="d-inline d-md-block">{dict.pages.visarenewal.title_caption}</div>{dict.pages.visarenewal.subtitle_caption}</h1>
						</div>
					</div>
				</div>
			</section>

			<section className="section-australia container-fluid">
				<section className="container">
					<div className="row d-flex justify-content-center py-4">
						<div className="col-12 col-lg-10 pt-4 pb-5 section-australia_contentCta">
							<p className="" dangerouslySetInnerHTML={{ __html: dict.pages.visarenewal.description }}></p>
							<a href="#agentes" className="btn scrolling">{dict.pages.australia.cta_caption}</a>
						</div>
					</div>
				</section>
			</section>

			<section className="section-australia section-australiaRenovacion container-fluid bg-blue-dark-5 py-5">
				<section className="container py-lg-4">
					<div className="row d-flex justify-content-center">
						<div className="col-12 col-lg-9 pt-4 pb-5">
							<h2 className="section-australia_title text-center text-uppercase text-white">{dict.pages.visarenewal.courses_title}</h2>
						</div>
						<div className="col-12 col-lg-10">
							<p className="text-white mb-3">{dict.pages.visarenewal.courses_desc}</p>
						</div>
						<div className="col-12 col-lg-10 my-4 section-australiaRenovacion_courses">
							<div className="row d-flex align-items-center mb-4">
								<div className="col-12 col-lg-6 information">
										<img src={getAssetUrl("/assets/images/australia/renovacion/cursos-de-ingles-renovacion-australia-min.webp")} alt="" className="img-fluid w-100 my-lg-4"/>
								</div>
								<div className="col-12 col-lg-6 ps-lg-5">
									<h3 className="mt-4 mb-3">{dict.pages.visarenewal.courses_1}</h3>
									<h5 className="text-white mb-3">{dict.pages.visarenewal.courses_1_desc}</h5>
									<ul className="mb-3 text-white">
										<li>{dict.pages.visarenewal.courses_1_child.list1}</li>
										<li>{dict.pages.visarenewal.courses_1_child.list2}</li>
										<li>{dict.pages.visarenewal.courses_1_child.list3}</li>
										<li>{dict.pages.visarenewal.courses_1_child.list4}</li>
										<li>{dict.pages.visarenewal.courses_1_child.list5}</li>
									</ul>
								</div>
							</div>
							<div className="row d-flex align-items-center mb-3">
								<div className="col-12 col-lg-6 information">
										<img src={getAssetUrl("/assets/images/australia/renovacion/cursos-vocacionales-renovacion-australia-min.webp")} alt="" className="img-fluid w-100 my-lg-4"/>
								</div>
								<div className="col-12 col-lg-6 ps-lg-5">
									<h3 className="mt-4 mb-3">{dict.pages.visarenewal.courses_2}</h3>
									<h5 className="text-white mb-3">{dict.pages.visarenewal.courses_2_desc}</h5>
								</div>
							</div>
							<div className="row d-flex align-items-center mb-3">
								<div className="col-12 col-lg-6 information">
										<img src={getAssetUrl("/assets/images/australia/renovacion/educacion-superior-renovacion-australia-min.webp")} alt="" className="img-fluid w-100 my-lg-4"/>
								</div>
								<div className="col-12 col-lg-6 ps-lg-5">
									<h3 className="mt-4 mb-3">{dict.pages.visarenewal.courses_3}</h3>
									<h5 className="text-white mb-3">{dict.pages.visarenewal.courses_3_desc}</h5>
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
							<h2 className="section-australia_title text-center  text-uppercase mb-4">{dict.pages.visarenewal.demand_areas_title}</h2>
						</div>
						<div className="col-12 col-lg-10">
							<div className="row d-flex justify-content-center">
								<div className="col-12 mb-3 information">
									<h5 className="mb-4">{dict.pages.visarenewal.demand_areas_desc1}</h5>
								</div>
								<div className="col-12 col-lg-10 information">
									
									<div className="row d-flex align-items-center">
										{[
											{
												img: "/assets/images/australia/renovacion/ingenieria-min.webp",
												title: dict.pages.visarenewal.demand_areas_list1
											},
											{
												img: "/assets/images/australia/renovacion/construccion-min.webp",
												title: dict.pages.visarenewal.demand_areas_list2
											},
											{
												img: "/assets/images/australia/renovacion/tecnologia-informacion-min.webp",
												title: dict.pages.visarenewal.demand_areas_list3
											},
											{
												img: "/assets/images/australia/renovacion/salud-cuidado-del-mayor-min.webp",
												title: dict.pages.visarenewal.demand_areas_list4
											},
											{
												img: "/assets/images/australia/renovacion/hospitality-turismo-min.webp",
												title: dict.pages.visarenewal.demand_areas_list5
											},
											{
												img: "/assets/images/australia/renovacion/educacion-servicios-comunicarios-min.webp",
												title: dict.pages.visarenewal.demand_areas_list6
											},
											{
												img: "/assets/images/australia/renovacion/cocina-min.webp",
												title: dict.pages.visarenewal.demand_areas_list7
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
									<h5 className="mb-4">{dict.pages.visarenewal.demand_areas_desc2}</h5>
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
							<h2 className="section-australia_title text-center text-uppercase mb-4">{dict.pages.visarenewal.agents_title}</h2>
						</div>
						<div className="col-12 col-lg-10 pb-5 pb-lg-0">
							<div className="row d-flex justify-content-center">
								<div className="col-12 col-lg-12 mb-4">
									<h5>{dict.pages.visarenewal.agents_desc}</h5>
								</div>
								<div className="col-12">
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
