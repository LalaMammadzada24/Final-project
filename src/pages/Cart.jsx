import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';

const Cart = () => {
    const { items, updateItemQuantity, removeItem, isEmpty, cartTotal, emptyCart } = useCart();
    const {t} = useTranslation();

    return (

        isEmpty ? <div className='empty-cart d-flex align-items-center justify-content-center flex-column py-3'><img src="https://www.dvnjewelry.com/images/cart-empty.png" alt="err" /><p className='mt-3'>{t("cart.13")}</p></div> :
            <>
                <div className="cart">
                    <div className="row pe-5 ps-5 pt-3 g-3">
                        <h2 >{t("cart.0")}</h2>
                        <div className="col-12 col-sm-12 col-md-8">
                            <table className="table">
                                <thead>
                                    <tr >
                                        <th ></th>
                                        <th ></th>
                                        <th>{t("cart.1")}</th>
                                        <th >{t("cart.2")}</th>
                                        <th className='text-center'>{t("cart.3")}</th>
                                        <th className='text-center'>{t("cart.4")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item) => (
                                        <tr>
                                            <td width={20} ><button onClick={() => {removeItem(item.id)
                                                swal({
                                                    title: "",
                                                    text: "Product Removed",
                                                    icon: "success",
                                                    timer: 1400,
                                                  });
                                            }} className='danger btn deletebutton rounded-0 mt-4'><i class="fa-solid fa-xmark"></i></button></td>
                                            <td width={50}><img width={70} src={item.images[0]} alt={item.title} /></td>
                                            <td width={300} className='tabletitle'>{item.title}</td>
                                            <td width={30} className='tableprice'>${item.price}</td>
                                            <td width={40} className='counttable'>
                                                <div className='countbox d-flex justify-content-center align-items-center'>
                                                    <button className='btn rounded-0' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                                    <span className='mx-2'>{item.quantity}</span>
                                                    <button className='btn rounded-0' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                                </div>
                                            </td>
                                            <td className='subtotaltable text-center'>{item.price * item.quantity}$</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {items.map((item) => (
                                <div className="card mb-3 border-0 rounded-0" >
                                    <div className="row g-0 border-bottom">
                                        <div className="col-3 col-sm-3 col-md-4">
                                            <img src={item.images[0]} width={70} className="img-fluid rounded-0" alt="..." />
                                        </div>
                                        <div className="col-9 col-sm-9 col-md-8">
                                            <div >
                                                <div className='d-flex justify-content-between align-items-center'><p className="cart-title my-auto">{item.title}</p><button onClick={() => {removeItem(item.id)
                                                    swal({
                                                        title: "",
                                                        text: "Product Removed",
                                                        icon: "success",
                                                        timer: 1400,
                                                      });
                                                }} className='btn deletebutton rounded-0'><i class="fa-solid fa-xmark"></i></button></div>
                                                <div className='d-flex justify-content-between align-items-center border-bottom'><p className="cart-title my-auto">{t("cart.2")}</p><p className='cart-price mb-1'>${item.price}</p></div>
                                                <div className='d-flex justify-content-between align-items-center border-bottom py-1'><p className="cart-title my-auto">{t("cart.3")}</p>
                                                    <div className='countbox d-flex justify-content-center align-items-center'>
                                                        <button className='btn rounded-0' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                                        <span className='mx-2'>{item.quantity}</span>
                                                        <button className='btn rounded-0' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                                    </div></div>
                                                <div className='d-flex justify-content-between align-items-center py-1'><p className="cart-title">{t("cart.4")}</p><p className='card-subtotal'>{item.price * item.quantity}$</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
                            <button className='btn rounded-0 mt-3' onClick={() => {
                                emptyCart(); swal({
                                    title: "",
                                    text: "Cart has been emptied",
                                    icon: "success",
                                    timer: 1700,
                                });
                            }}>{t("cart.5")}</button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <div className='cart-con p-4'>
                                <h3 className='mb-4'>{t("cart.6")}</h3>
                                <div className='d-flex justify-content-between align-items-center'><p className='cart-title'>{t("cart.4")}</p><p className='cart-subtotal'>${cartTotal}</p></div>
                                <div className='d-flex justify-content-between align-items-center py-3'><p className='cart-title'>{t("cart.7")}</p>
                                    <div className='text-end'>
                                        <div className="form-check my-2">
                                            <label className="" htmlFor="flexRadioDefault1">
                                            {t("cart.8")}
                                            </label>
                                            <input className="ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                        </div>
                                        <div className="form-check my-2">
                                            <label className="" htmlFor="flexRadioDefault2">
                                            {t("cart.9")}
                                            </label>
                                            <input className="ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        </div>
                                        <div className="form-check">
                                            <label className="" htmlFor="flexRadioDefault3">
                                            {t("cart.10")}
                                            </label>
                                            <input className="ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between align-items-center border-0 py-3 px-2'><p className='total-box'>{t("cart.11")}</p><p className='cart-total'>${cartTotal}</p></div>
                                <Link to="/checkout"><button className='col-12 col-sm-12 col-md-12 btn rounded-0 py-2'>{t("cart.12")}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Cart