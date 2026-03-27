"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { getAssetUrl } from "@/lib/url";

export default function CarouselTeamMigration({ items }: any) {
  return (
      <Swiper
        modules={[Navigation,Pagination]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1} // default (mobile)
        breakpoints={{ 
          768: {
            slidesPerView: 1
          },
          992: {
            slidesPerView: 2, // desktop
            spaceBetween: 40
          },
        }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {items.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="card card-teamMigration">
              <div className="card-body px-4 px-lg-5">              
                <div className="col-12 pt-4 pb-lg-4 d-flex flex-column flex-sm-row align-items-center">
                    <img
                        src={getAssetUrl(item.image)}
                        alt=""
                        className="img-fluid img-team me-lg-4 mb-4 mb-lg-0"
                    />
                    <h4 className="d-flex flex-column text-center text-lg-start">
                      <span>{item.name}</span> 
                      <strong>{item.role}</strong>
                    </h4>
                </div>
                <div className="col-12 order-2 order-lg-3 py-4">
                    <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
