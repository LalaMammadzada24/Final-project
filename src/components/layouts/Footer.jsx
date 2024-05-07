import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="mx-5">
        <footer className="pt-5">
          <div className="row footer-top">
          <div className="footerfirstcolumn col-md-4  mb-3 ">
            <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/woodmart-plant-store-logo.svg" alt="err" />
              <form>
                <h5>Join our newsletter to stay up to date on features and releases.</h5>
                <div className="d-flex flex-sm-row w-100 gap-2">
                  <input id="newsletter1" type="text" className="form-control rounded-0" placeholder="Your email address" />
                  <button className="btn rounded-0" type="button">Sign up</button>
                </div>
                <p className='footer-text mt-3 mb-5'>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
              </form>
                <span><FaFacebookF /></span>
                <span><FaXTwitter /></span>
                <span><FaLinkedinIn /></span>
            </div>
            <div className="footersecondcol col-6 col-md-2 mb-3 mt-2 me-3">
              <h5 className='listtitle mb-3'>Shop</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Plants</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Planters</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Plant care</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Gift ideas</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Pet friendly</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3 mt-2 me-3">
              <h5 className='listtitle mb-3'>Useful links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Blog</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Care library</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Contact us</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">About us</a></li>
                <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0">FAQ</Link></li>
              </ul>
            </div>
            <div className="col-6 col-md-3 mb-3 mt-2">
              <h5 className='listtitle mb-3'>Contacts</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">wood.plants@gmail.com</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">(064) 332-1233</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">20 Auburn Ave NE, Atlanta,USA</a></li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between pt-3">
            <p>© 2024 Company, Inc. All rights reserved.</p>
            <img className='pb-3' src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/payments.png" alt="err" />
            
          </div>
        </footer>
      </div>

    </div>
  )
}

export default Footer