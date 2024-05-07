import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };
  return (
    <>
      <div className="slider p-5">
        <div className="row g-5">
          <div className="category-box col-12 col-sm-6 col-md-3 d-flex flex-column justify-content-center ">
            <div className="category my-3">Plants <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/arrow.svg" alt="err" /></div>
            <div className="category my-3">Planters <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/arrow.svg" alt="err" /></div>
            <div className="category my-3">Plant care <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/arrow.svg" alt="err" /></div>
            <div className="category my-3">Gift ideas <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/arrow.svg" alt="err" /></div>
            <div className="category my-3">Pet friendly <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/arrow.svg" alt="err" /></div>
          </div>
          <div className="col-12 col-sm-6 col-md-9 slider-box-two">
          <Slider {...settings}>
          <div>
            <div className="sliderfirst px-4 py-5 my-1 d-flex flex-column justify-content-end">
              <h1 className="col-lg-7 display-5 fw-bold ms-2">A large selection of plants, fertilizers and accessories.</h1>
              <div className="box col-lg-5 ms-2">
                <p className="mb-4">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                <div className="box gap-2 d-sm-flex justify-content-sm-start flex-wrap">
                 <img className="avatars" src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/Avatars.png" alt="err" /><p className="my-auto">Rated 4.9 / 5 based on <u>374 reviews</u> </p> <img className="trustpilot" src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/logo-white.svg" alt="err" />
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="slidersecond px-4 py-5 my-1 d-flex flex-column justify-content-end">
              <h1 className="col-lg-7 display-5 fw-bold ms-2 my-3">Come for the plants, stay for the service plants.</h1>
              <div className="box col-lg-5 ms-2">
                <p className="mb-4">We believe plants and people belong together, but we know that city life sometimes keeps us apart. That’s why we set out to reconnect people.</p>
                <div className="gap-2 d-sm-flex justify-content-sm-start flex-wrap">
                <Link to="/shop"><button className="rounded-0 border-0">Shop all</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="sliderthird px-4 py-5 my-1 d-flex flex-column justify-content-end">
              <h1 className="col-lg-7 display-5 fw-bold ms-2 my-3">We value fairness and strive for simple products.</h1>
              <div className="box col-lg-5 ms-2">
                <p className="mb-4">Specially designed for shipping delicate living plants, our innovative packaging ensures maximum protection during transit and results.</p>
                <div className="gap-2 d-sm-flex justify-content-sm-start flex-wrap">
                <Link to="/shop"><button className="rounded-0 border-0">Shop all</button></Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
