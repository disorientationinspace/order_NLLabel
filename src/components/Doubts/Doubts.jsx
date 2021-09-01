import React from "react";
import Quote from "../Quote/Quote";

import "./Doubts.scss";

const Doubts = () => {
  return (
    <section className="doubts">
      <div className="doubts__wrapper">
        <h2 className="doubts__header">Ещё сомневаетесь?</h2>

        <Quote className="doubts__quote" />
        <p className="doubts__imac"></p>
      </div>
    </section>
  );
};

export default Doubts;
