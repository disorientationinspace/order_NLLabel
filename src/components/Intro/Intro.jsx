import React, { useEffect, useRef } from "react";

import Dropdown from "../Dropdown/Dropdown";
import "./Intro.scss";

import animateText from "../../helpers/text-animation";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      animateText({
        container: textRef.current,
        phrases: [
          "NL Label",
          "Создаем лучшую музыку",
          "Продвигаем талантливых артистов",
          "Работаем в Минске",
          "Захватываем чарты!",
        ],
      });
    }
  }, [textRef]);

  return (
    <section className="intro" id="intro">
      <div className="intro__background"></div>
      <p ref={textRef} className="intro__slogan">
        NL Label - музыка будущего
      </p>

      <Dropdown className="intro__dropdown" />
    </section>
  );
};

export default Intro;
