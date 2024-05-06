import React, { useState, useEffect } from "react";
import "./MoviesList.css";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import MenuAd from "../MenuAdmin/MenuAd";
import TableMovies from "../tableMovies/tableMovies";

export default function MoviesList() {
  const [isRightMainActive, setIsRightMainActive] = useState(false);

  useEffect(() => {
    setIsRightMainActive(true);
  }, []);

  return (
    <div id="moviesListContainer">
      <div id="moviesListContent">
        <CustomHeader />
        <div id="moviesListMain">
          <MenuAd />
          <div id="rightMainMv" className={isRightMainActive ? "active" : ""}>
            <h1>Movies List</h1>
            <div id="delallView">
              <button id="btnDelAll">
                <p>Delete All</p>
              </button>
            </div>
            <TableMovies id="tableMovies" />
            <div id="preAndNext">
              <div>
                {" "}
                <img
                  src={require("./../../assets/icons/previous.png")}
                  alt=""
                />
              </div>
              <div>
                <img src={require("./../../assets/icons/next.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
