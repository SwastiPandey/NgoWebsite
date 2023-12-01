import React from "react";

const CardSimple = ({ cardimage, title, description, date, place }) => {
  return (
    <div className="event-wrap d-flex flex-wrap justify-content-between">
      <figure className="m-0">
        <img src={cardimage} alt="" />
      </figure>
      <div className="event-content-wrap">
        <header className="entry-header d-flex flex-wrap align-items-center">
          <h3 className="entry-title w-100 m-0">
            <a href="#">{title}</a>
          </h3>
          <div className="posted-date">
            <a href="#">{date}</a>
          </div>
          <div className="cats-links">
            <a href="#">{place}</a>
          </div>
        </header>
        <div className="entry-content">
          <p className="m-0">{description}</p>
        </div>
        <div className="entry-footer">
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default CardSimple;
