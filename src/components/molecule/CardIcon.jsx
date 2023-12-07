import React from "react";

const CardIcon = ({ imgNormal, imgHover, title, detail }) => {
  return (
    <div className="icon-box">
      <figure className="d-flex justify-content-center">
        <img src={imgNormal} alt="" />
        <img src={imgHover} alt="" />
      </figure>
      <header className="entry-header">
        <h3 className="entry-title">{title}</h3>
      </header>
      <div className="entry-content">
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default CardIcon;
