import FormEmbed from "@/components/FormEmbed";
import CarouselTestimonios from "@/components/CarouselTestimonios";
import { loadHomeJson } from "@/lib/loadJson";
import { getAssetUrl } from "@/lib/url";
import { Metadata } from 'next';
import Australia from '../page';

export const metadata:Metadata = {
	title: "Renovación de Visa | LatinAdvisor",
}

export default function WorkAndHolidayPage() {
	
	const data = loadHomeJson();
	const testimonios = data.data.testimonios.australia;
	
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
							<h1>Work and Holiday <br/>Australia: <span className="d-inline d-md-block mt-md-3">Requisitos, beneficios y cómo aplicar</span></h1>
						</div>
					</div>
				</div>
			</section>

			<section className="section-australia container-fluid">
				<section className="container">
					<div className="row d-flex justify-content-center py-4">
						<div className="col-12 col-lg-10 pt-4 pb-5 section-australia_contentCta">
							<p className="mb-3">La Work and Holiday Visa Australia te permite vivir, trabajar y viajar en este país por hasta 12 meses. Es ideal para jóvenes entre 18 y 30 años que desean combinar aventura, aprendizaje y experiencia laboral internacional.</p>
							<p className="">Con esta visa podrás sumergirte en la cultura australiana, mejorar tu inglés y disfrutar de una temporada inolvidable rodeado de naturaleza, playas, ciudades modernas y personas de todas partes del  mundo.</p>
							<a href="#agentes" className="btn scrolling">¡AGENDA TU ASESORÍA VIRTUAL GRATUITA!</a>
						</div>
					</div>
				</section>
			</section>

			<section className="section-australia section-australiaWorkAndHoliday container-fluid bg-blue-dark-5 py-5">
				<section className="container py-lg-4">
					<div className="row d-flex justify-content-center">
						<div className="col-12 col-lg-9 pt-4 pb-5">
							<h2 className="section-australia_title text-center text-uppercase text-white">Beneficios de la Work and Holiday visa en Australia</h2>
						</div>
						<div className="col-12 col-lg-10 my-4 ">
							<div className="row d-flex align-items-center justify-content-around mb-4">
								<div className="col-12 col-lg-6 information ps-lg-5">
									<ul className="mb-3 text-white">
										<li><span>Mejora tu nivel de inglés</span> con práctica diaria en un entorno real.</li>
										<li><span>Trabaja un máximo de 6 meses</span> con el mismo empleador. Transcurridos estos 6 meses, deberás cambiar de trabajo.</li>
										<li><span>Adquiere experiencia laboral internacional,</span> muy valorada en tu carrera profesional.</li>
										<li><span>Entra y sal de Australia</span> tantas veces como quieras durante estos 12 meses. </li>
										<li><span>Ahorra en dólares australianos</span> y financia tu próxima aventura o estudios.</li>
										<li><span>Estudia hasta 4 meses,</span> la opción de matricularte en un curso de inglés durante tus primeros meses en Australia es ideal.</li>
										<li><span>Conoce nuevas culturas</span> y haz amigos de todo el mundo en un ambiente multicultural.</li>
										<li><span>Solicita un segundo y un tercer visado</span> Work and Holiday, si te enamoras de Australia y quieres ampliar tu estancia.</li>
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
							<h2 className="section-australia_title text-center  text-uppercase mb-4">Requisitos para aplicar a la <span className="d-inline d-md-block">Work and Holiday Australia</span></h2>
						</div>
						<div className="col-12 col-lg-10">
							<div className="row d-flex justify-content-center">
								<div className="col-12 col-lg-5 mb-3 information">
									<img src={getAssetUrl("/assets/images/australia/work-and-holiday/requisitos-aplicar-work-and-holiday-australia.webp")} alt="" className="img-fluid w-100 my-lg-4"/>
								</div>
								<div className="col-12 col-lg-6 information ps-lg-5 pt-5 pb-4">
									<h5 className="mb-3">Para postular a la visa Work and Holiday Australia, debes cumplir con estas condiciones:</h5>
									<ul>
										<li>Tener entre <strong>18 y 30 años.</strong></li>
										<li>Pasaporte válido de un país elegible en el caso de hispanos: (Argentina, Chile, Perú, Ecuador, Uruguay o España).</li>
										<li>Haber completado estudios terciarios o contar con al menos <strong>2 años de estudios universitarios.</strong></li>
										<li>Contar con una solvencia económica mínima de <strong>USD $3.000 + tiquetes de viaje.</strong></li>
										<li>Tener un <strong>nivel de inglés intermedio</strong> acreditado con un examen oficial.</li>
										<li>No tener hijos dependientes.</li>
									</ul>	
									<div className="section-australiaWorkAndHoliday_alert mt-4 mt-md-5">
										<div className="px-4 py-4">
											<h4 className="mb-2">⚠️ Recuerda: </h4>
											<p>los <strong>cupos son limitados cada año</strong>, por lo que es clave preparar tu aplicación con anticipación.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

			<section  className="section-australia section-australiaRenovacion container-fluid bg-grey-light-3">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-9 mb-4">
							<h2 className="section-australia_title text-center text-uppercase mb-4">Experiencia de una <span className="d-inline d-md-block">work and holiday</span></h2>
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
						<h2 className="section-australia_title text-center text-uppercase mb-lg-4">¿Listo para vivir y <br/>trabajar en Australia?</h2>
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
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}
