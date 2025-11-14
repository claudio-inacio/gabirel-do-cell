/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles.scss";

export function InfoCard({ icon, title, description, align = "left" }) {
  return (
    <div className={`info-card ${align}`}>
      <div className="icon-wrap" aria-hidden>
        <img src={icon} className="icon-image" alt="" />
      </div>

      <div className="text-wrap">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function InfoComplement({
  imagePrincipal,
  position = "right",
  infoLeft = [],
  infoRight = []
}) {
  return (
    <div className={`info-complement layout-${position}`}>
      {/* LEFT COLUMN */}
      <div className="column left reveal">
        {infoLeft.map((info, idx) => (
          <InfoCard
            key={idx}
            icon={info.imageIcon}
            title={info.title}
            description={info.description}
            align="left"
          />
        ))}
      </div>

      {/* IMAGE (se quiser ativar depois) */}
      {/* 
      <div className="center-image reveal">
        <img src={imagePrincipal} alt="product" />
      </div>
      */}

      {/* RIGHT COLUMN */}
      {/* 
      <div className="column right reveal">
        {infoRight.map((info, idx) => (
          <InfoCard
            key={idx}
            icon={info.imageIcon}
            title={info.title}
            description={info.description}
            align="right"
          />
        ))}
      </div>
      */}
    </div>
  );
}
