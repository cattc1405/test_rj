import React from "react";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div id="aboutContainer">
      <div id="aboutContent">
        <CustomHeader />
        <div id="banner">
          <p>About Us</p>
        </div>

        <div id="welcomeView">
          <div id="welcomeText">
            <h1>Welcome to our Netflix</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div>
              <div class="qualt">
                <div>
                  <h1>10k</h1>
                  <h3>Listed Movies</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and</p>
                </div>
              </div>

              <div class="qualt">
                <div>
                  <h1>8k</h1>
                  <h3>Lovely Users</h3>
                  <p>Completely free, without registration! Lorem Ipsum is simply</p>
                </div>
              </div>
            </div>
          </div>

          <img src={require("./../../assets/images/aboutusWcImg.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
}
