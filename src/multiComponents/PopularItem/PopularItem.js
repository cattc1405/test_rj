import React from "react";
import "./PopularItem.css";
export default function PopularItem() {
  return (
    <div id="popularItem">
      
      <a href="/MoviesDetail">
        <img src={require("./../../assets/images/film3.jpg")} alt="" />
      </a>

      <div id="filmTitleView">
        <p aria-rowcount={1}>Dr.Strange In The MultiUniversity</p>
        <div>
          <img src={require("./../../assets/icons/whiteheart.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
