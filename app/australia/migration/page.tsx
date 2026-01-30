import FormEmbed from "@/components/FormEmbed";
import CarouselTestimonios from "@/components/CarouselTestimonios";
import { loadHomeJson } from "@/lib/loadJson";
import { getAssetUrl } from "@/lib/url";
import { Metadata } from 'next';
import Australia from '../page';
import BannerInterno from "@/components/BannerInterno";
import CarouselTeamMigration from "@/components/CarouselTeamMigration";

export const metadata:Metadata = {
    title: "Migration | LatinAdvisor",
}

export default function MigrationPage() {

    const data = loadHomeJson();
	const migrationProcesses = data.data.migration_processes.au;
    const migrationTeam = data.data.migration_team.au;
    return (
        <>
            <BannerInterno
                imageSrc=""
                title="MIGRACIÓN"
                className="internal_migration"
            />

            <section className="section-australia section-australiaMigration container-fluid py-5">
				<section className="container py-lg-4">
					<div className="row d-flex justify-content-center">
						<div className="col-12 col-lg-12 pt-4 pb-4">
							<h2 className="section-australia_title text-center text-uppercase">Consultas migratorias en LatinAdvisor</h2>
						</div>
						<div className="col-12 col-lg-11 my-4 section-australia_contentCta">
                            <p className="mb-3">En <strong>LatinAdvisor</strong>, nuestros agentes migratorios registrados Juan Bedoya (MARN 2117696), Renatto Lopez (MARN 2518857) y Christina Toftegaard (MARN 2117707) brindan asesoría profesional, transparente y estratégica, diseñada para ayudarte a tomar decisiones informadas y seguras sobre tu futuro en Australia.</p>
                            <p className="mb-5">Las consultas se realizan de manera virtual para ofrecer la máxima flexibilidad, atendiendo a clientes tanto dentro de Australia como en el extranjero. También es posible coordinar consultas presenciales en Brisbane o Sídney, previa solicitud.</p>
                            <a href="#contactForm" className="btn scrolling mt-2">¡CONOCE MÁS SOBRE LA CITA MIGRATORIA!</a>
                        </div>
                    </div>  
                </section>
            </section>

            <section className="section-australia section-australiaMigration">
                <section className="container">
                    <div className="row d-flex justify-content-center">
						<div className="col-12 col-lg-10 pt-4 pb-5">
							<h2 className="section-australia_title text-center text-uppercase">Tipos de visas y servicios</h2>
						</div>
                        <div className="col-12 col-lg-11 pt-4 pb-5">
                            <div className="row d-flex align-items-stretch justify-content-center">
                                { migrationProcesses.map((item: any, i: number) => (
                                    <div className="col-10 col-lg-3 mb-4" key={i}>
                                        <a href={getAssetUrl("/australia/migration/"+item.slug)}>
                                            <div className="card card-ourServicesMigration">
                                                <h3 className="card-ourServicesMigration_title">{item.title}</h3>
                                            </div>
                                        </a>
                                    </div>
                                )) }
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="section-australia container-fluid bg-grey-light-3">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-10 mb-4">
							<h2 className="section-australia_title text-center text-uppercase mb-4">Nuestros Agentes Migratorios certificados en Australia</h2>
						</div>
						<div className="col-12 col-lg-10 information">
							<div className="row">
								<div className="col-12 section-australiaMigration_agents">
									<p className="mb-4">Detrás de cada proyecto de vida en Australia debe haber un equipo que convierta los sueños en planes reales. En Latinadvisor contamos con agentes migratorios registrados (MARN) cuya experiencia y enfoque estratégico te brindan la claridad y el acompañamiento que necesitas para avanzar con confianza.</p>
								</div>
                                <div className="col-12 section-australiaMigration_agents">
                                    {[
                                        {
                                            img: "/assets/images/australia/migration/juan-carlos-agente.png",
                                            name: "Juan Carlos Bedoya",
                                            city: "Brisbane",
                                            url: "https://api.whatsapp.com/send?phone=61426844177&text=Hola,%20estoy%20interesado%20en%20saber%20m%C3%A1s%20sobre%20los%20Procesos%20Migratorios.%20Gracias.",
                                            description: `
                                                <p><strong>Agente Migratorio Registrado – MARN 2117696</strong></p>
                                                <p><strong>Cargo:</strong> CEO y Agente Migratorio Registrado</p>
                                                <p><strong>En LatinAdvisor desde:</strong> Abril de 2014 (Fundador)</p>
                                                <h5>Formación Académica</h5>
                                                <ul>
                                                    <li>Ingeniero Electrónico – Pontificia Universidad Javeriana, Colombia</li>
                                                    <li>Maestría en Negocios y Tecnología de la Información – The University of Melbourne</li>
                                                    <li>Agente Migratorio Registrado desde 2021</li>
                                                </ul>
                                                <h5>Experiencia Profesional</h5>
                                                <ul>
                                                    <li>Fundador y CEO, LatinAdvisor Pty Ltd (2014–Presente)</li>
                                                    <li>Agente Migratorio Registrado (2021–Presente)</li>
                                                    <li>Arquitecto Senior de Soluciones para el sector Salud, Amazon Web Services (AWS) (2021–Presente)</li>
                                                </ul>
                                                <h5>Lo que Juan Carlos aporta a LatinAdvisor</h5>
                                                <p>Juan Carlos aporta una combinación única de experiencia técnica, liderazgo empresarial y un profundo conocimiento del sistema migratorio australiano. Como fundador de LatinAdvisor, ha construido una estructura operativa sólida, basada en la calidad, la transparencia y un enfoque centrado en las personas.</p>
                                                <p>Su experiencia internacional, su visión estratégica y su trabajo en AWS fortalecen su capacidad para analizar situaciones complejas y diseñar estrategias migratorias efectivas para sus clientes. Juan Carlos lidera la organización con un enfoque en la innovación, el desarrollo del equipo y la entrega de resultados excepcionales en cada proceso migratorio.</p>`
                                        },
                                        {
                                            img: "/assets/images/australia/migration/renatto-agente.png",
                                            name: "Renatto López",
                                            city: "Sydney",
                                            url: "https://api.whatsapp.com/send?phone=61426844177&text=Hola,%20estoy%20interesado%20en%20saber%20m%C3%A1s%20sobre%20los%20Procesos%20Migratorios.%20Gracias.",
                                            description: `
                                            <p><strong>Agente Migratorio Registrado – MARN 2518857</strong></p>
                                            <p><strong>Cargo:</strong> Agente Migratorio Registrado</p>
                                            <p><strong>En LatinAdvisor desde:</strong> Abril de 2025</p>
                                            <h5>Formación Académica</h5>
                                            <ul>
                                                <li>Maestría en Gestión de Proyectos – The University of Sydney</li>
                                            </ul>
                                            <h5>Experiencia Profesional</h5>
                                            <ul>
                                                <li>Agente Migratorio Registrado, LatinAdvisor (2025–Presente)</li>
                                                <li>Asesor de ingenieros en procesos de evaluación de cualificaciones y experiencia profesional ante Engineers Australia</li>
                                            </ul>
                                            <h5>Lo que Renatto aporta a LatinAdvisor</h5>
                                            <p>Renatto combina una sólida formación académica con experiencia práctica apoyando a ingenieros en sus procesos de evaluación de habilidades ante Engineers Australia. Su enfoque analítico, atención al detalle y metodología estructurada lo convierten en un miembro clave del equipo, especialmente en casos de alta complejidad técnica.</p>
                                            <p>Está comprometido con brindar asesoría migratoria clara, precisa y centrada en el cliente, asegurando que cada solicitud se prepare bajo los más altos estándares de calidad.</p>`
                                        },
                                        {
                                            img: "/assets/images/australia/migration/christina-agente.png",
                                            name: "Christina Toftegaard",
                                            city: "Brisbane",
                                            url: "https://latinadvisor.setmore.com/christina-toftegaard",
                                            description: `
                                            <p><strong>Agente Migratoria – MARN 2117707</strong></p>
                                            <p><strong>Cargo:</strong> Agente Migratoria Registrada</p>
                                            <p><strong>En LatinAdvisor desde:</strong> Mayo de 2025</p>
                                            <h5>Formación Académica</h5>
                                            <ul>
                                                <li>Evaluación Final (Capstone) para Agentes Migratorios</li>
                                                <li>Diploma de Posgrado en Derecho y Práctica de Migración Australiana</li>
                                                <li>Maestría en Traducción e Interpretación (Francés–Danés), Dinamarca</li>
                                                <li>Beca Erasmus (estudios de pregrado, Francia)</li>
                                                <li>Licenciatura en Lenguas Empresariales (Francés y Alemán), Dinamarca</li>
                                            </ul>
                                            <h5>Experiencia Profesional</h5>
                                            <ul>
                                                <li>Agente Migratoria Registrada, agencia de migración (2024–2025)</li>
                                                <li>Agente Migratoria Registrada y Propietaria de Negocio (2021–2024)</li>
                                                <li>Propietaria y Socia Directora, empresa australiana de importación de muebles (2010–2019)</li>
                                                <li>Roles como paralegal y secretaria legal en firmas legales australianas e internacionales (2001–2010)</li>
                                            </ul>
                                            <h5>Lo que Christina aporta a LatinAdvisor</h5>
                                            <p>Como migrante multilingüe, Christina ofrece consultas en inglés y danés, aportando una sólida perspectiva cultural europea y escandinava a su trabajo de asesoría. Al haber vivido de manera permanente en Australia desde 2008, comprende tanto las complejidades legales de los procesos migratorios como el componente humano que hay detrás de cada decisión.</p>
                                            <p>Christina siente una profunda vocación por acompañar a personas, familias y empresas a lo largo del sistema migratorio australiano. Brinda asesoría clara, estratégica y empática, adaptada a los objetivos específicos de cada cliente.</p>
                                            <p>Además, contribuye al crecimiento de LatinAdvisor a través del desarrollo de negocio y mentorías, fortaleciendo la calidad y el impacto de nuestros servicios.</p>`
                                        },
                                    ].map((item, i) => (
                                        <div className="row d-flex align-items-stretch py-4 py-lg-5" key={i}>
                                            <div className="col-12 col-lg-12 order-0 mb-4 mb-lg-0">
                                                <h5>En la ciudad de {item.city}:</h5>
                                            </div>
                                            <div className="col-12 col-lg-8 py-4 d-flex align-items-center order-1">
                                                <img
                                                    src={getAssetUrl(item.img)}
                                                    alt=""
                                                    className="img-fluid w-100 my-lg-4 img-agent me-5"
                                                />
                                                <h4><strong>{item.name}</strong></h4>
                                            </div>
                                            <div className="col-12 col-lg-4 section-australia_contentCta d-flex align-items-center py-4 order-3 order-lg-2">
                                                <a href={item.url} target="_blank" className="btn">¡Agenda ahora!</a>
                                            </div>
                                            <div className="col-12 order-2 order-lg-3 information" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="section-australia section-australiaMigration">
                <section className="container">
                    <div className="row d-flex justify-content-center pt-4 pt-lg-5">
						<div className="col-12 col-lg-10 pt-5 pb-5">
							<h2 className="section-australia_title text-center text-uppercase">Nuestro equipo</h2>
						</div>
                        <div className="col-12 col-lg-11 pt-2 section-australiaMigration_team">
                            <CarouselTeamMigration items={migrationTeam} />
                        </div>
                    </div>
                </section>
            </section>

                            
            <section id="contactForm" className="section-escribenos section-escribenos_contactForm container-escribenos container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-11 col-lg-10 mt-4 py-5 py-lg-5 mt-lg-5">
                        <h2 className="section-australia_title text-center text-uppercase mb-lg-4">Inicia tu ruta migratoria</h2>
                    </div>
                    <div className="col-11 col-lg-10 pb-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-sm-9 col-lg-6">
                                <FormEmbed
                                    formSrc="https://api.leadconnectorhq.com/widget/form/EhQtmWa8R4EPoNXtkLB1"
                                    formName="1. Formulario - Perfilamiento migracion español"
                                    formId="EhQtmWa8R4EPoNXtkLB1"
                                    formHeight={1447}
                                    title="1. Formulario - Perfilamiento migracion español"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
	);
}
