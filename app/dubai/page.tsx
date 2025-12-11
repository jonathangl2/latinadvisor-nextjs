import BannerVideo from "@/components/BannerVideo";
import CarouselBeneficios from "@/components/CarouselBeneficios";
import FormEmbed from "@/components/FormEmbed";
import CarouselTestimoniosDubai from "@/components/CarouselTestimoniosDubai";
import { loadHomeJson } from "@/lib/loadJson";
import { getAssetUrl } from "@/lib/url";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata:Metadata = {
	title: "Estudia y Trabaja en Dubái | LatinAdvisor",
	description: "Descubre las oportunidades laborales en Dubai para estudiantes internacionales y experimenta una vida llena de lujo y cultura. Con una infraestructura moderna, seguridad y calidad de vida excepcionales, Dubai ofrece una mezcla única de tradición y modernidad. Disfruta de un mercado laboral competitivo en sectores como tecnología e ingeniería, mientras estudias o trabajas en una de las ciudades más emocionantes del mundo. ¡Planifica tu viaje y conéctate con tu futuro profesional hoy mismo!",
	keywords: "Estudiar en Dubai, Cursos de inglés en Dubai, Educación internacional en Dubai, Programas de estudio en Dubai, Aprender inglés en el extranjero, Estudios vocacionales en Dubai, Cursos de inglés de negocios en Dubai, Bachelors en Dubai, Formación técnica en Dubai, Estudios en administración en Dubai, Programas de gestión en Dubai, Ciencia en computación en Dubai, Cursos de marketing digital en Dubai, Estudios de hospitalidad en Dubai, Curso de gestión de proyectos en Dubai, Carreras en Dubai, Oportunidades laborales en Dubai, Residencia estudiantil en Dubai, Trabajo en Dubai para estudiantes, Calidad de vida en Dubai, Vivir en Dubai como estudiante, Infraestructura en Dubai, Vivienda en Dubai, Estudios de contabilidad en Dubai, Cursos de publicidad digital en Dubai, Formación en eventos deportivos en Dubai, Cursos de gestión hotelera en Dubai, Análisis de datos en Dubai, Inteligencia artificial en Dubai, Viajar a Dubai, Vida estudiantil en Dubai, Seguridad en Dubai, Opciones de ocio en Dubai, Cultura y vida en Dubai, Transporte en Dubai"
}

export default function Dubai() {
	
	const data = loadHomeJson();
  	const testimoniosDubai = data.data.testimonios.dubai;

	return (
		<>
			<BannerVideo
				imageSrc={getAssetUrl("/assets/images/dubai/dubai-estudia-y-trabaja.webp")}
				imageSrcResponsive={getAssetUrl("/assets/images/dubai/dubai-estudia-y-trabaja-responsive.webp")}
				videoSrc="https://www.youtube.com/embed/ky8n2saU2Wo?si=LWt-AmyzdzyjEDJi"
				title="Estudia y Trabaja en Dubái"
				subtitle="Tu Oportunidad de Vida y Crecimiento Profesional"
			/>
			
			<section className="section-australia container-fluid">
				<section className="container">
					<div className="row d-flex justify-content-center py-3 py-lg-5">
						<div className="col-12 col-lg-11 mt-lg-3 py-5 section-australia_contentCta">
							<p className="">Descubre por qué Dubái es el destino favorito para estudiantes internacionales, con un proceso de <strong>visado fácil, rápido, sin requisito de solvencia económica</strong> y con grandes oportunidades laborales.</p>
							<a href="#contactForm" className="btn scrolling">¡AGENDA TU ASESORÍA VIRTUAL GRATUITA!</a>
						</div>
					</div>
				</section>
			</section>


			<section className="section-australia container-fluid bg-grey-light-3">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-10 mb-4">
							<h2 className="section-australia_title text-center text-uppercase mb-4">¿Por Qué Dubái es el Destino Ideal para Ti?</h2>
						</div>
						<div className="col-12 col-lg-10">
							<div className="row">
								<div className="col-12 mb-3 information">
									<p className="mb-4">Dubái se ha convertido en uno de los destinos favoritos para estudiantes internacionales. Por su proceso de visado fácil y rápido, oportunidades laborales, seguridad y diversidad cultural, vivir en esta ciudad es una experiencia que transforma vidas.</p>
									<h4 className="mb-4"><strong>Puntos Clave:</strong></h4>
								</div>
							</div>
							<div className="row">

								<div className="col-12 col-md-6 ps-lg-4 information">
									<div className="row mb-4 d-flex align-items-center">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-proceso-facil-rapido"></i>
										</div>
										<div className="col">
											<p className="">Proceso de visado <strong>fácil, rápido y sin solvencia económica.</strong></p> 
										</div>
									</div>
								</div>

								<div className="col-12 col-md-6 ps-lg-4 information">
									<div className="row mb-4 d-flex align-items-center">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-diversidad-cultural"></i>
										</div>
										<div className="col">
											<p className=""><strong>Seguridad y diversidad</strong> cultural.</p> 
										</div>
									</div>
								</div>

								<div className="col-12 col-md-6 ps-lg-4 information">
									<div className="row mb-4 d-flex align-items-center">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-oportunidades-laborales"></i>
										</div>
										<div className="col">
											<p className="">Grandes <strong>oportunidades laborales.</strong></p> 
										</div>
									</div>
								</div>

								<div className="col-12 col-md-6 ps-lg-4 information">
									<div className="row mb-4 d-flex align-items-center">
										<div className="col-3 col-lg-2 d-flex justify-content-center">
											<i className="icon-requirements icon-networking"></i>
										</div>
										<div className="col">
											<p className="">Más del <strong>85% de la población</strong> son extranjeros, lo que la convierte en un lugar ideal para <strong>practicar inglés</strong>, hacer <strong>networking</strong> global y abrir nuevas <strong>puertas profesionales.</strong></p> 
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>
			</section>

			<CarouselBeneficios title="5 Beneficios Exclusivos que Dubái Ofrece a Estudiantes Internacionales" location="dubai" />

			<section className="section-dubai container-fluid">
				<section className="container pt-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-10 mb-4">
							<h2 className="section-australia_title text-center text-uppercase mb-4">Amplía tus Horizontes: Programas Académicos en Dubái</h2>
						</div>
						<div className="col-12 col-lg-10 my-4">
							<div className="row d-flex justify-content-between align-items-center">
								<div className="col-12 col-lg-6 section-dubai_courses pe-lg-4">

									<div className="row">
										<div className="col-12">
											<p className="mb-3">Dubái ofrece una amplia variedad de programas académicos que se ajustan a tus metas personales y profesionales:</p>
										</div>
										<div className="col-12">
											<h3 className="bg-green-2 mt-4 mb-3 p-3">Lista de Programas:</h3>
											<ul className="mb-3">
												<li>Inglés General.</li>
												<li>Preparación para exámenes IELTS - Cambridge.</li>
												<li>Diploma en Negocios (puedes combinarlo con un curso de inglés).</li>
												<li>Maestrías.</li>
											</ul>
										</div>
									</div>
								
								</div>
								<div className="col-12 col-lg-6 information mt-5 mt-lg-0">
									<img src={getAssetUrl("/assets/images/dubai/programas-academicos-dubai.webp")} alt="" className="img-fluid w-100 mb-lg-4"/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

			<section className="section-australia container-fluid bg-grey-light-3">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-10 mb-4">
							<h2 className="section-australia_title text-center text-uppercase mb-4">Requisitos Sencillos para tu Aventura Académica en Dubái</h2>
						</div>
						<div className="col-12 col-lg-10">
							<div className="row">
								<div className="col-12 mb-3 information">
									<p className="mb-4">Una de las grandes ventajas de este destino es que los requisitos son muy sencillos: <strong>¡No hay límite de edad,</strong> no se requiere un <strong>nivel académico</strong> específico y <strong>no necesitas demostrar solvencia económica!</strong> Solo asegúrate de contar con presupuesto para el curso y tiquetes.</p>
								</div>
							</div>
							<div className="row d-flex justify-content-between align-items-center">
								<div className="col-12 col-lg-6 information order-1 order-lg-0 mt-5 mt-lg-0">
									<img src={getAssetUrl("/assets/images/dubai/requisitos-para-tu-aventura-academica-en-dubai.webp")} alt="" className="img-fluid w-100 mb-4"/>
								</div>
								<div className="col-12 col-lg-6 ps-lg-5 information order-0 order-lg-1">
									<h3 className="mb-4">Documentación básica:</h3>
									<ul>
										<li><strong>Pasaporte con vigencia</strong> mínima de 6 meses.</li>
										<li><strong>Inscripción a un programa académico</strong> en una institución aprobada.</li>
										<li><strong>Exámenes médicos</strong> (VIH, hepatitis, tuberculosis, sífilis y prueba de embarazo para mujeres).</li>
										<li><strong>Seguro médico internacional</strong> que te ofrecerá asistencia médica con cobertura específica según el elegido.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>	

			<section className="section-dubai section-australia container-fluid bg-blue-grey-4">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-10 mb-lg-4">
							<h2 className="section-australia_title text-white text-center  text-uppercase mb-4">Experiencias reales: Lo que dicen nuestros estudiantes</h2>
						</div>
						<div className="col-12 mb-lg-4">
							<CarouselTestimoniosDubai items={testimoniosDubai} />
						</div>
					</div>
				</section>
			</section>

			<section id="contactForm" className="section-escribenos section-escribenos_contactForm container-escribenos container-fluid">
				<div className="row d-flex justify-content-center">
					<div className="col-11 col-lg-10 mt-4 py-5 py-lg-5 mt-lg-5">
						<h2 className="section-australia_title text-center text-uppercase mb-lg-4">¿Listo para Estudiar y <br/>Trabajar en Dubái??</h2>
					</div>
					<div className="col-11 col-lg-10 pb-5">
						<div className="row d-flex justify-content-center">
							<div className="col-12 col-sm-9 col-lg-6">
								<FormEmbed
									formSrc="https://api.leadconnectorhq.com/widget/form/k6czEex6PZdfeLpophBR"
									formName="3. Formulario - Web Dubai"
									formId="k6czEex6PZdfeLpophBR"
									formHeight={1416}
									title="3. Formulario - Web Dubai"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
