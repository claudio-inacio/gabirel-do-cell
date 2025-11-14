import { CardComponent, CardProps } from "./components/card-component";
import { SwiperSlide } from "swiper/react";
import Slider from "../../components/carrousels/components/slider/Slider";

import "./styles.scss";

interface CarrouselProps {
  cards: CardProps[];
  tittle: string;
}

export function Carrousel({ tittle, cards }: CarrouselProps) {
  return (
    <section className="carrousel-section">
      <h2 className="carrousel-title">{tittle}</h2>

      <Slider>
        {cards?.map((card, index) => (
          <SwiperSlide key={index}>
            <CardComponent {...card} />
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
}
