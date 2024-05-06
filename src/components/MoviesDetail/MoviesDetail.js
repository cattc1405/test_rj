import React from "react";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import "./MoviesDetail.css";
export default function MoviesDetail() {
  return (
    <div id="moviesDContainer">
      <CustomHeader />

      <div id="moviesDContent">
        <img className="imgBackgr" src={require("./../../assets/images/film3.jpg")} alt="" />

        <div id="bannerr">
          <img src={require("./../../assets/images/anh.jpg")} alt="" />
          <div id="infor">
            <h3>Doctor Strange</h3>

            <div id="time">
              <p>4K</p> <p>Sclence Fiction</p> <p>2020</p> <p>2h</p>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <div className="box"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
