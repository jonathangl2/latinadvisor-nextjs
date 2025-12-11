"use client";

import { useEffect } from "react";

export default function ModalAgente({ modalId, url }: { modalId: string; url: string }) {
  // Recarga el script del iframe de LeadConnector solo si se usa
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          {/* Header opcional */}
          
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          

          <div className="modal-body p-0">
            <iframe
              src={url}
              style={{
                width: "100%",
                height: "100%",
                border: "none"
              }}
              scrolling="yes"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
