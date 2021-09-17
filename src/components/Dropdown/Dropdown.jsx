import React from "react";
import "./Dropdown.scss";

const Dropdown = ({ className, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`dropdown ${className}`}
      aria-label={label}
    >
      <span className="visually-hidden">{label}</span>
    </button>
  );
};

export default Dropdown;
