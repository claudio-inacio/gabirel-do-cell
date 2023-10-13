import React from "react";
import './styles.scss';
import { Header, SectionApresentation } from "../../components/Apresentation";
import { IphoneInfo } from "../../components/Iphone-Info";
import { AppleWatchInfo } from "../../components/apple-watch-info";
import Iphone14 from '../../Imgs/iphone14.png'
import Fonte from '../../Imgs/fonte.png'
import CaboUSBC from '../../Imgs/cabo-usbc.png'
import MagSafePortatil from '../../Imgs/mag-safe-portatil.png'
import MagSafe from '../../Imgs/magsafe.png'
import AirPods from '../../Imgs/airpod.png'
import AppleWatch from '../../Imgs/apple-what.png'
import { Carrousel } from "../../components/carrousels/Carrousel";
import { Contact } from "../../components/Contatc";


const myProductsIphone = [
  {
    tittle: 'Iphone 14 ProMax',
    price: '3.500,00',
    memory: '128Gb',
    batery: '88%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: Iphone14,
  },
  {
    tittle: 'Iphone 14 ProMax',
    price: '3.500,00',
    memory: '128Gb',
    batery: '82%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: Iphone14,
  },
  {
    tittle: 'Iphone 15 ProMax',
    price: '8.500,00',
    memory: '128Gb',
    batery: '100%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: Iphone14,
  },
  {
    tittle: 'Iphone 12 ProMax',
    price: '2.500,00',
    memory: '128Gb',
    batery: '75%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: Iphone14,
  },
  {
    tittle: 'Iphone 13 ProMax',
    price: '4.500,00',
    memory: '128Gb',
    batery: '97%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: Iphone14,
  }
]
const myProductsAppleWatch = [
  {
    tittle: 'Iphone 14 ProMax',
    price: '3.500,00',
    memory: '128Gb',
    batery: '88%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: AppleWatch,
  },
  {
    tittle: 'Iphone 14 ProMax',
    price: '3.500,00',
    memory: '128Gb',
    batery: '82%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: AppleWatch,
  },
  {
    tittle: 'Iphone 15 ProMax',
    price: '8.500,00',
    memory: '128Gb',
    batery: '100%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: AppleWatch,
  },
  {
    tittle: 'Iphone 12 ProMax',
    price: '2.500,00',
    memory: '128Gb',
    batery: '75%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: AppleWatch,
  },
  {
    tittle: 'Iphone 13 ProMax',
    price: '4.500,00',
    memory: '128Gb',
    batery: '97%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: AppleWatch,
  }
]
const myProductsAcessories = [
  {
    tittle: 'Fonte Original',
    price: '180',
    memory: '128Gb',
    batery: '88%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: Fonte,
  },
  {
    tittle: 'Cabo-USBC 2 metros',
    price: '3.500,00',
    memory: '128Gb',
    batery: '82%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: CaboUSBC,
  },
  {
    tittle: 'Carregador MagSafe Portatil',
    price: '800,00',
    memory: '128Gb',
    batery: '100%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: MagSafePortatil,
  },
  {
    tittle: 'Carregador MagSafe',
    price: '350,00',
    memory: '128Gb',
    batery: '75%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: MagSafe,
  },
  {
    tittle: 'Airpod Pro',
    price: '2.600,00',
    memory: '128Gb',
    batery: '97%',
    display: 'Tela Original',
    observation: 'Acompanha carregador original',
    image: AirPods,
  }
]

export const Home = () => {

  return (
  <div>
    <SectionApresentation  />  
    <div className="info-products-container" id='section_info'>
      <div id="iphone_info">
       <IphoneInfo />  
      </div>
      <div id="appleWatch_info">
        < AppleWatchInfo />
      </div>
    </div>
    <div className="products-disponiveis" id="my_products">
      <Carrousel tittle='Iphones' cards={myProductsIphone}/>
      <Carrousel tittle="Apple Watch" cards={myProductsAppleWatch}/>
      <Carrousel tittle="Acessorios" cards={myProductsAcessories}/>
    </div>
    <div id="contact_me">
    <Contact />
    </div>
  </div>
  );
};
