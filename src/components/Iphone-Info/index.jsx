/* eslint-disable jsx-a11y/alt-text */
import { memo, useEffect } from "react";
import "./styles.scss";
import iphoneIcon from "../../Imgs/iphone-icon-white.png";
import iosIcon from "../../Imgs/ios-logo-white.png";
import ecosistemaApple from "../../Imgs/apple-icon-white.png";
import desempenhoIcon from "../../Imgs/desempenho-icon-white.png";
import cameraIcon from "../../Imgs/apple-camera-white.png";
import suporteIcon from "../../Imgs/suporte-icon-white.png";
import { BorderBoxGradient } from "../box-border-gradiente";
import { InfoComplement } from "../info-complementar-product";
import iphoneImage from "../../Imgs/iphone14.png";
import { enableDynamicBlur, enableScrollReveal } from "../../pages/home";
function IphoneInfo() {
  const infoLeft = [
    {
      imageIcon: iphoneIcon,
      title: "Qualidade Premium",
      description:
        "Materiais de alta qualidade e acabamento refinado — durabilidade e design que você sente no toque.",
    },
    {
      imageIcon: iosIcon,
      title: "iOS Atualizado",
      description:
        "Sistema estável e seguro com atualizações contínuas: performance mantida por anos.",
    },
    {
      imageIcon: ecosistemaApple,
      title: "Ecossistema Integrado",
      description:
        "Conecte iPhone, Mac, iPad e Apple Watch — arquivos, mensagens e chamadas fluem entre seus aparelhos.",
    },
  ];

  const infoRight = [
    {
      imageIcon: desempenhoIcon,
      title: "Alto Desempenho",
      description:
        "Processamento potente para multitarefa, jogos e edição — velocidade aliada à eficiência energética.",
    },
    {
      imageIcon: cameraIcon,
      title: "Câmeras Profissionais",
      description:
        "Fotos e vídeos com processamento inteligente: ótimo resultado em qualquer iluminação.",
    },
    {
      imageIcon: suporteIcon,
      title: "Suporte Confiável",
      description:
        "Assistência e garantia com cobertura ampla — suporte que acompanha seu aparelho após a compra.",
    },
  ];

  useEffect(() => {
    enableDynamicBlur();
    enableScrollReveal();
  }, []);

  return (
    <aside className="iphone-section" aria-labelledby="iphone-title">
      <div className="iphone-inner">
        <header className="iphone-top">
          <h2 id="iphone-title">iPhone</h2>
          <BorderBoxGradient message="Design • Performance • Segurança" />
        </header>

        <InfoComplement
          imagePrincipal={iphoneImage}
          position="right"
          textColor="white"
          infoLeft={infoLeft}
          infoRight={infoRight}
        />
      </div>
    </aside>
  );
}

export default memo(IphoneInfo);
