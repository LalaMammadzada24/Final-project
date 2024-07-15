import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation();

  return (
    <div className='footer'>
      <div className="mx-5">
        <footer className="pt-5">
          <div className="row footer-top">
          <div className="footerfirstcolumn col-md-6 col-lg-4 mb-3 ">
            <img src="https://poloandtweed.com/wp-content/uploads/2022/12/flora_last.png" alt="err" />
              <form>
                <h5>{t("footer.0")}</h5>
                <div className="d-flex flex-sm-row w-100 gap-2">
                  <input id="newsletter1" type="text" className="form-control rounded-0" placeholder={t("footer.14")} />
                  <button className="btn rounded-0" type="button">{t("footer.1")}</button>
                </div>
                <p className='footer-text mt-3 mb-5'>{t("footer.2")}</p>
              </form>
                <span><FaFacebookF /></span>
                <span><FaXTwitter /></span>
                <span><FaLinkedinIn /></span>
            </div>
            <div className="footersecondcol col-6 col-md-4 col-lg-2 mb-3 mt-2 me-3">
              <h5 className='listtitle mb-3'>{t("footer.3")}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/shop" className="nav-link p-0">{t("footer.4")}</Link></li>
                <li className="nav-item mb-2"><Link to="/shop" className="nav-link p-0">{t("footer.5")}</Link></li>
                <li className="nav-item mb-2"><Link to="/shop" className="nav-link p-0">{t("footer.6")}</Link></li>
                <li className="nav-item mb-2"><Link to="/shop" className="nav-link p-0">{t("footer.7")}</Link></li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3 mt-2 me-3">
              <h5 className='listtitle mb-3'>{t("footer.8")}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0">{t("footer.9")}</Link></li>
                <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0">{t("footer.10")}</Link></li>
                <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0">{t("footer.11")}</Link></li>
                <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0">FAQ</Link></li>
              </ul>
            </div>
            <div className="col-6 col-md-3 mb-3 mt-2">
              <h5 className='listtitle mb-3'>{t("footer.12")}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">wood.plants@gmail.com</li>
                <li className="nav-item mb-2">(064) 332-1233</li>
                <li className="nav-item mb-2">20 Auburn Ave NE, Atlanta,USA</li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between pt-3">
            <p>{t("footer.13")}</p>
            <img className='pb-3' src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/payments.png" alt="err" />
            
          </div>
        </footer>
      </div>

    </div>
  )
}

export default Footer