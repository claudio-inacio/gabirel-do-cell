import { ReactNode } from 'react';
import './Slider.scss'
import {Swiper, SwiperProps, SwiperSlide} from 'swiper/react'
import 'swiper/scss';
import 'swiper/scss/pagination';

import { EffectCoverflow, Pagination, Navigation  } from 'swiper/modules';
import { CardComponent } from '../card-component';

interface SliderProps{
    settings?: SwiperProps;
    children?: ReactNode;
}

export default function Slider({ children}: SliderProps) {

    return (
    <>
        <Swiper
     slidesPerView={3}
     spaceBetween={30}
    //  navigation={true}
    //  allowSlidePrev={true}
    //  loop= {true}
     pagination={{
       clickable: true,
     }}
     modules={[Pagination]}
     className="mySwiper"
        breakpoints={{
        100: {
          slidesPerView: 1,
        },
        200: {
          slidesPerView: 1,
        },
        300: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
        }}
        >
        
      {children}
        </Swiper>
    </>
    )
    
}


{/* <Swiper
effect={'coverflow'}
grabCursor={true}
centeredSlides={true}
// slidesPerView={3}
draggable={true}
coverflowEffect={{
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
  
}}
pagination={true}
loop= {true}
modules={[EffectCoverflow, Pagination, Navigation]}
className="mySwiper"
breakpoints={{
400: {
  slidesPerView: 1,
},
640: {
  slidesPerView: 2,
},
768: {
  slidesPerView: 2,
},
1024: {
  slidesPerView: 3,
}
}}
>

{children}
</Swiper> */}