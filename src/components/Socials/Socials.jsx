import React from "react";

import "./Socials.scss";

const Socials = ({ className }) => {
  return (
    <ul className={`socials ${className} `}>
      <li className="socials__item">
        <a
          href={process.env.REACT_APP_VK_URL}
          target="_blank"
          rel="noreferrer"
          className="socials__link socials__link--vk"
        >
          <span className="visually-hidden">ВКонтакте</span>
        </a>
      </li>
      <li className="socials__item">
        <a
          href={process.env.REACT_APP_TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="socials__link socials__link--telegram"
        >
          <span className="visually-hidden">Телеграмм</span>
        </a>
      </li>
    </ul>
  );
};

export default Socials;
