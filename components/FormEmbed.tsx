"use client";

import Script from "next/script";

interface FormEmbedProps {
  formSrc: string;
  formName: string;
  formId: string;
  formHeight?: number;
  title?: string;
}

export default function FormEmbed({
  formSrc,
  formName,
  formId,
  formHeight = 2822,
  title = "Formulario - Web global",
}: FormEmbedProps) {
  return (

    <div className="card card-contactForm">
        <div className="card-header">
            <div className="row">
            <div className="col-12 text-center px-lg-4 py-3">
                <h3 className="text-uppercase">
                <strong>formulario de</strong>
                </h3>
                <h3 className="text-uppercase text-green-1 mb-3">
                <strong>Perfilamiento</strong>
                </h3>
                <p>
                Completa estas preguntas para analizar tu perfil y con
                base en tus respuestas, te brindaremos asesoría
                personalizada.
                </p>
            </div>
            </div>
        </div>

        <div className="card-body py-0">
            <div className="row">
            <div className="col-12">
                <iframe
                src={formSrc}
                style={{
                    width: "100%",
                    height: `${formHeight}px`,
                    border: "none",
                    borderRadius: 0,
                }}
                id={`inline-${formId}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={formName}
                data-height={formHeight}
                data-layout-iframe-id={`inline-${formId}`}
                data-form-id={formId}
                title={title}
                ></iframe>
                <Script src="https://link.msgsndr.com/js/form_embed.js"></Script>
            </div>
            </div>
        </div>
    </div>
    );
}
