/* eslint-disable jsx-a11y/alt-text */
import "./styles.scss";
import IphoneAppleWatch from "../../Imgs/principalImage.png";
import BackgroundTexture from "../../Imgs/logo.png"; // ← mesma imagem do header

export function SectionApresentation() {
  return (
    <main
      className="apresentation-container"
      style={{ backgroundImage: `url(${BackgroundTexture})` }}
    >
      <section className="description-container">
        <h1>Bem-vindo à Gabriel do Cell</h1>

        <span>
          Na Gabriel do Cell você encontra atendimento dedicado, transparente e
          feito para ajudar você a escolher o iPhone ideal. Nosso foco é sempre
          sua necessidade e satisfação — com confiança e qualidade.
        </span>
        <br/>
        <br/>

        <a href="#my_products">
          <button>Ver Produtos</button>
        </a>
      </section>

      <aside className="image-container">
        <img
          className="principal-image"
          src={IphoneAppleWatch}
          alt="iphone e apple watch"
        />
      </aside>
    </main>
  );
}

