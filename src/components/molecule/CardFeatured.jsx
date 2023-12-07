import React from "react";

const CardFeatured = ({
  cardimage,
  title,
  description,
  date,
  place,
  raised,
  goal,
  percentageComplete,
}) => {
  return (
    <div className="cause-wrap d-flex flex-wrap justify-content-between">
      <figure className="m-0">
        <img src={cardimage} alt="" />
      </figure>
      <div className="cause-content-wrap">
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
        <div className="entry-footer mt-5">
          <a href="#" className="btn gradient-bg mr-2">
            Donate Now
          </a>
        </div>
      </div>
      <div className="fund-raised w-100">
        <div className="featured-fund-raised-bar barfiller">
          <div className="tipWrap" style={{ display: "inline" }}>
            <span
              className="tip"
              style={{
                left: "366.36px",
                transition: "left 1.5s ease-in-out 0s",
              }}
            >
              {percentageComplete}%
            </span>
          </div>
          <span
            className="fill"
            data-percentage="83"
            style={{
              background: "rgb(255, 90, 0)",
              width: "408.36px",
              transition: "width 1.5s ease-in-out 0s",
            }}
          ></span>
        </div>
        <div className="fund-raised-details d-flex flex-wrap justify-content-between align-items-center">
          <div className="fund-raised-total mt-4">Raised: ${raised}</div>
          <div className="fund-raised-goal mt-4">Goal: ${goal}</div>
        </div>
      </div>
    </div>
  );
};

export default CardFeatured;
