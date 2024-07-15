import React, { useContext, useState } from 'react'
import { SlMagnifier } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import { ModeContext } from '../../context/ModeContext';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
const Header = () => {
  const toggleLang =(lang)=>{
     i18n.changeLanguage(lang);
  } 
  const {t} = useTranslation();
  const { totalItems } = useCart();
  const {totalWishlistItems} = useWishlist();
  const [mode, setMode] = useContext(ModeContext);
  let name = JSON.parse(localStorage.getItem("activeUser"))

  return (
    <>
      <nav className="navbar navbar-expand-lg pb-0 " >
        <div className="woodmarthead container-fluid">
          <div className="d-flex">
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars fs-4"></i>
          </button>
          <div className="navbar-brand text-start ms-5"><img src="https://poloandtweed.com/wp-content/uploads/2022/12/flora_last.png" alt="err" /></div>
          </div>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/" onClick={() => document.getElementById("navbarSupportedContent").classList.remove("show")}>{t("navbar.0")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/shop" role="button" aria-expanded="false" onClick={() => document.getElementById("navbarSupportedContent").classList.remove("show")}>
                {t("navbar.1")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/blog" onClick={() => document.getElementById("navbarSupportedContent").classList.remove("show")}>{t("navbar.2")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about" onClick={() => document.getElementById("navbarSupportedContent").classList.remove("show")}>{t("navbar.3")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/contact" onClick={() => document.getElementById("navbarSupportedContent").classList.remove("show")}>{t("navbar.4")}</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                {localStorage.getItem('login') === 'true' ?
                  <div> <Link className='nav-link' to="/useraccount"><i class="fa-regular fa-user me-1"></i>Hi,{localStorage.getItem('email') === 'lala@admin.com' ? 'admin' : name.fullname}</Link></div> :
                  <div><NavLink className="nav-link active" to="/login" onClick={() => document.getElementById("navbarSupportedContent").classList.remove("show")}>{t("navbar.5")}</NavLink></div>}
              </li>
              <li className="nav-item">
                <Link to={localStorage.getItem('login') === "true" ? "/wishlist" : "/login"} type="button" className="btn position-relative" onClick={() => document.getElementById("navbarSupportedContent").classList.remove("show")}>
                <IoMdHeartEmpty />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    {localStorage.getItem('login') === 'true' ? totalWishlistItems : 0}
                  </span>
                </Link>
              </li>
              <li className="nav-item ps-2">
                <NavLink to="/shop" className="nav-link active" aria-disabled="true" onClick={() => document.getElementById("navbarSupportedContent").classList.remove("show")}><SlMagnifier /></NavLink>
              </li>
              <li className="nav-item mx-1">
                <Link to={localStorage.getItem('login') === "true" ? "/cart" : "/login"} type="button" className="btn position-relative" onClick={() => document.getElementById("navbarSupportedContent").classList.remove("show")}>
                  <BsCart2 />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    {localStorage.getItem('login') === 'true' ? totalItems : 0}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <button className='ms-1 p-2' onClick={() => {
                  mode === "light" ? setMode('dark') : setMode('light')
                  mode === "light" ? localStorage.setItem('mode', 'dark') : localStorage.setItem('mode', 'light')
                }}>{mode == 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}</button>
              </li>
              <li className="nav-item mt-1">
                <Select
              defaultValue="lang"
              style={{
                width: 65,
              }}
              onChange={toggleLang}
              options={[
                {
                  value: "en",
                  label: "En",
                },
                {
                  value: "az",
                  label: "Az",
                },
              ]}
            />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header