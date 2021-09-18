import React from "react";
import Anchor from "./Anchor";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="header__navigation navigation">
      <Anchor
        href="#intro"
        className="navigation__link"
        activeClassName="navigation__link--active"
      >
        Привет
      </Anchor>
      <Anchor
        href="#about-us"
        className="navigation__link"
        activeClassName="navigation__link--active"
      >
        О нас
      </Anchor>
      <Anchor
        href="#services"
        className="navigation__link"
        activeClassName="navigation__link--active"
      >
        Услуги
      </Anchor>
      <Anchor
        href="#team"
        className="navigation__link"
        activeClassName="navigation__link--active"
      >
        Команда
      </Anchor>
      <Anchor
        href="#contacts"
        className="navigation__link"
        activeClassName="navigation__link--active"
      >
        Связаться с нами
      </Anchor>
    </nav>
  );
};

export default Navigation;
