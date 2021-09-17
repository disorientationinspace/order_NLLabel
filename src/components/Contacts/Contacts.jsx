import React from "react";

import "./Contacts.scss";

const {
  REACT_APP_CONTACT_PHONE,
  REACT_APP_CONTACT_MAIL,
  REACT_APP_TELEGRAM_URL,
} = process.env;

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts__header">Наши контакты</h2>
      <div className="contacts__item">
        <p className="contacts__photo contacts__photo--email"></p>
        <h4 className="contacts__name">Email</h4>
        <a
          href={`mailto:${REACT_APP_CONTACT_MAIL}`}
          className="contacts__details contacts__link"
        >
          {REACT_APP_CONTACT_MAIL}
        </a>
      </div>
      <div className="contacts__item">
        <p className="contacts__photo contacts__photo--telegram"></p>
        <h4 className="contacts__name">Telegram</h4>
        <p className="contacts__details">
          <a className="contacts__link" href={REACT_APP_TELEGRAM_URL}>
            @NLRec_CEO
          </a>{" "}
          - Артём "NightLoud"
        </p>
      </div>
      <div className="contacts__item">
        <p className="contacts__photo contacts__photo--phone"></p>
        <h4 className="contacts__name">Телефон</h4>
        <a href="tel:" className="contacts__details contacts__link">
          {REACT_APP_CONTACT_PHONE}
        </a>
      </div>
    </section>
  );
};

export default Contacts;
