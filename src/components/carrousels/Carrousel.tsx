import {CardComponent, CardProps} from './components/card-component'
// import { Slider } from './componentss/carrousel-slider/Slider';
import  SwiperOptions  from "swiper/types";
import { SwiperSlide } from "swiper/react";
import  Slider  from "../../components/carrousels/components/slider/Slider";
import { BorderBoxGradient } from '../box-border-gradiente';


interface CarrouselProps{
    cards: CardProps[];
    tittle: string;
}

export function Carrousel({tittle, cards}: CarrouselProps){

    return (
    <>
    <div style={{
        display: 'flex',
        // backgroundColor: 'w',
        width: '100%',
        // marginBottom: '25px',
        marginTop: '-5px',
        fontSize: '35px',
        
        color: 'black',
        padding: '25px 0px',
        alignItems:'center', 
        justifyContent: 'center'
    }}>
        <h2>{tittle}</h2>
    </div>
      <Slider>
         {cards?.map((card, index) => {
             return(
                 <SwiperSlide key={index}>
                      <CardComponent {...card}/>                      
                  </SwiperSlide>
                 )
                })}
        </Slider>
            
    
                </>

    )
}

