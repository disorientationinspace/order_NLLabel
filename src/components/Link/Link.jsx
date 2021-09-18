import React from "react";

import "./Link.scss";

const Link = ({ className, children, color }) => {
  return (
    <a
      href={process.env.REACT_APP_TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
      className={`link link--${color} ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
