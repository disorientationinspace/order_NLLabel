import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import TeamMember from "./components/TeamMember";
import { TEAM_DATA } from "./constants";

import "./Team.scss";

const Team = () => {
  return (
    <section className="team" id="team">
      <h2 className="team__header">Команда</h2>
      <p className="team__info">
        Ознакомьтесь с нашей профессиональной командой
      </p>
      <Swiper className="team__slider" spaceBetween={50} slidesPerView={1}>
        {TEAM_DATA.map((member) => (
          <SwiperSlide key={member.name}>
            <TeamMember member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;
