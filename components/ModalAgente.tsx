"use client";

import { useEffect } from "react";

export default function ModalAgente({
  modalId,
  url,
  contentHtml
}: {
  modalId: string;
  url?: string;
  contentHtml?: string;
}) {

  // (lo dejo tal cual lo tienes)
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, contentHtml]);

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          
          <div className="modal-body p-0">
 
            {contentHtml ? (
              <div className="p-4 p-lg-5 contentHTMLCustom"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            ) : url ? (
              <iframe
                src={url}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none"
                }}
              ></iframe>
            ) : null}

          </div>
        </div>
      </div>
    </div>
  );
}