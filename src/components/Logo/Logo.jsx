import React from "react";

import "./Logo.scss";

const Logo = ({ className }) => {
  return <p className={`logo ${className || ""}`}>NL Label</p>;
};

export default Logo;
