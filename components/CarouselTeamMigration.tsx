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
        spaceBetween={40}
        slidesPerView={1} // default (mobile)
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 2, // desktop
          },
        }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {items.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="card card-teamMigration">
              <div className="card-body px-4 px-lg-5">              
                <div className="col-12 py-4 d-flex align-items-center">
                    <img
                        src={item.image}
                        alt=""
                        className="img-fluid img-team me-5"
                    />
                    <h4 className="d-flex flex-column">
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
