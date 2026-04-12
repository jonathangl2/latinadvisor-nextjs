'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Testimonial = {
  id: number;
  documentId: string;
  title: string;
  Video: {
    url?: string;
    name: string;
    mime: string;
  };
};

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialsCarousel({ testimonials }: Props) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  const pauseAllVideos = () => {
    videoRefs.current.forEach((video) => {
      if (video && !video.paused) {
        video.pause();
      }
    });
  };

  const handlePlay = (currentIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex && !video.paused) {
        video.pause();
      }
    });
  };

  const handleSlideChange = () => {
    pauseAllVideos();
  };

  return (
    <div className="testimonials-carousel-wrapper w-100">
      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        navigation={true}
        className="testimonials-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={item.documentId}>
            <div className="testimonial-slide">
              <div className="video-container">
                {item.Video?.url ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className="testimonial-video"
                    controls
                    preload="metadata"
                    onPlay={() => handlePlay(index)}
                  >
                    <source src={item.Video.url} type={item.Video.mime || 'video/mp4'} />
                    Tu navegador no soporta videos HTML5.
                  </video>
                ) : (
                  <div className="video-placeholder">
                    <p className="text-white mb-0">Video no disponible</p>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}