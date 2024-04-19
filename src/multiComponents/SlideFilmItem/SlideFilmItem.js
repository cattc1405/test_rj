import React from "react";
import "./SlideFilmItem.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideVertical = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true, // Chuyển cảnh theo chiều dọc
    verticalSwiping: true, // Cho phép vuốt theo chiều dọc
    swipeToSlide: true, // Cho phép chuyển slide bằng cách vuốt
    autoplay: true, // Tự động chuyển slide
    autoplaySpeed: 1000, // Tốc độ chuyển slide (miliseconds)
  };

  return (
    <Slider {...settings} id="slider">
      <div class="slideView">
        <img src={require("../../assets/images/bannerFilm.jpg")} />
      </div>

      <div class="slideView">
        <img src={require("../../assets/images/film1.jpg")} />
      </div>

      <div class="slideView">
        <img src={require("../../assets/images/film3.jpg")} />
      </div>
    </Slider>
  );
};
export default function SlideFilmItem() {
  return (
    <div class="slideView">
      {/* <SlideVertical /> */}
      <img src={require('../../assets/images/bannerFilm.jpg')} />
      <div id="slideItemContent">
        <p>Black Panther</p>
        <div>
          <p>Scrience Fiction</p>
          <div className="iconInCt">
            <img src={require("../../assets/icons/calendar.png")} alt="" />
            <p>2027</p>
          </div>

          <div className="iconInCt">
            <img src={require("../../assets/icons/clockIcon.png")} alt="" />
            <p>2 Hr</p>
          </div>
        </div>

        <div id="watchView">
          <button id="btnWatch">Watch</button>
          <button id="addToFavorite">
            <img src={require("../../assets/icons/whiteheart.png")} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
