import FormEmbed from "@/components/FormEmbed";
import CarouselTestimonios from "@/components/CarouselTestimonios";
import { loadHomeJson } from "@/lib/loadJson";
import { getAssetUrl } from "@/lib/url";
import { Metadata } from 'next';
import { resolveDictPath } from "@/lib/resolveDictPath";
import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';

export const generateStaticParams = generateLocaleParams;

export const metadata:Metadata = {
	title: "Renovación de Visa | LatinAdvisor",
}

export default async function WorkAndHolidayPage({
		params
	}: {
		params: Promise<{ locale: Locale }>
	}) {

	const { locale } = await params;
	const dict = await getDictionary(locale);
	
	const data = loadHomeJson();
	const testimonios = data.data.testimonios.australia.map((item:any)=>{
		return {
			...item,
			testimonial: resolveDictPath(item.testimonial, dict)
		}
	});
	
	return (
		<>
			{/* ====================== HERO / PRINCIPAL BANNER ====================== */}
			<section className="section-australia section-australiaWorkAndHoliday container-fluid">
				<div className="row">
					<div className="col-12 px-0 section-australia_content mb-md-4">
						<img
							src={getAssetUrl("/assets/images/australia/work-and-holiday/work-and-holiday-australia.webp")}
							alt="Background work and holiday australia latinadvisor"
							className="img-fluid w-100 d-none d-md-block"
						/>
						<img 
							src={getAssetUrl("/assets/images/australia/work-and-holiday/work-and-holiday-australia-resposive.webp")}
							alt="Background work and holiday australia latinadvisor"
							className="img-fluid w-100 d-block d-md-none"
						/>
						<div className="caption">
							<h1>{dict.pages.work_holiday.title_caption} <br/>Australia: <span className="d-block mt-3">{dict.pages.work_holiday.subtitle_caption}</span></h1>
						</div>
					</div>
				</div>
			</section>

			<section className="section-australia container-fluid">
				<section className="container">
					<div className="row d-flex justify-content-center py-4">
						<div className="col-12 col-lg-10 pt-4 pb-5 section-australia_contentCta">
							<p className="mb-3">{dict.pages.work_holiday.description1}</p>
							<p className="">{dict.pages.work_holiday.description2}</p>
							<a href="#agentes" className="btn scrolling">{dict.pages.australia.cta_caption}</a>
						</div>
					</div>
				</section>
			</section>

			<section className="section-australia section-australiaWorkAndHoliday container-fluid bg-blue-dark-5 py-5">
				<section className="container py-lg-4">
					<div className="row d-flex justify-content-center">
						<div className="col-12 col-lg-9 pt-4 pb-5">
							<h2 className="section-australia_title text-center text-uppercase text-white">{dict.pages.work_holiday.benefits_title}</h2>
						</div>
						<div className="col-12 col-lg-10 my-4 ">
							<div className="row d-flex align-items-center justify-content-around mb-4">
								<div className="col-12 col-lg-6 information ps-lg-5">
									<ul className="mb-3 text-white">
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.benefits_1}}></li>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.benefits_2}}></li>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.benefits_3}}></li>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.benefits_4}}></li>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.benefits_5}}></li>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.benefits_6}}></li>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.benefits_7}}></li>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.benefits_8}}></li>
									</ul>
								</div>
								<div className="col-12 col-lg-4 information d-none d-md-block">
									{[
										"/assets/images/australia/work-and-holiday/beneficios-ampliar-estadia-australia.webp",
										"/assets/images/australia/work-and-holiday/beneficios-ahorra-dolares-australianos.webp",
										"/assets/images/australia/work-and-holiday/beneficios-amigos-culturas.webp",
										"/assets/images/australia/work-and-holiday/beneficios-trabaja-adquiere-experiencia-internacional.webp"
									].map((src, idx) => (
										<img
											key={src}
											src={getAssetUrl(src)}
											alt=""
											className="img-fluid w-100 my-3"
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>


			<section className="section-australia section-australiaWorkAndHoliday container-fluid">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-9 mb-4">
							<h2 className="section-australia_title text-center  text-uppercase mb-4">{dict.pages.work_holiday.requirements_title}<span className="d-inline d-md-block">Work and Holiday Australia</span></h2>
						</div>
						<div className="col-12 col-lg-10">
							<div className="row d-flex justify-content-center">
								<div className="col-12 col-lg-5 mb-3 information">
									<img src={getAssetUrl("/assets/images/australia/work-and-holiday/requisitos-para-aplicar-work-and-holiday-australia.webp")} alt="" className="img-fluid w-100 my-lg-4"/>
								</div>
								<div className="col-12 col-lg-6 information ps-lg-5 pt-5 pb-4">
									<h5 className="mb-3">{dict.pages.work_holiday.requirements_desc}</h5>
									<ul>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.requirements_1}}></li>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.requirements_2}}></li>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.requirements_3}}></li>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.requirements_4}}></li>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.requirements_5}}></li>
										<li dangerouslySetInnerHTML={{ __html:  dict.pages.work_holiday.requirements_6}}></li>		
									</ul>	
									<div className="section-australiaWorkAndHoliday_alert mt-4 mt-md-5">
										<div className="px-4 py-4">
											<h4 className="mb-2">⚠️ {dict.pages.work_holiday.remember_title}</h4>
											<p dangerouslySetInnerHTML={{ __html: dict.pages.work_holiday.remember_desc }}></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

			<section  className="section-australia section-australiaWorkAndHoliday container-fluid bg-grey-light-3">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-9 mb-4">
							<h2 className="section-australia_title text-center text-uppercase mb-4">{dict.pages.work_holiday.experience_title} <span className="d-inline d-md-block">{dict.pages.work_holiday.experience_subtitle}</span></h2>
						</div>
						<div className="col-12 col-lg-12 pb-5 pb-lg-0">
							<CarouselTestimonios items={testimonios} />
						</div>
					</div>
				</section>
			</section>

			<section id="contactForm" className="section-escribenos section-escribenos_contactForm container-escribenos container-fluid">
				<div className="row d-flex justify-content-center">
					<div className="col-11 col-lg-10 mt-4 py-5 py-lg-5 mt-lg-5">
						<h2 className="section-australia_title text-center text-uppercase mb-lg-4" dangerouslySetInnerHTML={{ __html: dict.pages.work_holiday.cta_form }}></h2>
					</div>
					<div className="col-11 col-lg-10 pb-5">
						<div className="row d-flex justify-content-center">
							<div className="col-12 col-sm-9 col-lg-6">
								<FormEmbed
									formSrc="https://api.leadconnectorhq.com/widget/form/irpfW9l9Qwjnn31bMszF"
									formName="4. Formulario - Web Work and holiday"
									formId="k6czEex6PZdfeLpophBR"
									formHeight={1526}
									title="4. Formulario - Web Work and holiday"
									titleCard={dict.forms.home.title}
									subtitleCard={dict.forms.home.subtitle}
									descriptionCard={dict.pages.work_holiday.description_form}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}
