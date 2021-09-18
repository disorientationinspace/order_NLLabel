import React, { useEffect, useRef, useState } from "react";

import "./ScrollUp.scss";

import Dropdown from "../Dropdown/Dropdown";
import { isElementVisible } from "../../helpers/utils";
import useScroll from "../../hooks/useScroll";
import useThrottling from "../../hooks/useThrottling";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const introRef = useRef();

  const throttledScrollHandle = useThrottling(() => {
    if (isElementVisible(introRef.current)) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, 750);

  useScroll(throttledScrollHandle);

  useEffect(() => {
    introRef.current = document.getElementById("intro");

    return () => (introRef.current = null);
  }, []);

  if (!isVisible) return null;

  const handleScrollUp = () => {
    window.scrollTo({ top: 0 });
    setIsVisible(false);
  };

  return (
    <Dropdown
      onClick={handleScrollUp}
      className="scroll-up"
      label="Верхнуться вверх"
    />
  );
};

export default ScrollUp;
