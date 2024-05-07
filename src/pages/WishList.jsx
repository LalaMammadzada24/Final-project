import React from 'react'
import { Link } from 'react-router-dom'
import { useWishlist } from 'react-use-wishlist'
import { useCart } from 'react-use-cart'
import slug from 'react-slugify'
const WishList = () => {
  const {items,isWishlistEmpty,removeWishlistItem} =useWishlist();
  const {addItem} = useCart();
  return (

    isWishlistEmpty?<div className='empty-wishlist'>
    <h2 className='ms-5 pt-3'>Wishlist</h2>
    <div className="col-12 col-sm-12 col-md-12">
    <div className='d-flex align-items-center justify-content-center flex-column py-3'>
        <img src="https://freddysjewelry.com/assets/images/empty-wishlist.png" alt="err" />
        <h3>This wishlist is empty</h3>
        <div className='text-center'>
        <p className='mb-1 mt-2'>You don't have any products in the wishlist.</p>
        <p className=''>You will find a lot of interesting products on our "Shop" page.</p>
        </div>
        <Link to="/shop"><button className='btn rounded-0'>Return to shop</button></Link>
    </div>
    </div>
    </div>:
    <>
        
        <div className="wishlist">
        <div className='row g-4 ms-5 me-5'>
          <h1 className='col-12 col-sm-12 col-md-12 pt-3'>Wishlist</h1>
          <h4>YOUR PRODUCTS WISHLIST</h4>
          {items.map(item=>(
             <div className="col-12 col-sm-6 col-md-4">
              <p onClick={() => removeWishlistItem(item.id)} className='remove-btn'><i class="fa-solid fa-xmark me-2"></i>Remove</p>
             <div className="card rounded-0 border-0" >
              <Link to={`/shop/${slug(item.title)}`}><div className='img-box'><img style={{objectFit:'contain'}} src={item.images[0]} className="card-img-top rounded-0" alt={item.title} /></div></Link>
               <div className="card-body">
                 <h5 className="card-title text-center">{item.title}</h5>
                 <div className='text-center'><i className="fa-solid fa-star" /><i className="fa-solid fa-star"/><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /></div>
                 <p className="card-text text-center my-1 mb-2"><del className='me-1'>${item.previousPrice}</del>${item.price}</p>
                 <Link onClick={()=>{localStorage.getItem('login')==='true'?addItem(item):navigate('/login')}} className='text-decoration-none'><button className="d-flex justify-content-center align-items-center mx-auto">Add to Cart</button></Link>
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