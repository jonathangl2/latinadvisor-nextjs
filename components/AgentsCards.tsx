"use client";

import { useState } from "react";
import { getAssetUrl } from "@/lib/url";

const agents = [
    {
        img: "/assets/images/australia/migration/juan-carlos-agente.png",
        name: "Juan Carlos Bedoya",
        code_permisson: "MARN 2117696",
        city: "Brisbane",
        url: "https://api.whatsapp.com/send?phone=61426844177&text=Hola,%20estoy%20interesado%20en%20saber%20m%C3%A1s%20sobre%20los%20Procesos%20Migratorios.%20Gracias.",
        description: "Ingeniero y agente migratorio — dos mundos completamente diferentes, pero que me apasionan por igual. Como ingeniero, trabajó tiempo completo en la intersección de inteligencia artificial y salud. Como agente migratorio, cofundé Latin Advisor porque sé lo que se siente llegar a un país nuevo sin saber por dónde empezar. Empezamos sirviendo a la comunidad hispanohablante, pero nuestra misión crece con cada cliente que confía en nosotros. Me especializo en patrocinios de empleador, residencia permanente, apelaciones ante el ART y casos complejos."
    },
    {
        img: "/assets/images/australia/migration/christina-agente.png",
        name: "Christina Toftegaard",
        code_permisson: "MARN 2117707",
        city: "Brisbane",
        url: "https://latinadvisor.setmore.com/christina-toftegaard",
        description: "Inmigrante multilingüe que ofrece consultas de inmigración en inglés y danés. Con una diversa y sólida formación cultural europea/escandinava, y residiendo permanentemente en Australia desde 2008, me apasiona navegar el complejo marco legal australiano y apoyar a individuos, familias y empresas a lo largo de todo su proceso migratorio."
    },
    {
        img: "/assets/images/australia/migration/renatto-agente.png",
        name: "Renatto López",
        code_permisson: "MARN 2518857",
        city: "Sydney",
        url: "https://api.whatsapp.com/send?phone=61426844177&text=Hola,%20estoy%20interesado%20en%20saber%20m%C3%A1s%20sobre%20los%20Procesos%20Migratorios.%20Gracias.",
        description: "Soy Agente Migratorio con formación en la University of Technology Sydney (UTS) y experiencia trabajando con procesos de Skills Assessment ante Engineers Australia. Asesoro a clientes en sus procesos migratorios hacia Australia con un enfoque claro, estratégico y orientado a resultados. Me caracterizo por ser una persona directa, profesional y enfocada en encontrar soluciones, brindando asesoría confiable y bien estructurada para ayudar a cada cliente a tomar decisiones informadas sobre su futuro en Australia."
    },
];

export default function AgentCards() {
    
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleCard = (index: number) => {
        setOpenIndex(prev => prev === index ? null : index);
    };

    return (
        <>
            {agents.map((item, i) => (
                <div className="col-12 col-lg-4 mb-5 mb-lg-0" key={i}>
                    <div className="card card-agentsMigration border-0 h-100">
                        <div className="card-header">
                            <img
                                src={getAssetUrl(item.img)}
                                alt=""
                                className="img-agent img-fluid"
                            />
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 mb-4 text-center">
                                    <h4 className="mb-2">{item.city}</h4>
                                    <h5>
                                        <strong>{item.name}</strong>
                                        <br />{item.code_permisson}
                                    </h5>
                                </div>
                                <div className="col-12 mb-3 d-flex flex-column gap-3 align-items-center">
                                    <a href={item.url} target="_blank" className="btn btn-blue-dark">
                                        ¡Agenda ahora!
                                    </a>
                                    <button className="btn btn-blue-grey-4" onClick={() => toggleCard(i)}>Conoce más</button>
                                </div>
                            </div>
                        </div>
                        {/* ✅ clase "show" se agrega dinámicamente */}
                        <div className={`card-footer ${openIndex === i ? "show" : ""}`}>
                            <div className="row">
                                <div className="col">
                                    <p>{item.description}</p>
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <button className="btn btn-blue-grey-4" onClick={() => toggleCard(i)}>Ocultar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}