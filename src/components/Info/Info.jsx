import React from "react";
import InfoSlider from "../InfoSlider/InfoSlider";
import Link from "../Link/Link";

import "./Info.scss";

const Info = () => {
  return (
    <section className="info" id="about-us">
      <InfoSlider />
      <div className="info__about-us">
        <h2 className="info__header">Что такое NL Label?</h2>
        <p className="info__description">
          <span className="info__description--pink">NL Label</span> - это
          объединение творческих личностей, занимающихся{" "}
          <span className="info__description--dark-grey">музыкой</span>. Мы
          работаем с{" "}
          <span className="info__description--dark-grey">перспективными</span>{" "}
          исполнителями и музыкантами из{" "}
          <span className="info__description--pink">Минска</span>.
        </p>

        <Link className="info__link button">Подробнее</Link>

        <p className="info__picture"></p>
      </div>
    </section>
  );
};

export default Info;
