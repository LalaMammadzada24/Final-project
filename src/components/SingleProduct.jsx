import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import slug from 'react-slugify'
import { useCart } from 'react-use-cart'
import { BsCart2 } from "react-icons/bs";
import WishBtn from './WishBtn';
import Rating from './Rating';
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';


const SingleProduct = ({ id, title, img, price, previousPrice, rating, alldata }) => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card rounded-0 border-0" >
          <div className='img-box'><img style={{ objectFit: 'contain' }} src={img[0]} className="card-img-top rounded-0" alt={title} /></div>
          <div className='hover-button d-flex flex-column'>
            <WishBtn id={id} alldata={alldata} />
            <button onClick={() => {
              localStorage.getItem('login') === 'true' ?
                 swal({
                  title: "Good Job!",
                  text: "Added to Cart",
                  icon: "success",
                  timer: 1400,
                }) && addItem(alldata)  :
                navigate('/login')
            }} className="d-flex justify-content-center align-items-center mx-auto mt-1">< BsCart2 className='bg-white fs-5' /></button>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
            <div className='text-center'><Rating value={rating} /></div>
            <p className="card-text text-center my-1 mb-2"><del className='me-1'>${previousPrice}</del>${price}</p>
            <Link to={`/shop/${slug(title)}`} className='text-decoration-none'><button className="d-flex justify-content-center align-items-center mx-auto"> {t("singleproduct.0")}</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct