/* eslint-disable jsx-a11y/alt-text */
import { HtmlHTMLAttributes, memo } from 'react';
import './styles.scss';

import moneyIcon from '../../../../Imgs/money-icon-blue.png'
import memoryIcon from '../../../../Imgs/memory-icon-blue.png'
import bateryIcon from '../../../../Imgs/batery-icon-blue.png'
import iphoneIcon from '../../../../Imgs/iphone-icon-blue.png'
import observationIcon from '../../../../Imgs/observation-icon-blue.png'

export interface CardProps {
    tittle: String;
    price: String;
    memory: String;
    batery: String;
    display: String;
    observation: String;
    image: string;
}

export function CardComponent(props: CardProps) {
   return(
    <div className='card-container'> 
        <div className='image-container'>
            <img className='principal-image' src={props.image} alt="produto" />
        </div>
        <div className='descriptions-container'>
            <h2>{props.tittle}</h2>            
            <ul>
                <li>
                    <img src={moneyIcon} alt="" />                    
                    <text>{props.price}</text>
                </li>
                <li>
                    <img src={memoryIcon} />
                    <text>{props.memory} </text>
                </li>
                <li>
                    <img src={bateryIcon} />                    
                    <text> {props.batery} </text>
                </li>
                <li>
                    
                    <img src={iphoneIcon} />                    
                    <text> {props.display} </text>
                </li>
                <li>
                    <img src={observationIcon} />                    
                    <text> {props.observation}  </text>
                </li>
            </ul>
        <button onClick={() => {
           window.open(
            `https://wa.me/5544999097786?text=Olá+poderia+me+passar+mais+informações+sobre+o+produto&type=custom_url&app_absent=0`
          );
        }}>
            Comprar
        </button>    
        </div>
        
    </div>
   ) 
}
