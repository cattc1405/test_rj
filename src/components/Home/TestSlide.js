import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideVertical = () => {
  const settings = {
    dots: true,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true, // Chuyển cảnh theo chiều dọc
    verticalSwiping: true, // Cho phép vuốt theo chiều dọc
    swipeToSlide: true, // Cho phép chuyển slide bằng cách vuốt
    autoplay: true, // Tự động chuyển slide
    autoplaySpeed: 1000, // Tốc độ chuyển slide (miliseconds)
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
        <img src={require("../../assets/images/bannerFilm.jpg")} />
      </div>
      <div>
        <h3>Slide 2</h3>
        <img src={require("../../assets/images/film1.jpg")} />
      </div>
      <div>
        <h3>Slide 3</h3>
        <img src={require("../../assets/images/bannerFilm.jpg")} /> 
      </div>
    </Slider>
  );
};

export default function TestSlide() {
  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <SlideVertical />
    </div>
  );
}
