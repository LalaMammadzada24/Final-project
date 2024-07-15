import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';

const Checkout = () => {
    const { items, updateItemQuantity, removeItem, cartTotal,setItems } = useCart();
    const handleSubmit =()=>{
        swal({
            title: "Good Job!",
            text: "Process is successful",
            icon: "success",
            timer: 1400,
        });
        setItems([])
    }
  const {t} = useTranslation();

    return (
        <>
            <div className="checkout">
                <div className="row ms-5 me-5 g-5 pt-4">
                    <div className="col-12 col-sm-12 col-lg-6 p-3">
                        <h4 className='pb-4'>{t("checkout.0")}</h4>
                        <form>
                            <div className='row g-2 mt-0'>
                                <div className="mb-3 col-6 col-sm-6 col-md-6">
                                    <label htmlFor="firstname" className="form-label">{t("checkout.1")}</label>
                                    <input type="text" className="form-control" id="firstname" />
                                </div>
                                <div className="mb-3 col-6 col-sm-6 col-md-6">
                                    <label htmlFor="lastname" className="form-label">{t("checkout.2")}</label>
                                    <input type="text" className="form-control" id="lastname" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="company" className="form-label">{t("checkout.3")}</label>
                                <input type="text" className="form-control" id="company" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">{t("checkout.4")}</label>
                                <input type="text" className="form-control" id="country" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="street" className="form-label">{t("checkout.5")}</label>
                                <input type="text" className="form-control" id="street" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">{t("checkout.6")}</label>
                                <input type="text" className="form-control" id="city" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="state" className="form-label">{t("checkout.7")}</label>
                                <input type="text" className="form-control" id="state" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="zip" className="form-label">{t("checkout.8")}</label>
                                <input type="tel" className="form-control" id="zip" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">{t("checkout.9")}</label>
                                <input type="tel" className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">{t("checkout.10")}</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>
                        </form>

                    </div>
                    <div className="checkoutbox col-12 col-sm-12 col-lg-6 p-3 px-4 ">
                        <h4 className='pb-4'>{t("checkout.11")}</h4>
                        <div className='d-flex justify-content-between align-items-center mt-4 px-1 boxborder'><p className='title mb-3'>{t("checkout.12")}</p><p className='title mb-2 subtitle'>{t("checkout.13")}</p></div>
                        {items.map((item) => (
                            <div className="d-flex boxborder py-2">
                                <div className="col-1 pe-0 d-flex justify-content-center align-items-center"><button onClick={() => removeItem(item.id)} className=' deletebutton rounded-0'><i class="fa-solid fa-xmark"></i></button></div>
                                <div className="col-2 p-0"><img width={65} src={item.images[0]} alt="..." /></div>
                                <div className="col-7 d-flex flex-column justify-content-center align-items-start secondbox ">{item.title}
                                    <div className='countbox d-flex justify-content-center align-items-center'>
                                        <button className='btn rounded-0' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span className='mx-2'>{item.quantity}</span>
                                        <button className='btn rounded-0' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                <div className="d-flex justify-content-end align-items-center secondbox">{item.price * item.quantity}$</div>
                                </div>
                                <div className="col-2 d-flex justify-content-end align-items-center secondbox subtotal"><span>{item.price * item.quantity}$</span></div>
                            </div>
                        ))}
                        <div className='d-flex justify-content-between align-items-center boxborder pt-3 px-1'><p className='title'>{t("checkout.13")}</p><p className='subtotal'>${cartTotal}</p></div>
                        <div className='d-flex justify-content-between align-items-center py-3 boxborder px-1'><p className='title'>{t("checkout.14")}</p>
                            <div className='text-end'>
                                <div className="form-check my-2">
                                    <label className="title" htmlFor="flexRadioDefault1">
                                    {t("checkout.15")}
                                    </label>
                                    <input className="ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                </div>
                                <div className="form-check my-2">
                                    <label className="title" htmlFor="flexRadioDefault2">
                                    {t("checkout.16")}
                                    </label>
                                    <input className="ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                </div>
                                <div className="form-check">
                                    <label className="title" htmlFor="flexRadioDefault3">
                                    {t("checkout.17")}
                                    </label>
                                    <input className="ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center pt-3 px-1'><p className='total-title'>{t("checkout.18")}</p><p className='total'>${cartTotal}</p></div>
                        <h4 className='mt-4 pb-3'>{t("checkout.19")}</h4>
                        <div className='text-start boxborder'>
                                <div className="form-check my-3 p-0">
                                    <input  type="radio" name="flexRadioDefault1" id="flexRadioDefault4" defaultChecked />
                                    <label className="title ps-2" htmlFor="flexRadioDefault4">
                                    {t("checkout.20")}
                                    </label>
                                </div>
                                <div className="form-check my-3 p-0">
                                    <input  type="radio" name="flexRadioDefault1" id="flexRadioDefault5" />
                                    <label className="title ps-2" htmlFor="flexRadioDefault5">
                                    {t("checkout.21")}
                                    </label>
                                </div>
                                <div className="form-check p-0 mb-3">
                                    <input  type="radio" name="flexRadioDefault1" id="flexRadioDefault6" />
                                    <label className="title ps-2" htmlFor="flexRadioDefault6">
                                    {t("checkout.22")}
                                    </label>
                                </div>
                            </div>
                            <Link to="/thankyou"><button className='btn rounded-0 col-12 col-sm-12 col-md-12 mt-4' onClick= {handleSubmit}
                            >{t("checkout.23")}</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout