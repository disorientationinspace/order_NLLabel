import React from "react";

const Slide = ({ slide, isActive }) => {
  const { title, description, subHeader, info, details } = slide;

  if (!isActive) return null;

  return (
    <div className="slider__tabcontent fadeIn">
      <h2 className="info__header slider__header">{title}</h2>
      <p className="info__description slider__description">{description}</p>
      <div className="slider__sub-content">
        <h3 className="slider__sub-header">{subHeader}</h3>
        <div className="slider__sub-wrapper">
          <p className="slider__info">{info}</p>
          <p className="slider__info slider__info--wide">
            {details instanceof Array
              ? details.map((detail) => (
                  <>
                    {detail}
                    <br />
                  </>
                ))
              : details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
