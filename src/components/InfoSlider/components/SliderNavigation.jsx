import React from "react";
import SliderNavigationButton from "./SliderNavigationButton";

const NAVIGATION_BUTTONS = ["recording", "music", "promotion"];

const SliderNavigation = ({ activeSlideIndex, onSlideChange }) => {
  return (
    <ul className="slider__navigation">
      {NAVIGATION_BUTTONS.map((button, index) => (
        <li key={button} className="slider__item">
          <SliderNavigationButton
            isActive={activeSlideIndex === index}
            onClick={onSlideChange.bind(null, index)}
            name={button}
          />
        </li>
      ))}
    </ul>
  );
};

export default SliderNavigation;
