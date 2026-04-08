import FormEmbed from "@/components/FormEmbed";
import { loadHomeJson } from "@/lib/loadJson";
import { API_URL, getAssetUrl } from "@/lib/url";
import { Metadata } from 'next';
import CarouselTeamMigration from "@/components/CarouselTeamMigration";
import { getDictionary, type Locale, generateLocaleParams } from '@/lib/i18n';
import BannerCarouselCustom from "@/components/BannerCarouselCustom";
import AgentCards from "@/components/AgentsCards";
import InstagramEmbed from "@/components/InstagramEmbed";
import { resolveDictPath } from "@/lib/resolveDictPath";


export const generateStaticParams = generateLocaleParams;

export const metadata:Metadata = {
    title: "Migration | LatinAdvisor",
}


async function getMigrationProcesses(locale: Locale) {
  try {
    const res = await fetch(
      `${API_URL}/api/migration-processes?locale=${locale}&fields[0]=slug&fields[1]=title&sort=createdAt:asc`,
      { next: { revalidate: 60 } }
    );
    
    if (!res.ok) {
      console.error('Failed to fetch migration processes:', res.status);
      return [];
    }
    
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error('Error fetching migration processes:', err);
    return [];
  }
}

async function getMigrationTeam(locale: Locale) {
  try {
    const res = await fetch(
      `${API_URL}/api/migration-agents?locale=${locale}&populate=*&sort=createdAt:asc`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) {
      console.error('Failed to fetch migration team:', res.status);
      return [];
    }
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error('Error fetching migration team:', err);
    return [];
  }
}

export default async function MigrationPage({
        params
    }: {
        params: Promise<{ locale: Locale }>
    }) {

    const { locale } = await params;
    const dict = await getDictionary(locale);
    const localePath = (path: string) => getAssetUrl(path, locale);
        
	const migrationProcesses = await getMigrationProcesses(locale);
    const migrationTeam = await getMigrationTeam(locale);

    const formUrl = ( locale == 'es' ) ? "https://api.leadconnectorhq.com/widget/form/EhQtmWa8R4EPoNXtkLB1" : "https://api.leadconnectorhq.com/widget/form/kEIMRmyHPCcyxZh2T3Vg";
    const formId = ( locale == 'es' ) ? "EhQtmWa8R4EPoNXtkLB1" : "kEIMRmyHPCcyxZh2T3Vg";
    const formName = ( locale == 'es' ) ? "1. Formulario - Perfilamiento migracion español" : "1.1 Formulario - Perfilamiento migracion ingles";


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
                            <h2 className="section-australia_title text-uppercase mb-4">{dict.pages.migration.we_care}</h2>
                            <p className="mb-3">{dict.pages.migration.description1}</p>
                            <p className="mb-3">{dict.pages.migration.description2}</p>
                            <p className="mb-4">{dict.pages.migration.description3}</p>
                            <div className="w-100 section-australia_contentCta d-flex justify-content-start">
                                <a href="#visas" className="btn scrolling mt-2 text-uppercase">{dict.pages.migration.cta_services}</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 pt-4 pb-lg-5 information">
                            <div className="row">
                                {
                                    [
                                        {
                                            img: "/assets/images/australia/migration/values-1.png",
                                            description:"dict.pages.migration.value1"
                                        },
                                        {
                                            img: "/assets/images/australia/migration/values-2.png",
                                            description:"dict.pages.migration.value2"
                                        },
                                        {
                                            img: "/assets/images/australia/migration/values-3.png",
                                            description:"dict.pages.migration.value3"
                                        },
                                        {
                                            img: "/assets/images/australia/migration/values-4.png",
                                            description:"dict.pages.migration.value4"
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
                                                <h5 dangerouslySetInnerHTML={{ __html: resolveDictPath(item.description, dict) }}></h5>
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
							<h2 className="section-australia_title text-center text-uppercase">{dict.pages.migration.title_appointment}</h2>
						</div>
						<div className="col-12 col-lg-11 my-4 section-australia_contentCta">
                            <p className="mb-3" dangerouslySetInnerHTML={{ __html: dict.pages.migration.description_appointment }}></p>
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
                                            description: dict.pages.migration.consultations_1
                                        },
                                        {
                                            img: "/assets/images/australia/migration/icon-migration-consultations-2.svg",
                                            description: dict.pages.migration.consultations_2
                                        },
                                        {
                                            img: "/assets/images/australia/migration/icon-migration-consultations-3.svg",
                                            description: dict.pages.migration.consultations_3
                                        },
                                        {
                                            img: "/assets/images/australia/migration/icon-migration-consultations-4.svg",
                                            description: dict.pages.migration.consultations_4
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
                        <h2 className="section-australia_title text-center text-uppercase">{dict.pages.migration.why_choose_ttl}</h2>
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
                                    description: dict.pages.migration.why_choose_1
                                },
                                {
                                    percentage: "95%",
                                    title: "Visa 482 ",
                                    description: dict.pages.migration.why_choose_2
                                },
                                {
                                    percentage: "100%",
                                    title: "Appeals (ART / Tribunal)",
                                    description: dict.pages.migration.why_choose_3
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
                                                    name: dict.pages.migration.metrics_1,
                                                    value:"100"
                                                },{
                                                    name: dict.pages.migration.metrics_2,
                                                    value:"100"
                                                },
                                                {
                                                    name: dict.pages.migration.metrics_3,
                                                    value:"100"
                                                },
                                                {
                                                    name: dict.pages.migration.metrics_4,
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
                                            <h4 className="mt-2 mb-4"><strong>{dict.pages.migration.metrics_ttl}</strong></h4>
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
                            <a href="#contactForm" className="btn scrolling mt-2">{dict.pages.migration.cta_migration}</a>
                        </div>
						<div className="col-12 col-lg-10 pt-3 pb-4">
							<h2 className="section-australia_title text-center text-uppercase">{dict.pages.migration.visas_ttl}</h2>
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
							<h2 className="section-australia_title text-center text-uppercase mb-4" dangerouslySetInnerHTML={{ __html: dict.pages.migration.agents_ttl }} />
						</div>
						<div className="col-12 col-lg-10 information">
							<div className="row">
								<div className="col-12 section-australiaMigration_agents">
									<p className="mb-4 text-center">{dict.pages.migration.agents_desc}</p>
								</div>
                                <div className="col-12 section-australiaMigration section-australiaMigration_agents">
                                    <div className="row d-flex align-items-stretch py-4 py-lg-5">
                                        <AgentCards dict={dict}/>
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
							<h2 className="section-australia_title text-center text-uppercase">{dict.pages.migration.team_ttl}</h2>
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
                        <h2 className="section-australia_title text-center text-uppercase mb-lg-4">{dict.pages.migration.cta_form}</h2>
                    </div>
                    <div className="col-11 col-lg-10 pb-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-sm-9 col-lg-6">
                                <FormEmbed
                                    formSrc={formUrl}
                                    formName={formName}
                                    formId={formId}
                                    formHeight={1447}
                                    title={formName}
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
