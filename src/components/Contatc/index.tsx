/* eslint-disable jsx-a11y/alt-text */
import { memo } from 'react';
import './styles.scss';
import PhoneIcon from '../../Imgs/phone-icon.png'
import EmailIcon from '../../Imgs/email-icon.png'
import AddressIcon from '../../Imgs/address-icon.png'
import InstaIcon from '../../Imgs/instagram-icon.png'
import FacebookIcon from '../../Imgs/facebook-icon.png'
import TikTokIcon from '../../Imgs/tiktok-icon.png'
import { BorderBoxGradient } from '../box-border-gradiente';
import { InfoComplement } from "../info-complementar-product";
import aplleWatchImage  from "../../Imgs/apple-what.png";


export function Contact(){

   return(
    <div className='contact-container' > 
        
        <section id='list-container' className='contacts'>
        <h2>
            Contate-nos
        </h2>
            <ul>
                <li>
                    <img src={PhoneIcon} alt="" />
                    <div>
                        <text>Telefone</text> 
                        <text>44 99909-7786</text>
                    </div>
                </li>
                <li>
                    <img src={EmailIcon} alt="" />
                    <div>
                        <text>E-mail</text>
                        <text>gabireldocel@gmail.com</text>
                    </div>
                </li>
                <li>
                    <img src={AddressIcon} alt="" />
                    <div>
                        <text>
                        Localização
                        </text>
                        <text>Avenida São Paulo - 1218</text>
                        <text>Terra Rica - PR</text>
                    </div>
                </li>
            </ul>
        </section>
        <section id='list-container' className='social-medias'>
        <h2>
            Redes Sociais
        </h2>
            
            <ul>
                <li>
                    <a href="https://www.instagram.com/gabrieldocell/" target='_blank' rel="noreferrer">
                    <img  src={InstaIcon} alt="icone instagram" />
                    @Gabrieldocell
                    </a>
                </li>
                <li>
                    <a target='_blank' href="https://www.facebook.com/gabrieldocell/" rel="noreferrer">
                    <img src={FacebookIcon} alt="icone facebook" />
                        Gabriel do cell
                    </a>
                </li>
                <li>
                   <a href="#">
                    <img src={TikTokIcon} alt="icone tiktok" />
                    Gabriel do cell                   
                   </a>
                </li>
            </ul>
        </section>
    </div>
   ) 
}


export const Header = memo(Contact)