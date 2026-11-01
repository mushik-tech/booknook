"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import BannerSlider from "./BannerSlider";
import { slides } from "../../../public/data/data";

const Banner = () => {
  return (
    <section className=" px-4 pt-5 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-xl shadow-xl">
        {/* Slider */}
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <BannerSlider slide={slide}></BannerSlider>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
