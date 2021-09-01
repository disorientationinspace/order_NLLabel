import React from "react";

import "./Quote.scss";

const Quote = ({ className }) => {
  return (
    <div className={`quote ${className}`}>
      <p className="quote__text">
        В начале своего пути каждый музыкант обязан получить поддержку, чтобы
        полностью раскрыть свой талант. Мы оказываем эту поддержку всем
        участникам нашей дружной общины.
      </p>
      <p className="quote__author">
        <b className="quote__name">- NightLoud</b>
        <span className="quote__position">
          Основатель <span className="quote__text--pink">NL L</span>abel
        </span>
      </p>
    </div>
  );
};

export default Quote;
