import React, { useContext } from 'react'
import { SlMagnifier } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import { ModeContext } from '../../context/ModeContext';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
const Header = () => {
  const { totalItems } = useCart();
  const {totalWishlistItems} = useWishlist();
  const [mode, setMode] = useContext(ModeContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg pb-0">
        <div className="woodmarthead container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-brand text-center"><img className='w-75' src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/woodmart-plant-store-logo.svg" alt="err" /></div>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/shop" role="button" aria-expanded="false">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/contact">Contact us</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                {localStorage.getItem('login') === 'true' ?
                  <div> <Link className='nav-link' to="/useraccount">{localStorage.getItem("fullname")}</Link></div> :
                  <div><NavLink className="nav-link active" to="/login">Login / Register</NavLink></div>}
              </li>
              <li className="nav-item">
                <NavLink to="/wishlist" className="nav-link active position-relative mx-1" aria-disabled="true"><IoMdHeartEmpty />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    {localStorage.getItem('login') === 'true' ? totalWishlistItems : 0}
                  </span>
                  </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className="nav-link active" aria-disabled="true"><SlMagnifier /></NavLink>
              </li>
              <li className="nav-item mx-1">
                <Link to={localStorage.getItem('login') === "true" ? "/cart" : "/login"} type="button" className="btn position-relative">
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
            </ul>
          </div>

        </div>

      </nav>




    </>
  )
}

export default Header