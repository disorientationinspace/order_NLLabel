import React from "react";
import Logo from "../Logo/Logo";

import Socials from "../Socials/Socials";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo className="footer__logo">NL Label</Logo>
      <Socials className="footer__socials" />
      <p className="footer__copyright">
        © {new Date().getFullYear()}, NL Label. All Rights Reserved.
      </p>
      <p className="footer__creator">
        <a href={process.env.REACT_APP_AUTHOR_LINK} className="footer__link">
          created by WITO DIVARO
        </a>
      </p>
    </footer>
  );
};

export default Footer;
