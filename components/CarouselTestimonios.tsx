"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import InstagramEmbed from "@/components/InstagramEmbed";

export default function CarouselTestimonios({ items }: any) {
  return (
    <div
      id="carousel-testimonios" className="w-100"
    >
      <Swiper
        modules={[Navigation,Pagination]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1} // default (mobile)
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 3, // desktop
          },
        }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {items.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="item px-2 px-lg-5 pt-5 d-flex align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="content-user col-12 d-flex flex-column justify-content-center  text-center">
                  <span className=""><i className="fas fa-quote-left"></i></span>
                  <h5 className="mb-4" dangerouslySetInnerHTML={{ __html: item.testimonial }}></h5>
                  <h4 className="">{item.name}</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
