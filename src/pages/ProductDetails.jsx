import React, { useContext, useEffect, useState } from 'react'
import data from '../data/data'
import { Link, useNavigate, useParams } from 'react-router-dom';
import slug from "react-slugify";
import { ProductContext } from '../context/ProductContext';
import { useCart } from 'react-use-cart'
import WishBtn from '../components/WishBtn';
import { useWishlist } from 'react-use-wishlist'

const ProductDetails = () => {
    const {addItem } = useCart();
    const navigate =useNavigate();
    const {inWishlist} =useWishlist();
    // const [data] = useContext(ProductContext)
    const { url } = useParams();
    const detailsData = data.filter(p => slug(p.title) == url)

    return (
        <>
            {data.length === 0 ? <h1>Loading...</h1> :
                <div className="productdetails">
                    <div className="col-xxl-12 px-5 py-4">
                        <div className="row flex-lg-row align-items-start g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-7">
                                <div id="carouselExample" className="carousel slide">
                                    <div className="carousel-inner">
                                        {detailsData[0].images.map((item, c) => (
                                            <div className={`carousel-item ${c === 0 ? "active" : ""}`}>
                                                <img  style={{ objectFit: "cover" }} src={item} className="d-block w-100" alt="..." />
                                            </div>
                                        ))}
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="textbox">
                                    <h2 className="display-5 fw-bold lh-1 mb-3">{detailsData[0].title}</h2>
                                    <div className='my-4'><del>${detailsData[0].previousPrice}</del><span className='ms-1'>${detailsData[0].price}</span></div>
                                    <p className="detail">Details:</p>
                                    <p className="desc mb-4">{detailsData[0].description}</p>
                                </div>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                                        <button onClick={()=>{localStorage.getItem('login')==='true'?addItem(detailsData[0]):navigate('/login')}}  className="btn btn-lg w-100 me-md-2 rounded-0">Add to cart</button>
                                    <Link to="/shop" className="btn btn-lg px-4 rounded-0">Back</Link>
                                </div>
                                <div className='wishbox d-flex justify-content-between mt-4'>
                                <div><WishBtn id={detailsData[0].id} alldata={detailsData[0]}/> <span className='ms-1'>{inWishlist(detailsData[0].id)? "Added to wishlist": "Add to wishlist"}</span></div>
                                   <div className='social-media'>Share:<i class="fa-brands fa-facebook-f mx-1 ms-3"></i><i class="fa-brands fa-x-twitter mx-1"></i><i class="fa-brands fa-linkedin-in mx-1"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductDetails