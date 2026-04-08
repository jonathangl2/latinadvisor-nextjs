import FormEmbed from "@/components/FormEmbed";
import { loadHomeJson } from "@/lib/loadJson";
import { getAssetUrl } from "@/lib/url";
import { Metadata } from 'next';
import CarouselTeamMigration from "@/components/CarouselTeamMigration";
import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';
import BannerCarouselCustom from "@/components/BannerCarouselCustom";
import AgentCards from "@/components/AgentsCards";
import InstagramEmbed from "@/components/InstagramEmbed";


export const generateStaticParams = generateLocaleParams;

export const metadata:Metadata = {
    title: "Migration | LatinAdvisor",
}

export default async function MigrationPage({
        params
    }: {
        params: Promise<{ locale: Locale }>
    }) {

    const { locale } = await params;
    const dict = await getDictionary(locale);
    const localePath = (path: string) => getAssetUrl(path, locale);
        
    const data = loadHomeJson();
	const migrationProcesses = data.data.migration_processes.au;
    const migrationTeam = data.data.migration_team.au;
    return (
        <>
            {  
                <BannerCarouselCustom 
                    items={[
                        {
                            desktopImg: "/assets/images/australia/migration/home-migration-desktop.png",
                            mobileImg: "/assets/images/australia/migration/home-migration-responsive.png",
                            title: "Carlos Enrique Serrano Pena",
                            description: "Mi experiencia con LatinAdvisor ha sido muy positiva desde el inicio. Me Han acompañaron durante todo mi proceso con la visa 407, Vetassess, y visa 482. siempre resolviendo mis dudas de manera clara y rápida.",
                            image: "/assets/images/australia/migration/migration-testimonio-carlos-enrique-serrano-pena.png",
                        },
                        {
                            desktopImg: "/assets/images/australia/migration/home-migration-desktop.png",
                            mobileImg: "/assets/images/australia/migration/home-migration-responsive.png",
                            title: "Holbein Yeltsein Garcia Engativa",
                            description: "Después de una negacion de visa de estudiante con otra agencia, estaba realmente desanimado y no sabía qué hacer. Fue entonces que contacté a LatinAdvisor, y desde el primer momento sentí que estaba en las mejores manos.",
                            image: "/assets/images/australia/migration/migration-testimonio-holbein-yeltsein-garcia-engativa.png",
                        },
                        {
                            desktopImg: "/assets/images/australia/migration/home-migration-desktop.png",
                            mobileImg: "/assets/images/australia/migration/home-migration-responsive.png",
                            title: "Ramón Iglesias",
                            description: "Mi aplicación para la Sponsorship 482 en Australia fue rápida y eficaz. Su equipo me acompañó en cada paso con gran profesionalidad y conocimiento de las regulaciones australianas. Gracias a ellos, hoy vivo y trabajo en Australia.",
                            image: "/assets/images/australia/migration/migration-testimonio-ramon-iglesias.png",
                        }
                    ]}
                />
            }

            <section className="section-australia section-australiaMigration container-fluid py-5">
                <section className="container py-lg-4"> 
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-lg-5 pt-4 pt-lg-0 pb-5 pe-lg-5 information">
                            <h2 className="section-australia_title text-uppercase mb-4">Nos importas</h2>
                            <p className="mb-3">No es un eslogan. Es la forma en la que trabajamos cada caso.</p>
                            <p className="mb-3">Tu proceso migratorio no es un número para nosotros. Es tu vida, tu tiempo y tu futuro.</p>
                            <p className="mb-4">Presentamos casos sólidos, organizados y bien argumentados.</p>
                            <div className="w-100 section-australia_contentCta d-flex justify-content-start">
                                <a href="#visas" className="btn scrolling mt-2 text-uppercase">¡Conoce nuestros servicios!</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 pt-4 pb-lg-5 information">
                            <div className="row">
                                {
                                    [
                                        {
                                            img: "/assets/images/australia/migration/values-1.png",
                                            description:"<strong>Nunca estás solo en tu proceso:</strong> Desde el primer análisis hasta la decisión final, caminamos contigo."
                                        },
                                        {
                                            img: "/assets/images/australia/migration/values-2.png",
                                            description:"<strong>Honestidad antes que promesas:</strong> Te decimos lo que sí es viable y lo que no."
                                        },
                                        {
                                            img: "/assets/images/australia/migration/values-3.png",
                                            description:"<strong>Hacemos lo complejo simple:</strong> Traducimos leyes migratorias en pasos claros y estratégicos."
                                        },
                                        {
                                            img: "/assets/images/australia/migration/values-4.png",
                                            description:"<strong>Enviamos aplicaciones que los case officers amen revisar:</strong> No enviamos formularios."
                                        },
                                    ].map((item:any, i:any) => (
                                        <div className="col-12 col-sm-6 d-flex align-items-center mb-4" key={i}>
                                            <div className="card card-valuesMigration border-0">
                                                <div className="card-body">
                                                <img
                                                    src={getAssetUrl(item.img)}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                                <h5 dangerouslySetInnerHTML={{ __html: item.description }}></h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div> 
                    </div>
                </section>                       
            </section>

            <section className="section-australia section-australiaMigration container-fluid py-5">
				<section className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-12 col-lg-12 pb-4">
							<h2 className="section-australia_title text-center text-uppercase">Citas migratorias en LatinAdvisor</h2>
						</div>
						<div className="col-12 col-lg-11 my-4 section-australia_contentCta">
                            <p className="mb-3">En <strong>LatinAdvisor</strong>, nuestros agentes migratorios registrados Juan Bedoya (MARN 2117696), Renatto Lopez (MARN 2518857) y Christina Toftegaard (MARN 2117707) brindan asesoría profesional, transparente y estratégica, diseñada para ayudarte a tomar decisiones informadas y seguras sobre tu futuro en Australia.</p>
                            {/* <p className="mb-5">Las consultas se realizan de manera virtual para ofrecer la máxima flexibilidad, atendiendo a clientes tanto dentro de Australia como en el extranjero. También es posible coordinar consultas presenciales en Brisbane o Sídney, previa solicitud.</p> */}
                        </div>
                    </div>  
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-lg-11 py-4">
                            <div className="row section-australiaMigration_consultations">
                                {
                                    [
                                        {
                                            img: "/assets/images/australia/migration/icon-migration-consultations-1.svg",
                                            description:"<strong>Tu agente migratorio ya sabe quién eres. </strong>Revisamos tu perfil antes de la reunión. No empezamos desde cero."
                                        },
                                        {
                                            img: "/assets/images/australia/migration/icon-migration-consultations-2.svg",
                                            description:"<strong>Sin límite de tiempo. </strong> Tu caso no se mide por reloj. Si necesitamos más tiempo, lo tomamos. <span>(Nuestro récord: 2h 42min.)</span>"
                                        },
                                        {
                                            img: "/assets/images/australia/migration/icon-migration-consultations-3.svg",
                                            description:"<strong>Sales con una estrategia clara.</strong> No terminas con dudas. Te llevas una ruta alineada con tus objetivos reales."
                                        },
                                        {
                                            img: "/assets/images/australia/migration/icon-migration-consultations-4.svg",
                                            description:"<strong>Recibes tu Carta de asesoría. </strong> Un documento formal con análisis, estrategia y próximos pasos. Una guía que puedes consultar cuando lo necesites."
                                        }
                                    ].map((item:any, i:any) => (
                                        <div className="col-12 col-sm-6 col-lg-3 d-flex mb-4 container-migrationConsultations" key={i}>
                                            <div className="card card-migrationConsultations">
                                                <div className="card-body">
                                                    <img
                                                        src={getAssetUrl(item.img)}
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                    <h5 dangerouslySetInnerHTML={{ __html: item.description }}></h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div> 
                    </div>
                </section>
            </section>

            <section className="section-australia section-australiaMigration container-fluid pt-4 pb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-12 pb-3">
                        <h2 className="section-australia_title text-center text-uppercase">Porque elegir latinadvisor</h2>
                    </div>
                </div>
            </section>

            <section className="section-australia section-australiaMigration section-australiaMigration_whyChooseUs  container-fluid py-4">
                <section className="container">
                    <div className="row container_whyChooseUsContent">
                        {
                            [
                                {
                                    percentage: "100%",
                                    title: "Engineers Australia <br>Skills Assessment",
                                    description: "de éxito."
                                },
                                {
                                    percentage: "95%",
                                    title: "Visa 482 ",
                                    description: "(Skills in Demand / TSS)"
                                },
                                {
                                    percentage: "100%",
                                    title: "Appeals (ART / Tribunal)",
                                    description: "Todos los casos han tenido resultados exitosos en audiencia cuando nuestros agentes migratorios han determinado previamente una probabilidad mínima del 50% de ganar el caso."
                                }
                            ].map((item:any, i:any) => (
                                <div className="col-12 col-md-4 d-flex align-items-center container-whyChooseUs" key={i}>
                                    <div className="card card-whyChooseUs border-0">
                                        <div className="card-body px-0">
                                            <h3 className="card-whyChooseUs_title" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                                            <h5 className="card-whyChooseUs_percentage">{item.percentage}</h5>
                                            <p className="card-whyChooseUs_description mb-0">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </section>

            <section className="section-australia section-australiaMigration container-fluid bg-grey-light-3">
				<section className="container py-3 py-lg-5">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-12 col-lg-11">
							<div className="row">
								<div className="col-12 col-sm-8 col-md-7">
                                    <div className="row">
                                        <div className="col-12 pb-5 pb-lg-3">
                                            <div className="row section-australiaMigration_metricsProgressCircle">
                                            {
                                                [{
                                                    name:"Acompañamiento",
                                                    value:"100"
                                                },{
                                                    name:"Honestidad",
                                                    value:"100"
                                                },
                                                {
                                                    name:"Claridad",
                                                    value:"100"
                                                },
                                                {
                                                    name:"Compromiso",
                                                    value:"100"
                                                }    
                                            ].map((item:any, i:any) => (
                                                    <div className="col col-sm-6 px-2 mb-3 container-progressCircle" key={i}>
                                                        <div className="card card-progressCircle">
                                                            <div className="card-body d-flex align-items-center">
                                                                <div className="progress-circle" style={{ '--value': `${item.value}` } as React.CSSProperties}>
                                                                    <span>{item.value}%</span>
                                                                </div>
                                                                <h5 className="ps-3">{item.name}</h5>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                ))
                                            }
                                            </div>
                                        </div>
                                        <div className="col-12 section-australiaMigration_metricsCta px-4 pe-lg-5 mb-4 mb-md-0">
                                            <h4 className="mt-2 mb-4"><strong>Nuestra experiencia habla por nosotros</strong></h4>
                                            {
                                            [   {
                                                    name:"VETASSESS – Skills Assessment",
                                                    value:"94"
                                                },{
                                                    name:"Visa 407 (Training Visa)",
                                                    value:"85"
                                                },
                                                {
                                                    name:"Visitor Visa",
                                                    value:"90"
                                                }
                                            ].map((item:any, i:any) => (
                                                <div className="row" key={i}>
                                                    <div className="col-12">
                                                        <h5><span>{item.name}</span></h5>
                                                    </div>
                                                    <div className="col-12 d-flex pe-lg-5">
                                                        <div className="progress mt-2 mb-3" role="progressbar" aria-label="Basic example" aria-valuenow={item.value} aria-valuemin={0} aria-valuemax={100}>
                                                            <div className="progress-bar" style={{ width: `${item.value}%` }}></div>
                                                        </div>
                                                        <h5 className="mt-1 px-3">{item.value}%</h5>
                                                    </div>
                                                </div>
                                            ))
                                            }
                                        </div>
                                    </div>
								</div>
                                <div className="col-12 col-sm-8 col-md-5 section-australiaMigration_metricsCta d-flex align-items-center justify-content-center">
                                    {/* <a href="https://www.instagram.com/p/DTtvkWmjBwF/" target="_blank" className="btn btn-cta">
                                        <img src={getAssetUrl("/assets/images/australia/migration/bg-cta-casos-exito.png")} alt="" className="img-fluid" />
                                    </a> */}
                                    <InstagramEmbed url="https://www.instagram.com/p/DTtvkWmjBwF" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section id="visas" className="section-australia section-australiaMigration">
                <section className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 pt-5 pb-5 section-australia_contentCta">
                            <a href="#contactForm" className="btn scrolling mt-2">¡CONOCE MÁS SOBRE LA CITA MIGRATORIA!</a>
                        </div>
						<div className="col-12 col-lg-10 pt-3 pb-4">
							<h2 className="section-australia_title text-center text-uppercase">Tipos de visas y servicios</h2>
						</div>
                        <div className="col-12 col-lg-11 pt-4 pb-5">
                            <div className="row d-flex align-items-stretch justify-content-center">
                                { migrationProcesses.map((item: any, i: number) => (
                                    <div className="col-10 col-lg-3 mb-4" key={i}>
                                        <a href={localePath("/australia/migration/"+item.slug)}>
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
									<p className="mb-4 text-center">Nuestros agentes migratorios están registrados en Australia y cumplen con los más altos estándares éticos y legales. Cada caso es evaluado con criterio profesional, experiencia real y estrategia personalizada.</p>
								</div>
                                <div className="col-12 section-australiaMigration section-australiaMigration_agents">
                                    <div className="row d-flex align-items-stretch py-4 py-lg-5">
                                        <AgentCards />
                                    </div>
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
                                    titleCard={dict.forms.home.title}
                                    subtitleCard={dict.forms.home.subtitle}
                                    descriptionCard={dict.forms.home.description}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
	);
}
