"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import InstagramEmbed from "@/components/InstagramEmbed";

export default function CarouselTestimoniosDubai({ items }: any) {
  return (
    <div
      id="carousel-testimoniosDubai" className="w-100"
    >
      <Swiper
        modules={[Navigation,Pagination]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {items.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="item px-2 px-lg-5 pt-5 d-flex align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-11 col-sm-6 col-lg-4 mb-5 mb-lg-0 px-0">
                  <InstagramEmbed url={item.url} />
                </div>
                <div className="content-user col-12 col-lg-6 d-flex flex-column justify-content-center ps-lg-5 text-center">
                  <span className="text-white"><i className="fas fa-quote-left"></i></span>
                  <h5 className="text-white mb-4" dangerouslySetInnerHTML={{ __html: item.testimonial }}></h5>
                  <h3 className="">{item.name}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
