import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SimpleSlider() {
  const { t } = useTranslation();

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
          <div className="category-box col-12 col-sm-6 col-md-3 d-flex flex-column justify-content-center " >
            <div className=" my-3"><Link to="/shop" className="text-decoration-none category">{t("home.0")}</Link> <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/arrow.svg" alt="err" /></div>
            <div className="category my-3"><Link to="/shop" className="text-decoration-none category">{t("home.1")}</Link> <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/arrow.svg" alt="err" /></div>
            <div className="category my-3"><Link to="/shop" className="text-decoration-none category">{t("home.2")}</Link> <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/arrow.svg" alt="err" /></div>
            <div className="category my-3"><Link to="/shop" className="text-decoration-none category">{t("home.3")}</Link> <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/arrow.svg" alt="err" /></div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 slider-box-two" >
          <Slider {...settings}>
          <div>
            <div className="sliderfirst px-4 py-5 my-1 d-flex flex-column justify-content-end">
              <h1 className="col-lg-7 display-5 fw-bold ms-2">{t("home.4")}</h1>
              <div className="box col-lg-9 ms-2">
                <p className="mb-4">{t("home.5")}</p>
                <div className="box gap-2 d-sm-flex justify-content-sm-start flex-wrap">
                 <img className="avatars" src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/Avatars.png" alt="err" /><p className="my-auto">{t("home.6")}<u>{t("home.7")}</u> </p> <img className="trustpilot" src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/logo-white.svg" alt="err" />
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="slidersecond px-4 py-5 my-1 d-flex flex-column justify-content-end">
              <h1 className="col-lg-7 display-5 fw-bold ms-2 my-3">{t("home.8")}</h1>
              <div className="box col-lg-9 ms-2">
                <p className="mb-4">{t("home.9")}</p>
                <div className="gap-2 d-sm-flex justify-content-sm-start flex-wrap">
                <Link to="/shop"><button className="rounded-0 border-0">{t("home.10")}</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="sliderthird px-4 py-5 my-1 d-flex flex-column justify-content-end">
              <h1 className="col-lg-7 display-5 fw-bold ms-2 my-3">{t("home.11")}</h1>
              <div className="box col-lg-9 ms-2">
                <p className="mb-4">{t("home.12")}</p>
                <div className="gap-2 d-sm-flex justify-content-sm-start flex-wrap">
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
