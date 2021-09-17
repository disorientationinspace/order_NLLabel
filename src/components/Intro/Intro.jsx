import React, { useEffect, useRef } from "react";

import Dropdown from "../Dropdown/Dropdown";
import "./Intro.scss";

import animateText from "../../helpers/text-animation";

const Intro = React.forwardRef((_, ref) => {
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

  const handleDropdownClick = () => {
    window.scrollTo({ top: window.innerHeight + 10 });
  };

  return (
    <section ref={ref} className="intro" id="intro">
      <div className="intro__background"></div>
      <p ref={textRef} className="intro__slogan">
        NL Label - музыка будущего
      </p>

      <Dropdown
        onClick={handleDropdownClick}
        label="Дальше"
        className="intro__dropdown"
      />
    </section>
  );
});

export default Intro;
