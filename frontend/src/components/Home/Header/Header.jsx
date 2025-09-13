import HeaderStyle from "./Header.module.css";

import React from "react";
import Nav from "./Nav/Nav";
import VideoHeader from "./VideoHeader/VideoHeader";
import LocationAndDate from "./LocationAndDate/LocationAndDate";

const Header = () => {
  return (
    <>
      <div className={HeaderStyle.HeadContainer}>
        <div className={HeaderStyle.HeaderContainer}>
          <div className={HeaderStyle.Logo}>tour guide</div>
          <Nav />
        </div>
        <div className={HeaderStyle.HeaderDescription}>
          <h1>We Find The Best Tours For You</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. <br /> Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat <br /> sunt nostrud amet.
          </p>
        </div>
        <VideoHeader />
        <LocationAndDate/>
      </div>
    </>
  );
};

export default Header;
