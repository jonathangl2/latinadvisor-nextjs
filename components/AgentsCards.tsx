"use client";

import { useState } from "react";
import { getAssetUrl } from "@/lib/url";
import ModalAgente from "./ModalAgente";
import { resolveDictPath } from "@/lib/resolveDictPath";
import { resolve } from "path/win32";

const agents = [
    {
        img: "/assets/images/australia/migration/juan-carlos-agente.png",
        name: "Juan Carlos Bedoya",
        code_permisson: "MARN 2117696",
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
        <p>Su experiencia internacional, su visión estratégica y su trabajo en AWS fortalecen su capacidad para analizar situaciones complejas y diseñar estrategias migratorias efectivas para sus clientes. Juan Carlos lidera la organización con un enfoque en la innovación, el desarrollo del equipo y la entrega de resultados excepcionales en cada proceso migratorio.</p>`,
        descriptionEn: `
        <p><strong>Registered Migration Agent – MARN 2117696</strong></p>
        <p><strong>Position:</strong> CEO & Registered Migration Agent</p>
        <p><strong>At LatinAdvisor since:</strong> April 2014 (Founder)</p>
        <h5>Academic Background</h5>
        <ul>
            <li>Electronic Engineer – Pontificia Universidad Javeriana, Colombia</li>
            <li>Master's in Business and Information Technology – The University of Melbourne</li>
            <li>Registered Migration Agent since 2021</li>
        </ul>
        <h5>Professional Experience</h5>
        <ul>
            <li>Founder & CEO, LatinAdvisor Pty Ltd (2014–Present)</li>
            <li>Registered Migration Agent (2021–Present)</li>
            <li>Senior Solutions Architect – Healthcare Sector, Amazon Web Services (AWS) (2021–Present)</li>
        </ul>
        <h5>What Juan Carlos brings to LatinAdvisor</h5>
        <p>Juan Carlos brings a unique combination of technical expertise, business leadership, and in-depth knowledge of the Australian migration system. As the founder of LatinAdvisor, he has built a solid operational structure grounded in quality, transparency, and a people-centered approach.</p>
        <p>His international experience, strategic vision, and role at AWS strengthen his ability to analyze complex situations and design effective migration strategies for clients. Juan Carlos leads the organization with a strong focus on innovation, team development, and delivering exceptional results in every migration process.</p>`
    },
    {
        img: "/assets/images/australia/migration/christina-agente.png",
        name: "Christina Toftegaard",
        code_permisson: "MARN 2117707",
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
        <p>Además, contribuye al crecimiento de LatinAdvisor a través del desarrollo de negocio y mentorías, fortaleciendo la calidad y el impacto de nuestros servicios.</p>`,
        descriptionEn: `
        <p><strong>Registered Migration Agent – MARN 2117707</strong></p>
        <p><strong>Position:</strong> Registered Migration Agent</p>
        <p><strong>At LatinAdvisor since:</strong> May 2025</p>
        <h5>Academic Background</h5>
        <ul>
            <li>Capstone Assessment for Migration Agents</li>
            <li>Graduate Diploma in Australian Migration Law and Practice</li>
            <li>Master's in Translation and Interpretation (French–Danish), Denmark</li>
            <li>Erasmus Scholarship (undergraduate studies, France)</li>
            <li>Bachelor's in Business Languages (French and German), Denmark</li>
        </ul>
        <h5>Professional Experience</h5>
        <ul>
            <li>Registered Migration Agent, migration agency (2024–2025)</li>
            <li>Registered Migration Agent & Business Owner (2021–2024)</li>
            <li>Owner & Managing Partner, Australian furniture import company (2010–2019)</li>
            <li>Paralegal and legal secretary roles in Australian and international law firms (2001–2010)</li>
        </ul>
        <h5>What Christina brings to LatinAdvisor</h5>
        <p>As a multilingual migrant, Christina offers consultations in English and Danish, bringing a strong European and Scandinavian cultural perspective to her advisory work. Having lived permanently in Australia since 2008, she understands both the legal complexities of migration processes and the human element behind every decision.</p>
        <p>Christina is deeply committed to guiding individuals, families, and businesses through the Australian migration system. She provides clear, strategic, and empathetic advice tailored to each client's specific goals.</p>
        <p>Additionally, she contributes to LatinAdvisor's growth through business development and mentoring, strengthening the quality and impact of our services.</p>`
    },
    {
        img: "/assets/images/australia/migration/renatto-agente.png",
        name: "Renatto López",
        code_permisson: "MARN 2518857",
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
        <p>Está comprometido con brindar asesoría migratoria clara, precisa y centrada en el cliente, asegurando que cada solicitud se prepare bajo los más altos estándares de calidad.</p>`,
        descriptionEn: `
        <p><strong>Registered Migration Agent – MARN 2518857</strong></p>
        <p><strong>Position:</strong> Registered Migration Agent</p>
        <p><strong>At LatinAdvisor since:</strong> April 2025</p>
        <h5>Academic Background</h5>
        <ul>
            <li>Master's Degree in Project Management – The University of Sydney</li>
        </ul>
        <h5>Professional Experience</h5>
        <ul>
            <li>Registered Migration Agent, LatinAdvisor (2025–Present)</li>
            <li>Advisor to engineers on skills assessment processes, including qualifications and professional experience, with Engineers Australia</li>
        </ul>
        <h5>What Renatto brings to LatinAdvisor</h5>
        <p>Renatto combines a strong academic background with hands-on experience supporting engineers through their skills assessment processes with Engineers Australia. His analytical approach, attention to detail, and structured methodology make him a key member of the team, particularly in technically complex cases.</p>
        <p>He is committed to providing clear, precise, and client-focused migration advice, ensuring that every application is prepared to the highest standards of quality.</p>`
    }
];

export default function AgentCards({dict,locale}:any) {
    
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleCard = (index: number) => {
        setOpenIndex(prev => prev === index ? null : index);
    };

    const [agenteDescription, setAgenteDescription] = useState("");
    const openModal = (url: string) => {
        setAgenteDescription(url);
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
                                        { resolveDictPath( dict.pages.migration.cta_agents_schedule, dict) }
                                    </a>
                                    <button className="btn btn-blue-grey-4" 
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalAgente"
                                        //onClick={() => toggleCard(i)}
                                        onClick={() => (locale=='es')? openModal(item.description): openModal(item.descriptionEn) }>{ resolveDictPath( dict.pages.migration.cta_agents_more , dict) }</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className={`card-footer ${openIndex === i ? "show" : ""}`}>
                            <div className="row">
                                <div className="col">
                                    <p>{item.description}</p>
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <button className="btn btn-blue-grey-4" onClick={() => toggleCard(i)}>Ocultar</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            ))}

            <ModalAgente modalId="modalAgente" contentHtml={agenteDescription} />
        
        </>
    );


}