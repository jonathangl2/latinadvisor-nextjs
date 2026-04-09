"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ReactNode } from "react";
import { getAssetUrl } from "@/lib/url";

interface SlideItem {
    desktopImg?: string;
    mobileImg?: string;
    title?: string;
    description?: string;
    image: string;
}

interface BannerCarouselCustomProps {
    items: SlideItem[];
    locale:any;
}

const renderSlide = (item: SlideItem, locale:any) => (
    <section id="internal_banner" className="container-fluid banner-migrationPage">
        <div className="row">
            <div className="col-12 px-0">
                <div className="position-relative w-100">
                    <img
                        src={getAssetUrl(`/assets/images/australia/migration/home-migration-desktop-${locale}.png`)}
                        alt=""
                        className="internal_banner_img object-cover d-none d-md-block"
                    />
                    <img
                        src={getAssetUrl(`/assets/images/australia/migration/home-migration-responsive-${locale}.png`)}
                        alt=""
                        className="internal_banner_img object-cover d-md-none"
                    />
                </div>
            </div>
        </div>
        <div className="caption">
            <div className="row w-100 mx-0 justify-content-end d-flex h-100">
                <div className="col-12 col-lg-9 h-100">
                    <div className="card card-migrationTestimonial border-0">
                        <div className="card-header">
                            <img src={getAssetUrl(item.image)} alt="" className="card-img img-fluid"/>
                        </div>
                        <div className="card-body">
                            <div className="container-testimonial">
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default function BannerCarouselCustom({ items, locale }: BannerCarouselCustomProps) {
    return (
        <Swiper
            modules={[Autoplay,Navigation, Pagination]}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{           
                delay: 30000,      
                disableOnInteraction: true,
            }}
        className="section-australiaMigration_banner">
            {items.map((item, index) => (
                <SwiperSlide key={index}>
                    {renderSlide(item,locale)} {/* ✅ */}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}