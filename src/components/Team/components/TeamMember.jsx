import React from "react";

import "./TeamMember.scss";

const TeamMember = ({ member }) => {
  const { img, name, position, description } = member;

  const image = require("../../../assets/img/" + img);

  return (
    <div className="team-member__tabcontent">
      <p className="team-member__photo-container">
        <img
          src={image.default}
          alt={name}
          className="team-member__photo"
          width="auto"
          height="auto"
        />
      </p>
      <p className="team-member__name">{name}</p>
      <p className="team-member__position">{position}</p>
      <span className="team-member__pink-line"></span>
      <p className="team-member__description">{description}</p>
    </div>
  );
};

export default TeamMember;
