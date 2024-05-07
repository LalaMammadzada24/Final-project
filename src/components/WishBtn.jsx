import React from 'react'
import { useWishlist } from 'react-use-wishlist'

const WishBtn = ({id,alldata}) => {
    const {addWishlistItem,removeWishlistItem,inWishlist} = useWishlist();
    const toggleWish = (myProduct)=>{
       if (inWishlist(myProduct.id)) {
        removeWishlistItem(myProduct.id)
       }else{
        addWishlistItem(myProduct)
       }
    }
  return (
    <>
    <button className='border-0' onClick={()=>toggleWish(alldata)}>
        {inWishlist(alldata && id)?
        <i className="fa-solid fa-heart"></i>
        :<i className="fa-regular fa-heart "></i>}
    </button>
    </>
  )
}

export default WishBtn