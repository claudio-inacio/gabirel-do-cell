import { ReactNode } from "react";
import "./Slider.scss";

import { Swiper, SwiperProps } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";

interface SliderProps {
  children?: ReactNode;
  settings?: SwiperProps;
}

export default function Slider({ children, settings }: SliderProps) {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
      spaceBetween={30}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      {...settings}
    >
      {children}
    </Swiper>
  );
}
