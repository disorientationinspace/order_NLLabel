import React from "react";
import "./Dropdown.scss";

const Dropdown = ({ className }) => {
  return (
    <button className={`dropdown ${className}`} aria-label="Дальше">
      <span className="visually-hidden">Дальше</span>
    </button>
  );
};

export default Dropdown;
