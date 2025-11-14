import "./styles.scss";

import moneyIcon from "../../../../Imgs/money-icon-blue.png";
import memoryIcon from "../../../../Imgs/memory-icon-blue.png";
import bateryIcon from "../../../../Imgs/batery-icon-blue.png";
import iphoneIcon from "../../../../Imgs/iphone-icon-blue.png";
import observationIcon from "../../../../Imgs/observation-icon-blue.png";

export interface CardProps {
  tittle: string;
  price: string;
  memory: string;
  batery: string;
  display: string;
  observation: string;
  image: string;
}

export function CardComponent(props: CardProps) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="principal-image" src={props.image} alt={props.tittle} />
      </div>

      <div className="descriptions-container">
        <h2>{props.tittle}</h2>

        <ul>
          <li>
            <img src={moneyIcon} alt="" />
            <span>{props.price}</span>
          </li>

          <li>
            <img src={memoryIcon} alt="" />
            <span>{props.memory}</span>
          </li>

          <li>
            <img src={bateryIcon} alt="" />
            <span>{props.batery}</span>
          </li>

          <li>
            <img src={iphoneIcon} alt="" />
            <span>{props.display}</span>
          </li>

          <li>
            <img src={observationIcon} alt="" />
            <span>{props.observation}</span>
          </li>
        </ul>

        <button
          onClick={() =>
            window.open(
              `https://wa.me/5544999097786?text=Olá+poderia+me+passar+mais+informações+sobre+o+produto&type=custom_url&app_absent=0`
            )
          }
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
