import React from 'react'
import { useWishlist } from 'react-use-wishlist'
import swal from 'sweetalert';

const WishBtn = ({id,alldata}) => {
    const {addWishlistItem,removeWishlistItem,inWishlist} = useWishlist();
    const toggleWish = (myProduct)=>{
       if (inWishlist(myProduct.id)) {
        removeWishlistItem(myProduct.id)
        if (localStorage.getItem("login") === "true") {
          swal({
            title: "",
            text: "Product Removed",
            icon: "success",
            timer: 1400,
          });
        }
       }else{
        addWishlistItem(myProduct)
        if (localStorage.getItem("login") === "true") {
          swal({
            title: "Good Job!",
            text: "Product Added to Wishlist",
            icon: "success",
            timer: 1400,
          });
        }
       }
    }
  return (
    <>
    <button className='wishbuton border-0' onClick={()=>{
      if (localStorage.getItem("login") === "true") {
        toggleWish(alldata)
      }else{
        window.location.assign("/login");
      }
     }}>
        {inWishlist(alldata && id)?
        <i className="fa-solid fa-heart"></i>
        :<i className="fa-regular fa-heart "></i>}
    </button>
    </>
  )
}

export default WishBtn