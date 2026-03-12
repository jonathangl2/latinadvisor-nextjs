"use client";

import { useState } from "react";
import ModalAgente from "@/components/ModalAgente";
import { getAssetUrl } from "@/lib/url";

export default function AgentesClient({ agentes }: { agentes: any[] }) {
  const [agenteUrl, setAgenteUrl] = useState("");

  const openModal = (url: string) => {
    setAgenteUrl(url);
  };

  return (
    <>
      <div className="row">
        {agentes.map((agent, idx) => (
          <div
            className="col-12 col-lg-6 section-australiaRenovacion_agentes"
            key={idx}
          >
            <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#modalAgente"
                onClick={() => openModal(agent.url)}
                style={{ cursor: "pointer" }}
            >
                <div className="card">
                    <div className="card-header">
                        <img
                        src={getAssetUrl(agent.img)}
                        alt={agent.name}
                        className="img-fluid w-100 my-lg-4"
                        />
                    </div>

                    <div className="card-body ps-4">
                        <h5>{agent.name}</h5>
                        <p>{agent.city}</p>
                    </div>
                </div>
            </a>
          </div>
        ))}
      </div>

      <ModalAgente modalId="modalAgente" url={agenteUrl} />
    </>
  );
}
