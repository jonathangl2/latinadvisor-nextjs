'use client';

import { useEffect, useRef } from 'react';

interface EventIframeProps {
  url: string;
  title: string;
}

export default function EventIframe({ url, title }: EventIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        try {
          const height = iframeRef.current.contentWindow.document.body.scrollHeight;
          iframeRef.current.style.height = `${height}px`;
        } catch (error) {
          // Cross-origin error - usar altura fija
          console.log('Using fixed height due to CORS');
        }
      }
    };

    // Escuchar cambios de tamaño
    window.addEventListener('message', (e) => {
      if (e.data.type === 'resize' && e.data.height) {
        if (iframeRef.current) {
          iframeRef.current.style.height = `${e.data.height}px`;
        }
      }
    });

    // Intentar ajustar al cargar
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleResize);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleResize);
      }
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={url}
      title={title}
      className="event-iframe"
      width="100%"
      frameBorder="0"
      scrolling="yes"
      loading="lazy"
      style={{ minHeight: '2000px' }}
    />
  );
}