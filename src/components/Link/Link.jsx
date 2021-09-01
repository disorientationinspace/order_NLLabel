import React from "react";

import "./Link.scss";

const Link = ({ className, children, white }) => {
  return (
    <a
      href={process.env.REACT_APP_TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
      className={`link ${white ? "link--white" : ""} ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
