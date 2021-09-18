import React from "react";

const Plus = ({ width, height, fill }) => {
  return (
    <span
      style={{ width: width || 18, height: height || 18, fill: fill || "#000" }}
    >
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 52 52"
      >
        <g>
          <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26   S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z" />
          <path d="M38.5,25H27V14c0-0.553-0.448-1-1-1s-1,0.447-1,1v11H13.5c-0.552,0-1,0.447-1,1s0.448,1,1,1H25v12c0,0.553,0.448,1,1,1   s1-0.447,1-1V27h11.5c0.552,0,1-0.447,1-1S39.052,25,38.5,25z" />
        </g>
      </svg>
    </span>
  );
};

export default Plus;
