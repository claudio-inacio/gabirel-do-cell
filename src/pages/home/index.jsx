import React, { useEffect } from "react";
import './styles.scss';
import { SectionApresentation } from "../../components/Apresentation";

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
import IphoneInfo from "../../components/Iphone-Info";


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

// dynamicBlur.js
export function enableDynamicBlur() {
  const root = document.documentElement;

  window.addEventListener("scroll", () => {
    const blurValue = Math.min(10, window.scrollY / 70); 
    root.style.setProperty("--dynamic-blur", `${blurValue}px`);
  });
}

export function enableScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}



export const Home = () => {
  useEffect(() => {
    enableDynamicBlur();
    enableScrollReveal();
  }, []);

  return (
    <div className="home-container">
      <SectionApresentation />

      <section className="info-products-container reveal" id="section_info">
        <div id="iphone_info">
          <IphoneInfo />
        </div>
        <div id="appleWatch_info">
          <AppleWatchInfo />
        </div>
      </section>

      <section className="products-disponiveis reveal" id="my_products">
        <Carrousel tittle="Iphones" cards={myProductsIphone} />
        <Carrousel tittle="Apple Watch" cards={myProductsAppleWatch} />
        <Carrousel tittle="Acessorios" cards={myProductsAcessories} />
      </section>

      <section id="contact_me" className="reveal">
        <Contact />
      </section>
    </div>
  );
};

