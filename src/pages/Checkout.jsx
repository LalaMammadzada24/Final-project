import React from 'react'
import { useCart } from 'react-use-cart';

const Checkout = () => {
    const { items, updateItemQuantity, removeItem, isEmpty, cartTotal, emptyCart } = useCart();
    return (
        <>
            <div className="checkout">
                <div className="row ms-5 me-5 g-5 pt-4">
                    <div className="col-12 col-sm-12 col-md-6 p-3">
                        <h4 className='pb-4'>Billing details</h4>
                        <form>
                            <div className='row g-2 mt-0'>
                                <div className="mb-3 col-6 col-sm-6 col-md-6">
                                    <label htmlFor="firstname" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstname" />
                                </div>
                                <div className="mb-3 col-6 col-sm-6 col-md-6">
                                    <label htmlFor="lastname" className="form-label">Last name </label>
                                    <input type="text" className="form-control" id="lastname" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="company" className="form-label">Company name (optional)</label>
                                <input type="text" className="form-control" id="company" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">Country / Region *</label>
                                <input type="text" className="form-control" id="country" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="street" className="form-label">Street address *</label>
                                <input type="text" className="form-control" id="street" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">Town / City *</label>
                                <input type="text" className="form-control" id="city" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="state" className="form-label">State *</label>
                                <input type="text" className="form-control" id="state" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="zip" className="form-label">ZIP Code *</label>
                                <input type="tel" className="form-control" id="zip" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone *</label>
                                <input type="tel" className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address *</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>
                        </form>

                    </div>
                    <div className="checkoutbox col-12 col-sm-12 col-md-6 p-3 px-4 ">
                        <h4 className='pb-4'>Your order</h4>
                        <div className='d-flex justify-content-between align-items-center mt-4 px-1 boxborder'><p className='title mb-3'>PRODUCT</p><p className='title mb-2 subtitle'>SUBTOTAL</p></div>
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
                        <div className='d-flex justify-content-between align-items-center boxborder pt-3 px-1'><p className='title'>Subtotal</p><p className='subtotal'>${cartTotal}</p></div>
                        <div className='d-flex justify-content-between align-items-center py-3 boxborder px-1'><p className='title'>Shipping</p>
                            <div className='text-end'>
                                <div className="form-check my-2">
                                    <label className="title" htmlFor="flexRadioDefault1">
                                        Flat rate
                                    </label>
                                    <input className="ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                </div>
                                <div className="form-check my-2">
                                    <label className="title" htmlFor="flexRadioDefault2">
                                        Free shipping
                                    </label>
                                    <input className="ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                </div>
                                <div className="form-check">
                                    <label className="title" htmlFor="flexRadioDefault3">
                                        Local pickup
                                    </label>
                                    <input className="ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center pt-3 px-1'><p className='total-title'>Total</p><p className='total'>${cartTotal}</p></div>
                        <h4 className='mt-4 pb-3'>Payment information</h4>
                        <div className='text-start boxborder'>
                                <div className="form-check my-3 p-0">
                                    <input  type="radio" name="flexRadioDefault1" id="flexRadioDefault4" defaultChecked />
                                    <label className="title ps-2" htmlFor="flexRadioDefault4">
                                    Direct bank transfer
                                    </label>
                                </div>
                                <div className="form-check my-3 p-0">
                                    <input  type="radio" name="flexRadioDefault1" id="flexRadioDefault5" />
                                    <label className="title ps-2" htmlFor="flexRadioDefault5">
                                    Check payments
                                    </label>
                                </div>
                                <div className="form-check p-0 mb-3">
                                    <input  type="radio" name="flexRadioDefault1" id="flexRadioDefault6" />
                                    <label className="title ps-2" htmlFor="flexRadioDefault6">
                                    Cash on delivery
                                    </label>
                                </div>
                            </div>
                            <button className='btn rounded-0 col-12 col-sm-12 col-md-12 mt-4'>Place order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout