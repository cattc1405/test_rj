import React, { useState, useEffect } from "react";
import "./AddMovies.css";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import MenuAd from "../MenuAdmin/MenuAd";

export default function AddMovies() {
  const [isRightMainActive, setIsRightMainActive] = useState(false);
  const [isCastWindowOpen, setIsCastWindowOpen] = useState(false);
  const [castWindowPosition, setCastWindowPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsRightMainActive(true);
  }, []);

  const handleAddCastClick = (event) => {
    const buttonRect = event.target.getBoundingClientRect();
    const positionX = buttonRect.left + buttonRect.width / 2;
    const positionY = buttonRect.top + buttonRect.height + window.scrollY;
    setCastWindowPosition({ x: positionX, y: positionY });
    setIsCastWindowOpen(true);
  };

  const handleCloseCastWindow = () => {
    setIsCastWindowOpen(false);
  };
  return (
    <div id="addMvContainer">
      <div id="addMvContent">
        <CustomHeader />
        <div id="addMvMain">
          <MenuAd />
          <div
            id="rightMainAddMv"
            className={isRightMainActive ? "active" : ""}
          >
            <h1>Create Movies</h1>
            <div id="twoColumnsInRight">
              <div id="leftContent">
                <p>Recent Movies</p>
                <input type="text" placeholder="Movies title" />
                <p>Language Used</p>
                <input type="text" placeholder="endlish" />
                <p>Image Without Title</p>
                <div id="uploadImgMv">
                  <img
                    src={require("./../../assets/icons/uploadred.png")}
                    alt=""
                  />
                  <h4>Drag your image here</h4>
                  <i>only .jpg and .png files will be accepted</i>
                </div>
                <div id="imgMvLoaded">
                  <img
                    src={require("./../../assets/images/avtIfNull.png")}
                    alt=""
                  />
                </div>
              </div>
              <div id="rightContent">
                <p>Hours</p>
                <input type="text" placeholder="Movies title" />
                <p>Year of Release</p>
                <input type="text" placeholder="endlish" />
                <p>Image With Title</p>
                <div id="uploadImgMv">
                  <img
                    src={require("./../../assets/icons/uploadred.png")}
                    alt=""
                  />
                  <h4>Drag your image here</h4>
                  <i>only .jpg and .png files will be accepted</i>
                </div>
                <div id="imgMvLoaded">
                  <img
                    src={require("./../../assets/images/avtIfNull.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <p>Movies Description</p>
            <input type="text" placeholder="Movies title" />
            <p>Movies Category</p>
            <select name="cate" id="cateSelect">
              <option value="0">Drama</option>
              <option value="1">Drama</option>
              <option value="2">Drama</option>
              <option value="2">Drama</option>
              <option value="2">Drama</option>
              <option value="2">Drama</option>
            </select>
            <p>Movies Description</p>
            <div id="uploadMovieVid">
              <img src={require("./../../assets/icons/uploadred.png")} alt="" />
              <h4>Drag your image here</h4>
              <i>only .jpg and .png files will be accepted</i>
            </div>
            <div id="addCastView">
              <button onClick={handleAddCastClick}>
                <p>Add Cast</p>
              </button>
              <div id="castsAddedView">
                
              </div>
            </div>
            <button id="btnPublishMovies">
              <p>Publish Movie</p>
            </button>
          </div>
        </div>
      </div>
      {isCastWindowOpen && (
        <CastInformationWindow onClose={handleCloseCastWindow} />
      )}
    </div>
  );
}

const handleAddCast = () => {
  const parentElement = document.getElementById("castsAddedView");

  const newCastElement = document.createElement("div");
  newCastElement.className = "castAdded";

  newCastElement.innerHTML = `
  <img
    src=${require("./../../assets/images/cast1.jpg")}
    alt=""
  />
  <p aria-rowcount={1}>Company slidse</p>
  <div class="delAndUpdateCastView">
    <div>
      <img
        src=${require("./../../assets/icons/redDelIcon.png")}
        alt=""
      />
    </div>
    <div>
      <img
        src=${require("./../../assets/icons/greenEditIcccc.png")}
        alt=""
      />
    </div>
  </div>
  `;

  parentElement.appendChild(newCastElement);
};

const CastInformationWindow = ({ onClose }) => {
  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  };
  const handleButtonClick = () => {
    onClose();
    handleAddCast();
  };

  return (
    <div className="castWindow" style={style}>
      <div className="castContent">
        <h1>Create Cast</h1>
        <p>Cast name</p>
        <input type="text" placeholder="Iron Man" />
        <p>Cast Image</p>
        <div id="uploadImgCast">
          <img src={require("./../../assets/icons/uploadred.png")} alt="" />
          <h4>Drag your image here</h4>
          <i>only .jpg and .png files will be accepted</i>
        </div>
        <div id="imgCastLoaded">
          <img src={require("./../../assets/images/avtIfNull.png")} alt="" />
        </div>
        <button className="closeCastInfoButton" onClick={handleButtonClick}>
          <p>Add</p>
        </button>
      </div>
    </div>
  );
};
