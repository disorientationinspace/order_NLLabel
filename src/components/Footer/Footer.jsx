import React from "react";
import Logo from "../Logo/Logo";

import Socials from "../Socials/Socials";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo className="footer__logo">NL Label</Logo>
      <p className="footer__copyright">
        Copyright © NLLabel, {new Date().getFullYear()}
      </p>
      <Socials className="footer__socials" />
      <p className="footer__creator">
        <a href="https://tg-me.ru/witodivaro" className="footer__link">
          created by WITO DIVARO
        </a>
      </p>
    </footer>
  );
};

export default Footer;
