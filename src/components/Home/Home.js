import React from "react";
import "./Home.css";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import SlideFilmItem from "../../multiComponents/SlideFilmItem/SlideFilmItem";
import PopularItem from "../../multiComponents/PopularItem/PopularItem";
import TestSlide from "./TestSlide";

export default function Home() {
  return (
    <div id="homeContainer">
      <div id="homeContent">
        <CustomHeader />
        <SlideFilmItem />
        <div id="popular">
          <div>
            <p>Popular Movies</p>
          </div>
          <div id="popularContent">
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
          </div>
        </div>
      </div>
      {/* <TestSlide /> */}
    </div>
  );
}
