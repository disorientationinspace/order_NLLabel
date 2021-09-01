import React from "react";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts__header">Наши контакты</h2>
      <div className="contacts__item">
        <p className="contacts__photo contacts__photo--email"></p>
        <h4 className="contacts__name">Email</h4>
        <p className="contacts__details">aidensolarsdin@gmail.com</p>
      </div>
      <div className="contacts__item">
        <p className="contacts__photo contacts__photo--telegram"></p>
        <h4 className="contacts__name">Telegram</h4>
        <p className="contacts__details">
          <a href="https://tg-me.ru/DJnightloud">@DJNightLoud</a> - основатель
          <br />
          <a href="https://tg-me.ru/NightLoud">@NightLoud</a> - группа лейбла
        </p>
      </div>
      <div className="contacts__item">
        <p className="contacts__photo contacts__photo--phone"></p>
        <h4 className="contacts__name">Телефон</h4>
        <p className="contacts__details">/topsecret/</p>
      </div>
    </section>
  );
};

export default Contacts;
