"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ReactNode } from "react";
import { getAssetUrl } from "@/lib/url";
interface SlideItem {
    desktopImg: string;
    mobileImg: string;
    title?: string;
    description?: string;
    image?: string;
}

interface BannerCarouselCustomProps {
    items: SlideItem[];
}

const renderSlide = (item: SlideItem) => (
    <section id="internal_banner" className="container-fluid banner-migrationPage">
        <div className="row">
            <div className="col-12 px-0">
                <div className="position-relative w-100">
                    <img
                        src={getAssetUrl(item.desktopImg)}
                        alt=""
                        className="internal_banner_img object-cover d-none d-md-block"
                    />
                    <img
                        src={getAssetUrl(item.mobileImg)}
                        alt=""
                        className="internal_banner_img object-cover d-md-none"
                    />
                </div>
            </div>
        </div>
        <div className="caption">
            <div className="row w-100 mx-0 justify-content-end d-flex">
                <div className="col-12 col-lg-6">
                    <div className="card">
                        <div className="card-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default function BannerCarouselCustom({ items }: BannerCarouselCustomProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index}>
                    {renderSlide(item)} {/* ✅ */}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}