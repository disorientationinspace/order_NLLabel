import React, { useState } from "react";
import Link from "../../Link/Link";
import ServiceExtension from "./ServiceExtension";

const Service = ({ service }) => {
  const { title, img, description, price, extensions } = service;

  const [calculatedPrice, setCalculatedPrice] = useState(price);

  const handleExtensionClick = (price, isActive) => {
    let multiplier = isActive ? 1 : -1;

    setCalculatedPrice((servicePrice) => servicePrice + price * multiplier);
  };

  return (
    <article className="services__item">
      <h4 className="services__header">{title}</h4>
      <img className="services__img" src={img} alt={title} />
      <p className="services__description">
        {description}
        <span className="services__price">{calculatedPrice} р.</span>
      </p>
      <ul className="services__extensions-list">
        {extensions.map((extension) => (
          <ServiceExtension
            extension={extension}
            onClick={handleExtensionClick}
          />
        ))}
      </ul>

      <Link className="services__link" color="pink">
        Заказать
      </Link>
    </article>
  );
};

export default Service;
