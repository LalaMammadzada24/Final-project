import React from "react";
import Slider from "react-slick";

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container ms-5 me-5 pb-4">
      <Slider {...settings}>
        <div className="col-12 col-sm-6 col-md-4">
        <div className="p-2">
          <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-gallery-1.jpg.webp" alt="err" />
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
        <div className="p-2">
          <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-gallery-2.jpg.webp" alt="err" />
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
        <div className="p-2">
          <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-gallery-3.jpg.webp" alt="err" />
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
        <div className="p-2">
          <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-gallery-4.jpg.webp" alt="err" />
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6">
        <div className="p-2">
          <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-gallery-5.jpg.webp" alt="err" />
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
        <div className="p-2">
          <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-gallery-6.jpg.webp" alt="err" />
        </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
