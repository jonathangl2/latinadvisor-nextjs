import FormEmbed from "@/components/FormEmbed";
import CarouselTestimonios from "@/components/CarouselTestimonios";
import { loadHomeJson } from "@/lib/loadJson";
import { getAssetUrl } from "@/lib/url";
import { Metadata } from 'next';
import Australia from '../page';
import BannerInterno from "@/components/BannerInterno";

export const metadata:Metadata = {
    title: "Migration | LatinAdvisor",
}

export default function MigrationPage() {
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
						<div className="col-12 col-lg-12 pt-4 pb-5">
							<h2 className="section-australia_title text-center text-uppercase">Titulo procesos migratorios y otras visas <span>para tener oportunidad de una residencia</span></h2>
						</div>
						<div className="col-12 col-lg-11 my-4 section-australia_contentCta">
                            <p>LaAenean vehicula ultricies cursus. Donec bibendum interdum nibh vestibulum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu lorem in turpis convallis accumsan. Ut consequat id nulla faucibus bibendum. Proin cursus orci nunc, at porttitor elit condimentum a.</p>
                            <a href="#contactForm" className="btn scrolling">¡CONOCE MÁS SOBRE LA CITA MIGRATORIA!</a>
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
                            <div className="row d-flex align-items-stretch">
                                {[
                                    {
                                        title: "Visitor Visa Australia",
                                        url: 'visitor-visa-australia'
                                    },
                                    {
                                        title: "Postgraduate Visa Australia",
                                        url: 'postgraduate-visa-australia'
                                    },
                                    {
                                        title: "Training Visa Australia",
                                        url: 'training-visa-australia'
                                    },
                                    {
                                        title: "Sponsor Visa Australia",
                                        url: 'sponsor-visa-australia'
                                    },
                                    {
                                        title: "Partner Visa Australia",
                                        url: 'partner-visa-australia'
                                    },
                                    {
                                        title: "Skilled Visa - EOI Australia (Visa por puntos)",
                                        url: 'skilled-visa-eoi-australia'
                                    },
                                    {
                                        title: "Homologaciones de Estudios (Skills assessment)",
                                        url: 'homologaciones-de-estudios-skills-assessment'
                                    },
                                    {
                                        title: "Apelaciones ante el Tribunal",
                                        url: 'apelaciones-ante-el-tribunal'
                                    },
                                ].map((item, i) => (
                                    <div className="col-10 col-lg-3 mb-4" key={i}>
                                        <a href={getAssetUrl("/australia/migration/"+item.url)}>
                                            <div className="card card-ourServicesMigration">
                                                <h3 className="card-ourServicesMigration_title">{item.title}</h3>
                                            </div>
                                        </a>
                                    </div>
                                ))}
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
								<div className="col-12 mb-3 ">
									<p className="mb-4">La Aenean vehicula ultricies cursus. Donec bibendum interdum nibh vestibulum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu lorem in turpis convallis accumsan. Ut consequat id nulla faucibus bibendum. Proin cursus orci nunc, at porttitor elit condimentum a.</p>
								</div>
                                <div className="col-12 section-australiaMigration_agents">
                                    {[
                                        {
                                            img: "/assets/images/conocenos/team/img-juan-carlos.webp",
                                            name: "Juan Carlos",
                                            city: "Brisbane",
                                            url: "https://api.leadconnectorhq.com/widget/booking/0pIcQiJVuE3xw7LCNx6m",
                                            description: "Aenean vehicula ultricies cursus. Donec bibendum interdum nibh vestibulum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu lorem in turpis convallis accumsan. Ut consequat id nulla faucibus bibendum. Proin cursus orci nunc, at porttitor elit condimentum a. <br/><strong class='mt-4 d-block'>Subtitulo:</strong> <br/>Aenean vehicula ultricies cursus. Donec bibendum interdum nibh vestibulum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu lorem in turpis convallis accumsan. Ut consequat id nulla faucibus bibendum. Proin cursus orci nunc, at porttitor elit condimentum a."
                                        },
                                        {
                                            img: "/assets/images/conocenos/team/img-renatto.webp",
                                            name: "Renatto",
                                            city: "Sydney",
                                            url: "https://api.leadconnectorhq.com/widget/booking/Fkag8dYLd7yy28O8xjCJ",
                                            description: "Aenean vehicula ultricies cursus. Donec bibendum interdum nibh vestibulum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu lorem in turpis convallis accumsan. Ut consequat id nulla faucibus bibendum. Proin cursus orci nunc, at porttitor elit condimentum a. <br/><strong class='mt-4 d-block'>Subtitulo:</strong> <br/>Aenean vehicula ultricies cursus. Donec bibendum interdum nibh vestibulum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu lorem in turpis convallis accumsan. Ut consequat id nulla faucibus bibendum. Proin cursus orci nunc, at porttitor elit condimentum a."
                                        },
                                        {
                                            img: "/assets/images/conocenos/team/img-christina.webp",
                                            name: "Christina",
                                            city: "Adelaide",
                                            url: "https://api.leadconnectorhq.com/widget/booking/BTZO6UtDAU29VUNhvjyl",
                                            description: "Aenean vehicula ultricies cursus. Donec bibendum interdum nibh vestibulum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu lorem in turpis convallis accumsan. Ut consequat id nulla faucibus bibendum. Proin cursus orci nunc, at porttitor elit condimentum a. <br/><strong class='mt-4 d-block'>Subtitulo:</strong> <br/>Aenean vehicula ultricies cursus. Donec bibendum interdum nibh vestibulum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu lorem in turpis convallis accumsan. Ut consequat id nulla faucibus bibendum. Proin cursus orci nunc, at porttitor elit condimentum a."
                                        },
                                    ].map((item, i) => (
                                        <div className="row d-flex align-items-stretch py-4 py-lg-5" key={i}>
                                            <div className="col-12 col-lg-12 order-0">
                                                <h5>En la ciudad de {item.city}:</h5>
                                            </div>
                                            <div className="col-12 col-lg-8 d-flex align-items-center order-1">
                                                <img
                                                    src={getAssetUrl(item.img)}
                                                    alt=""
                                                    className="img-fluid w-100 my-lg-4 img-agent me-lg-5"
                                                />
                                                <h4><strong>{item.name}</strong></h4>
                                            </div>
                                            <div className="col-12 col-lg-4 section-australia_contentCta d-flex align-items-center py-4 order-3 order-lg-2">
                                                <a href={item.url} className="btn scrolling">¡Agenda ahora!</a>
                                            </div>
                                            <div className="col-12 order-2 order-lg-3">
                                                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
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
                                    formSrc="https://api.leadconnectorhq.com/widget/form/k6czEex6PZdfeLpophBR"
                                    formName="3. Formulario - Web Dubai"
                                    formId="k6czEex6PZdfeLpophBR"
                                    formHeight={1445}
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
