/* eslint-disable jsx-a11y/alt-text */
import { memo } from 'react';
import './styles.scss';
import { BorderBoxGradient } from '../box-border-gradiente';

import monitorIcon  from "../../Imgs/monitiramento-icon-blue.png";
import retinaIcon  from "../../Imgs/retina-icon-blue.png";
import resistenceIcon  from "../../Imgs/cadeado-icon-blue.png";
import wirelesIcon  from "../../Imgs/wirelles-icon-blue.png";
import heartIcon  from "../../Imgs/heart-icon-blue.png";
import energyIcon  from "../../Imgs/energy-icon-blue.png";

import aplleWatchImage  from "../../Imgs/apple-what.png";
import { InfoComplement } from '../info-complementar-product';


export function AppleWatchInfo(){
    const infoAppleWatchLeft = [
        {
           imageIcon: retinaIcon,
           title: 'Tela Retina',
           description: 'A tela Retina do Apple Watch é a tela de alta resolução encontrada nos modelos mais recentes dos smartwatches da Apple. Essa tela recebe o nome "Retina" devido à sua nitidez e qualidade visual, semelhante ao conceito usado nos iPhones e iPads',
       },
        {
           imageIcon: resistenceIcon,
           title: 'Resistente à água',
           description: 'O Apple Watch é projetado com resistência à água, permitindo que os usuários o usem em situações envolvendo água, como nadar ou tomar banho. A resistência à água varia entre os diferentes modelos e gerações do Apple Watch, mas geralmente é especificada em metros (metros de profundidade) e na certificação IP (Ingress Protection) correspondente',
       },
        {
           imageIcon: wirelesIcon,
           title: 'Carregamento magnético',
           description: 'O carregamento magnético do Apple Watch é o método pelo qual esse dispositivo é carregado de forma conveniente e eficiente. A principal característica desse método de carregamento é o uso de ímãs embutidos na parte traseira do relógio e no cabo de carregamento.',
       }
     ]
      const infoAppleWatchRigth = [
        {
            imageIcon: heartIcon,
            title: 'Monitoramento da frequência Cardíaca',
            description: 'O monitoramento cardíaco do Apple Watch pode ser uma ferramenta valiosa para quem deseja manter um estilo de vida saudável e acompanhar a saúde do coração de forma conveniente e acessível.',
       },
        {
           imageIcon: energyIcon,
           title: 'Acompanhamento de treino',
           description: 'O acompanhamento de treino do Apple Watch é uma funcionalidade poderosa que ajuda os usuários a monitorar e registrar suas atividades físicas e de exercícios. O Apple Watch possui sensores integrados, como acelerômetro, GPS e sensor de frequência cardíaca, que permitem que ele rastreie uma ampla variedade de atividades físicas, incluindo corrida, ciclismo, natação, caminhada, ioga e muito mais.',
       },
        {
           imageIcon: monitorIcon,
           title: 'Acompanhamento de condicionamento físico',
           description: 'O Apple Watch rastreia automaticamente sua atividade diária, incluindo etapas, distância percorrida e calorias queimadas. Ele também incentiva os usuários a alcançar metas de movimento diário personalizadas.',
       }
     ]
   return(
     <aside className="iphone-section" aria-labelledby="iphone-title">
          <div className="iphone-inner">
            <header className="iphone-top">
              <h2 id="iphone-title">
             Apple Watch</h2>
              <BorderBoxGradient message="Praticidade, Precisão e Elegância" />
            </header>
    
            <InfoComplement
              imagePrincipal={aplleWatchImage}
              position="right"
              textColor="white"
              infoLeft={infoAppleWatchLeft}
              infoRight={infoAppleWatchRigth}
            />
          </div>
        </aside>
   ) 
}


export const Header = memo(AppleWatchInfo)