import React, { useEffect, useState } from "react";

import { isElementInViewport } from "../../helpers/utils";

const Anchor = ({ href, className, activeClassName, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const elem = document.querySelector(href);

    if (isElementInViewport(elem)) setIsActive(true);

    const scrollHandler = () => {
      if (isElementInViewport(elem)) {
        if (!isActive) setIsActive(true);
      } else if (isActive) setIsActive(false);
    };

    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, [isActive, href]);

  return (
    <a
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </a>
  );
};

export default Anchor;
