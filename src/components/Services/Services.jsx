import React from "react";
import Service from "./components/Service";
import SERVICES from "./mock";

import "./Services.scss";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__wrapper">
        <h3 className="services__title">Наши услуги</h3>

        {SERVICES.map((service) => (
          <Service service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
