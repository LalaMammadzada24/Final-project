import React from 'react'
import { Link } from 'react-router-dom'
import { useWishlist } from 'react-use-wishlist'
import { useCart } from 'react-use-cart'
import slug from 'react-slugify'
import Rating from '../components/Rating'
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';

const WishList = () => {
  const {items,isWishlistEmpty,removeWishlistItem} =useWishlist();
  const {addItem} = useCart();
  const {t} = useTranslation();

  return (

    isWishlistEmpty?<div className='empty-wishlist'>
    <h2 className='ms-5 pt-3'>{t("wishlist.4")}</h2>
    <div className="col-12 col-sm-12 col-md-12">
    <div className='d-flex align-items-center justify-content-center flex-column py-3'>
        <img src="https://freddysjewelry.com/assets/images/empty-wishlist.png" alt="err" />
        <h3>{t("wishlist.0")}</h3>
        <div className='text-center'>
        <p className='mb-1 mt-2'>{t("wishlist.1")}</p>
        <p >{t("wishlist.2")}</p>
        </div>
        <Link to="/shop"><button className='btn rounded-0'>{t("wishlist.3")}</button></Link>
    </div>
    </div>
    </div>:
    <>
        <div className="wishlist">
        <div className='row g-4 ms-5 me-5'>
          <h1 className='col-12 col-sm-12 col-md-12 pt-3'>{t("wishlist.4")}</h1>
          <h4>{t("wishlist.5")}</h4>
          {items.map(item=>(
             <div className="col-12 col-sm-6 col-md-4">
              <p onClick={() => {removeWishlistItem(item.id)
                swal({
                  title: "",
                  text: "Product Removed",
                  icon: "success",
                  timer: 1400,
                });
              }} className='remove-btn'><i class="fa-solid fa-xmark me-2"></i>{t("wishlist.6")}</p>
             <div className="card rounded-0 border-0" >
              <Link to={`/shop/${slug(item.title)}`}><div className='img-box'><img style={{objectFit:'contain'}} src={item.images[0]} className="card-img-top rounded-0" alt={item.title} /></div></Link>
               <div className="card-body">
                 <h5 className="card-title text-center">{item.title}</h5>
                 <div className='text-center'><Rating value={item.rating} color={"#EABE12"}/></div>
                 <p className="card-text text-center my-1 mb-2"><del className='me-1'>${item.previousPrice}</del>${item.price}</p>
                 <Link onClick={()=>{localStorage.getItem('login') === 'true' ?
                 swal({
                  title: "Good Job!",
                  text: "Added to Cart",
                  icon: "success",
                  timer: 1400,
                }) && addItem(alldata)  :
                navigate('/login') 
                 }} className='text-decoration-none'><button className="d-flex justify-content-center align-items-center mx-auto">{t("wishlist.7")}</button></Link>
               </div>
             </div>
           </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default WishList