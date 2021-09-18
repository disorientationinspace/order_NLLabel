import React, { useState } from "react";

import Plus from "../../../assets/Plus";

const ServiceExtension = ({ extension, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const { name, price } = extension;

  const handleClick = () => {
    onClick(price, !isActive);
    setIsActive(!isActive);
  };

  return (
    <li
      onClick={handleClick}
      className={`services__extension ${
        isActive ? "services__extension--active" : ""
      }`}
    >
      <Plus fill="#ad1f54" />
      <p>{name}</p>
      <span>+ {price} р.</span>
    </li>
  );
};

export default ServiceExtension;
