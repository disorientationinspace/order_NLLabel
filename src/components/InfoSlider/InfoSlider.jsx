import React, { useState } from "react";

import "./InfoSlider.scss";

import Slide from "./components/Slide";
import SliderNavigation from "./components/SliderNavigation";
import { SLIDES } from "./constants";

const InfoSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlideIndex(index);
  };

  return (
    <div className="slider">
      <SliderNavigation
        activeSlideIndex={activeSlideIndex}
        onSlideChange={handleSlideChange}
      />
      {SLIDES.map((slide, index) => (
        <Slide
          isActive={index === activeSlideIndex}
          key={slide.name}
          slide={slide}
        />
      ))}
    </div>
  );
};

export default InfoSlider;
