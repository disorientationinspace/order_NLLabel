import React from "react";
import Link from "../Link/Link";

import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <article className="contact-us">
      <p className="contact-us__slogan">Хотите попробовать? Напишите нам.</p>
      <Link white className="contact-us__link">
        Связаться
      </Link>
    </article>
  );
};

export default ContactUs;
