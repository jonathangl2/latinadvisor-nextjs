'use client';

import { useRef, useEffect } from 'react';

type Testimonial = {
  id: number;
  documentId: string;
  title: string;
  Video: {
    url: string;
    name: string;
    mime: string;
  };
};

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialsGrid({ testimonials }: Props) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Pausar todos los otros videos cuando uno empieza a reproducirse
  const handlePlay = (currentIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex && !video.paused) {
        video.pause();
      }
    });
  };

  useEffect(() => {
    // Limpiar refs al desmontar
    return () => {
      videoRefs.current = [];
    };
  }, []);

  return (
    <div className="row d-flex align-items-stretch py-4">
      {testimonials.map((item, index) => (
        <div 
          key={item.documentId} 
          className="col-12 col-md-6 col-lg-4 mb-4 section-australiaTestimonials"
        >
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-0">
              {item.Video?.url ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className="w-100"
                  controls
                  preload="metadata"
                  onPlay={() => handlePlay(index)}
                  style={{
                    borderRadius: '8px 8px',
                    aspectRatio: '9/16',
                    objectFit: 'cover'
                  }}
                >
                  <source src={item.Video.url} type={item.Video.mime || 'video/mp4'} />
                  Tu navegador no soporta videos HTML5.
                </video>
              ) : (
                <div 
                  className="bg-secondary d-flex align-items-center justify-content-center"
                  style={{ height: '300px', borderRadius: '8px 8px 0 0' }}
                >
                  <p className="text-white">Video no disponible</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}