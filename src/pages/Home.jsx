import React from "react";
import cause1 from "../assets/cause-1.jpg.webp";
import cause2 from "../assets/cause-2.jpg.webp";
import cause3 from "../assets/cause-3.jpg.webp";
import charitygray from "../assets/charity-gray.png.webp";
import charitywhite from "../assets/charity-white.png.webp";
import donationgray from "../assets/donation-gray.png.webp";
import donationwhite from "../assets/donation-white.png.webp";
import event1 from "../assets/event-1.jpg.webp";
import event2 from "../assets/event-2.jpg.webp";
import event3 from "../assets/event-3.jpg.webp";
import featuredcauses from "../assets/featured-causes.jpg.webp";
import handsgray from "../assets/hands-gray.png.webp";
import handswhite from "../assets/hands-white.png.webp";
import welcome from "../assets/welcome.jpg.webp";
import ButtonNgo from "../components/atoms/ButtonNgo";
import CardFeatured from "../components/molecule/CardFeatured";
import CardIcon from "../components/molecule/CardIcon";
import CardProgress from "../components/molecule/CardProgress";
import CardSimple from "../components/molecule/CardSimple";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <div className="banner" data-swiper-slide-index="2">
        <div className="hero-content-overlay position-absolute w-100 h-100">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                <header className="entry-header">
                  <h1>Donate</h1>
                  <h4>4 a better world</h4>
                </header>
                <div className="entry-content mt-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tempus vestibulum mauris quis aliquam. Integer
                    accumsan sodales odio, id tempus ullamcorper
                  </p>
                </div>
                <footer className="entry-footer d-flex flex-wrap align-items-center mt-5 gap-2">
                  <Link to="/donate">
                    <ButtonNgo
                      text="Donate Now"
                      link={"#"}
                      className={"gradient-bg"}
                    />
                  </Link>
                  <ButtonNgo
                    text="Read More"
                    link={"#"}
                    className={"orange-border"}
                  />
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home Icon */}
      <div className="home-page-icon-boxes">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
              <CardIcon
                imgNormal={handsgray}
                imgHover={handswhite}
                title="Become a Volunteer"
                detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
              <CardIcon
                imgNormal={donationgray}
                imgHover={donationwhite}
                title="Dance &amp; Music"
                detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
              <CardIcon
                imgNormal={charitygray}
                imgHover={charitywhite}
                title="Online Conference"
                detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam."
              />
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="home-page-welcome">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="welcome-content">
                <header className="entry-header">
                  <h2 className="entry-title">Wellcome to our Charity</h2>
                </header>
                <div className="entry-content mt-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Mauris tempus
                    vestibulum mauris quis aliquam. Integer accumsan sodales
                    odio, id tempus velit ullamcorper id. Quisque at erat eu
                    libero consequat tempus. Quisque molestie convallis tempus.
                    Ut semper purus metus, a euismod sapien sodales ac. Duis
                    viverra eleifend fermentum.
                  </p>
                </div>
                <div className="entry-footer mt-5">
                  <ButtonNgo
                    text="Read More"
                    link={"#"}
                    className={"gradient-bg"}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-4 order-1 order-lg-2">
              <img src={welcome} alt="welcome" />
            </div>
          </div>
        </div>
      </div>
      {/* Events */}
      <div className="home-page-events" id="causes">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="upcoming-events">
                <div className="section-heading">
                  <h2 className="entry-title">Upcoming Events</h2>
                </div>
                <CardSimple
                  cardimage={event1}
                  title="Fundraiser for Kids"
                  date="Aug 25, 2018"
                  place="Ball Room New York"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris."
                />
                <CardSimple
                  cardimage={event2}
                  title="Bring water to the childrens"
                  date="Aug 25, 2018"
                  place="Ball Room New York"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris."
                />
                <CardSimple
                  cardimage={event3}
                  title="Bring water to the childrens"
                  date="Aug 25, 2018"
                  place="Ball Room New York"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris."
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="featured-cause">
                <div className="section-heading">
                  <h2 className="entry-title">Featured Cause</h2>
                </div>
                <CardFeatured
                  cardimage={featuredcauses}
                  title="Fundraiser for Kids"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur."
                  date="Aug 25, 2018"
                  place="Ball Room New York"
                  raised="56880"
                  goal="70000"
                  percentageComplete="83"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cause */}
      <div className="our-causes">
        <div className="container">
          <div className="row">
            <div className="coL-12">
              <div className="section-heading">
                <h2 className="entry-title">Our Causes</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <CardProgress
                  cardimage={cause1}
                  title="Bring water to the childrens"
                  description="Lorem ipsum dolor sit amet, adipiscing elit. Mauris tempus vestib ulum mauris."
                  raised="56880"
                  goal="70000"
                  percentageComplete="83"
                />
                <CardProgress
                  cardimage={cause2}
                  title="Education for all"
                  description="Lorem ipsum dolor sit amet, adipiscing elit. Mauris tempus vestib ulum mauris."
                  raised="56880"
                  goal="70000"
                  percentageComplete="83"
                />
                <CardProgress
                  cardimage={cause3}
                  title="Bring water to the childrens"
                  description="Lorem ipsum dolor sit amet, adipiscing elit. Mauris tempus vestib ulum mauris."
                  raised="56880"
                  goal="70000"
                  percentageComplete="83"
                />
              </div>
            </div>
          </div>

          <div className="swiper-button-next flex justify-content-center align-items-center">
            <span>
              <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
              </svg>
            </span>
          </div>
          <div className="swiper-button-prev flex justify-content-center align-items-center swiper-button-disabled">
            <span>
              <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
