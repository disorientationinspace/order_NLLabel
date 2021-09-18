import React, { useEffect, useRef, useState } from "react";

import Dropdown from "../Dropdown/Dropdown";
import "./Intro.scss";

import animateText from "../../helpers/text-animation";
import { isElementVisible } from "../../helpers/utils";
import useThrottling from "../../hooks/useThrottling";
import useScroll from "../../hooks/useScroll";

const SCROLL_DELAY = 750;

const Intro = () => {
  const textRef = useRef();

  const [isShowingIntro, setIsShowingIntro] = useState(true);
  const introRef = useRef();

  const scrollHandle = (_, isScrollingUp) => {
    if (isElementVisible(introRef.current) && !isScrollingUp) {
      setIsShowingIntro(false);
    }

    if (isElementVisible(introRef.current) && isScrollingUp) {
      setIsShowingIntro(true);
    }
  };

  const throttledScrollHandle = useThrottling(scrollHandle, SCROLL_DELAY);

  const { block, unblock } = useScroll((...args) => {
    if (isShowingIntro) return throttledScrollHandle(...args);
    scrollHandle(...args);
  });

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (["A", "BUTTON"].includes(e.target.tagName)) {
        scrollHandle();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  useEffect(() => {
    if (isShowingIntro) {
      block();
      window.scrollTo({ top: 0 });
    } else {
      unblock();
      window.scrollTo({ top: window.innerHeight + 10 });
    }
  }, [block, unblock, isShowingIntro]);

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
    <section ref={introRef} className="intro" id="intro">
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
};

export default Intro;
