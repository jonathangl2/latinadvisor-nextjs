import BannerVideo from "@/components/BannerVideo";
import CarouselBeneficios from "@/components/CarouselBeneficios";
import FormEmbed from "@/components/FormEmbed";
import { getAssetUrl } from "@/lib/url";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';
import { loadHomeJson } from "@/lib/loadJson";

export const generateStaticParams = generateLocaleParams;


export const metadata:Metadata = {
  	title: "Estudiar y Trabajar en Australia | LatinAdvisor",
  	description: "Australia es un país con oportunidades. Déjate seducir con sus encantos y diversidad. Un país lleno de contrastes y de multiculturalidad que te encantará.",
	keywords: "Trabaja en el exterior, Como viajar al exterior, Visa de estudiante, Visa de estudiante para Australia , Viajar por Australia, Trabajar en Australia, Estudia ingles y trabaja en Australia , Vivir en Australia, Tipos de visa para Australia, Koalas, canguros animales de Australia, Vivir en Australia, Melbourne, Sydney, Brisbane, gold coast, Adelaide , Trabajar en Australia, Melbourne, Sydney, Brisbane, gold coast, Adelaide, Estudiar en Australia, Melbourne, Sydney, Brisbane, gold coast, Adelaide, Visa Sponsor."
}

export default async function Australia({
    params
  }: {
    params: Promise<{ locale: Locale }>
  }) {

	const { locale } = await params;
  	const dict = await getDictionary(locale);
 	const localePath = (path: string) => getAssetUrl(path, locale);

	const data = loadHomeJson();
	const beneficiosAustralia = data.data.benefits.australia;
	
	return (
		<>
			<BannerVideo
				imageSrc={getAssetUrl("/assets/images/australia/australia-vive-estudia-y-trabaja.webp")}
				imageSrcResponsive={getAssetUrl("/assets/images/australia/australia-vive-estudia-y-trabaja-responsive.webp")}
				videoSrc="https://www.youtube.com/embed/b2rIxmDX2HA?si=U7v_GBW7vKiBh9Mg"
				title={dict.pages.australia.title_caption}
				subtitle={dict.pages.australia.subtitle_caption}
			/>
			
			<section className="section-australia container-fluid">
				<section className="container">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-11 mt-lg-3 py-lg-5 section-australia_contentCta">
							<p className="">{dict.pages.australia.description}</p>
							<a href="#contactForm" className="btn scrolling">{dict.pages.australia.cta_caption}</a>
						</div>
					</div>
				</section>
			</section>

			<CarouselBeneficios title={dict.pages.australia.benefits_title} location="australia" data={beneficiosAustralia} dict={dict}/>

			<section className="section-australia container-fluid">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-10 mb-lg-4">
							<h2 className="section-australia_title text-center text-uppercase mb-4">{dict.pages.australia.courses_title}</h2>
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
											<p className="mb-3">{dict.pages.australia.courses_desc}</p>
										</div>
										<div className="col-12">
											<h3 className="bg-green-2 mt-4 mb-3 p-3">{dict.pages.australia.courses.course_1}</h3>
											<ul className="mb-3">
												<li>{dict.pages.australia.courses.course_1_child.list1}</li>
												<li>{dict.pages.australia.courses.course_1_child.list2}</li>
												<li>{dict.pages.australia.courses.course_1_child.list3}</li>
												<li>{dict.pages.australia.courses.course_1_child.list4}</li>
											</ul>
										</div>
										<div className="col-12">
											<h3 className="bg-green-2 mt-4 mb-3 p-3">{dict.pages.australia.courses.course_2}</h3>
											<ul className="mb-3">
												<li>{dict.pages.australia.courses.course_2_child.list1}</li>
											</ul>
										</div>
										<div className="col-12">
											<h3 className="bg-green-2 mt-4 mb-3 p-3">{dict.pages.australia.courses.course_3}</h3>
											<ul className="mb-4">
												<li>{dict.pages.australia.courses.course_3_child.list1}</li>
												<li>{dict.pages.australia.courses.course_3_child.list2}</li>	
											</ul>
										</div>
										<div className="col-12">
											<p dangerouslySetInnerHTML={{ __html: dict.pages.australia.courses.note }}></p>
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
							<h2 className="section-australia_title text-center text-uppercase mb-4">{dict.pages.australia.cities_title}</h2>
						</div>
						<div className="col-12 col-lg-10">
							<p className="mb-3">{dict.pages.australia.cities_desc1}</p>
							<p className="mb-3">{dict.pages.australia.cities_desc2}</p>
							<p className="">{dict.pages.australia.cities_desc3}</p>
						</div>
					</div>
				</section>
				<section className="container-donde-estudiar container-fluid">
					<div className="row px-3 px-lg-4 pb-5 justify-content-center align-items-md-end">
						<div className="col-12 col-lg-10 map-au">
							<a href={localePath("/australia/melbourne")} className="map-au-city melbourne">Melbourne</a>
							<a href={localePath("/australia/brisbane")} className="map-au-city brisbane">Brisbane</a>
							<a href={localePath("/australia/sydney")} className="map-au-city sydney">Sydney</a>
							<a href={localePath("/australia/gold-coast")} className="map-au-city gold-coast">Gold Coast</a>
							<a href={localePath("/australia/adelaide")} className="map-au-city adelaide">Adelaide</a>
							<a href={localePath("/australia/perth")} className="map-au-city perth">Perth</a>
							<a href={localePath("/australia/hobart")} className="map-au-city tasmania">Hobart</a>
							<a href={localePath("/australia/cairns")} className="map-au-city cairns">Cairns</a>
							<img src={getAssetUrl("/assets/images/australia/mapa-australia-linea-punto.svg")} alt="" className="img-fluid" />
						</div>
					</div>
				</section>
			</section>

			<section className="section-australia container-fluid">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 mb-4">
							<h2 className="section-australia_title text-center  text-uppercase mb-4">{dict.pages.australia.requirements_title}</h2>
						</div>
						<div className="col-12 col-lg-10">
							<div className="row">
								<div className="col-12 mb-3 information">
									<p className="mb-4">{dict.pages.australia.requirements_desc}</p>
									<h3 className="mb-4">{dict.pages.australia.requirements_subtitle}</h3>
								</div>

								<div className="col-12 col-md-6 ps-lg-4 information">

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-carta-aceptacion"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>{dict.pages.australia.requirements_list1_ttl}</strong></h5>
											<p className="mb-3">{dict.pages.australia.requirements_list1_desc}</p> 
										</div>
									</div>

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-seguro-medico-internacional"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>{dict.pages.australia.requirements_list2_ttl}</strong></h5>
											<p className="mb-3">{dict.pages.australia.requirements_list2_desc}</p>
										</div>
									</div>

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-carta-de-intencion"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>{dict.pages.australia.requirements_list3_ttl}</strong></h5>
											<p className="mb-3">{dict.pages.australia.requirements_list3_desc}</p>
										</div>
									</div>

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-pasaporte-vigente"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>{dict.pages.australia.requirements_list4_ttl}</strong></h5>
											<p className="mb-3">{dict.pages.australia.requirements_list4_desc}</p>
										</div>
									</div>

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-examen-medico"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>{dict.pages.australia.requirements_list5_ttl}</strong></h5>
											<p className="mb-3">{dict.pages.australia.requirements_list5_desc}</p>
										</div>
									</div>	
								
								</div>	


								<div className="col-12 col-md-6 ps-lg-4 information">

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-carta-aceptacion"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>{dict.pages.australia.requirements_list6_ttl}</strong></h5>
											<p className="mb-3">{dict.pages.australia.requirements_list6_desc}</p>
										</div>
									</div>

									<div className="row mb-2">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-requisitos-fondos-economicos"></i>
										</div>
										<div className="col">
											<h5 className="mb-1"><strong>{dict.pages.australia.requirements_list7_ttl}</strong></h5>
											<p className="mb-3">{dict.pages.australia.requirements_list7_desc}</p>
										</div>
									</div>

									<div className="row">
										<div className="col">
											<h5 className="mb-1"><strong>{dict.pages.australia.requirements_list8_ttl}</strong></h5>
											<p className="mb-3">{dict.pages.australia.requirements_list8_desc}</p>
											<ul className="mb-3">
												<li>{dict.pages.australia.requirements_list8_desc_li1}</li>
												<li>{dict.pages.australia.requirements_list8_desc_li2}</li>
												<li></li>
											</ul>

											<h5 className="mb-1"><strong>{dict.pages.australia.requirements_list9_ttl}</strong></h5>
											<p className="mb-3" dangerouslySetInnerHTML={{ __html: dict.pages.australia.requirements_list9_desc }} />
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
							<h2 className="section-australia_title text-white text-center  text-uppercase mb-4" dangerouslySetInnerHTML={{ __html: dict.pages.australia.success_title }} />
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
						<h2 className="section-australia_title text-center text-uppercase mb-lg-4">{dict.pages.australia.cta_form_l1} <span className="d-inline-block d-lg-block fw-bold">{dict.pages.australia.cta_form_l2}</span></h2>
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
									titleCard={dict.forms.home.title}
									subtitleCard={dict.forms.home.subtitle}
									descriptionCard={dict.pages.australia.desc_form}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
