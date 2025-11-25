"use client";

import { useEffect } from "react";

export default function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    // Recargar script de Instagram cuando el componente se renderice
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div className="instagram-embed-wrapper">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ background: "#fff", border: 0, margin: 0, padding: 0 }}
      />
    </div>
  );
}
