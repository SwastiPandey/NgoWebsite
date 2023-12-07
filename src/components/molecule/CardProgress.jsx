import React from "react";

const CardProgress = ({
  cardimage,
  title,
  description,
  raised,
  goal,
  percentageComplete,
}) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="cause-wrap">
        <figure className="m-0">
          <img src={cardimage} alt="" />
          <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
            <a href="#" className="btn gradient-bg mr-2">
              Donate Now
            </a>
          </div>
        </figure>
        <div className="cause-content-wrap">
          <header className="entry-header d-flex flex-wrap align-items-center">
            <h3 className="entry-title w-100 m-0">
              <a href="#">{title}</a>
            </h3>
          </header>
          <div className="entry-content">
            <p className="m-0">{description}</p>
          </div>
          <div className="fund-raised w-100">
            <div className="fund-raised-bar-1 barfiller">
              <div className="tipWrap" style={{ display: "inline" }}>
                <span
                  className="tip"
                  style={{
                    left: "195.38px",
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
                  width: "237.38px",
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
      </div>
    </div>
  );
};

export default CardProgress;
