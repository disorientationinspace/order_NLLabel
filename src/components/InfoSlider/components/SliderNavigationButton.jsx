import React from "react";

const SliderNavigationButton = ({ isActive, name, onClick }) => {
  const activeClass = "slider__button--active";

  return (
    <button
      className={`slider__button slider__button--${name} ${
        isActive ? activeClass : ""
      }`}
      onClick={onClick}
    >
      <span className="visually-hidden">{name}</span>
    </button>
  );
};

export default SliderNavigationButton;
