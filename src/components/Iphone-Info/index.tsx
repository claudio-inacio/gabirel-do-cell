/* eslint-disable jsx-a11y/alt-text */
import { memo } from 'react';
import './styles.scss';
import { BorderBoxGradient } from '../box-border-gradiente';
import { InfoComplement } from "../../components/info-complementar-product";
import iphoneIcon  from "../../Imgs/iphone-icon-white.png";
import iosIcon  from "../../Imgs/ios-logo-white.png";
import ecosistemaApple  from "../../Imgs/apple-icon-white.png";
import desempenhoIcon  from "../../Imgs/desempenho-icon-white.png";
import cameraIcon  from "../../Imgs/apple-camera-white.png";
import suporteIcon  from "../../Imgs/suporte-icon-white.png";
import iphoneImage  from "../../Imgs/iphone14.png";


export function IphoneInfo(){
    const infoIphoneLeft = [
        {
           imageIcon: iphoneIcon,
           title: 'Qualidade de construção',
           description: 'Os iPhones são conhecidos por sua excelente qualidade de construção e materiais premium, como vidro e alumínio. Eles têm um design elegante e durável, o que os torna atraentes para muitos consumidores.',
       },
        {
           imageIcon: iosIcon,
           title: 'Sistema Operacional',
           description: 'Os iPhones executam o iOS, o sistema operacional da Apple, que é conhecido por sua estabilidade, segurança e otimização. A Apple oferece atualizações regulares do iOS, garantindo que os dispositivos mais antigos continuem a receber suporte por vários anos.',
       },
        {
           imageIcon: ecosistemaApple,
           title: 'Ecossistema da Apple',
           description: 'A Apple oferece um ecossistema integrado que inclui outros produtos como Macs, iPads, Apple Watch e AirPods. Isso permite uma experiência de usuário mais coesa e a capacidade de sincronizar facilmente dados e aplicativos entre os dispositivos',
       }
     ]
      const infoIphoneRigth = [
        {
           imageIcon: desempenhoIcon,
           title: 'Desempenho',
           description: 'Os iPhones geralmente têm um desempenho excepcional, graças aos processadores Apple A-series. Eles são projetados pela Apple e oferecem ótimo desempenho em tarefas comuns e aplicativos exigentes.',
       },
        {
           imageIcon: cameraIcon,
           title: 'Câmeras de Qualidade',
           description: 'Os iPhones geralmente têm câmeras de alta qualidade que produzem fotos e vídeos impressionantes. A Apple investe em tecnologia de câmera e software de processamento de imagem, tornando os iPhones populares para entusiastas da fotografia e videografia.',
       },
        {
           imageIcon: suporteIcon,
           title: 'Suporte ao Cliente',
           description: 'A Apple é conhecida por seu excelente suporte ao cliente. Eles oferecem assistência técnica, atualizações de software regulares e uma ampla variedade de acessórios e serviços que complementam seus dispositivos.',
       }
     ]
   return(
    <aside className='iphone-container' > 
        <section className='iphone-descripition-container'>
            <h1>
             Iphone
            </h1>
            <BorderBoxGradient message='Qualidade Design e Tecnologia' /> 
            <InfoComplement imagePrincipal={iphoneImage} textColor='white' position="rigth" infoLeft={infoIphoneLeft} infoRigth={infoIphoneRigth} />
            
            {/* <a href="#my_products">
             <button onClick={() => console.log('teste')}>
                Ver disponiveissdfew
            </button>   
            </a> */}
            
        </section>
    </aside>
   ) 
}


export const Header = memo(IphoneInfo)