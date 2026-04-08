"use client";

import Script from "next/script";

interface FormEmbedProps {
    formSrc: string;
    formName: string;
    formId: string;
    formHeight?: number;
    title?: string;
    titleCard?: string;
    subtitleCard?: string;
    descriptionCard?: string;
}

export default function FormEmbed({
  formSrc,
  formName,
  formId,
  formHeight = 2822,
  title = "Formulario - Web global",
  titleCard,
  subtitleCard,
  descriptionCard
}: FormEmbedProps) {

    return (

        <div className="card card-contactForm">
            <div className="card-header">
                <div className="row">
                <div className="col-12 text-center px-lg-4 py-3">
                    <h3 className="text-uppercase mb-2">
                        <strong> {titleCard} <span className="text-green-1 d-block">{subtitleCard}</span></strong>
                    </h3>
                    <p>{descriptionCard}</p>
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
