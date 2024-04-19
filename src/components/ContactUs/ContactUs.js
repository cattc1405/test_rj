import React from "react";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import "./ContactUs.css";
export default function ContactUs() {
  return (
    <div id="contactContainer">
      <div id="contactContent">
        <CustomHeader />
        <div id="bannerCt">
          <p>Contact Us</p>
        </div>

        <div id="contactView">
          <div class="contactMethod">
            <div>
              <img src={require("./../../assets/icons/redmail.png")} alt="" />
            </div>
            <h1>Email Us</h1>
            <p>
              <a href="">levelup@fpt.edu.vn</a> Interactively grow backend ideas
              for cross-platform models.
            </p>
          </div>
          <div class="contactMethod">
            <div>
              <img src={require("./../../assets/icons/redmail.png")} alt="" />
            </div>
            <h1>Email Us</h1>
            <p>
              <a href="">levelup@fpt.edu.vn</a> Interactively grow backend ideas
              for cross-platform models.
            </p>
          </div>
          <div class="contactMethod">
            <div>
              <img src={require("./../../assets/icons/redmail.png")} alt="" />
            </div>
            <h1>Email Us</h1>
            <p>
              <a href="">levelup@fpt.edu.vn</a> Interactively grow backend ideas
              for cross-platform models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
