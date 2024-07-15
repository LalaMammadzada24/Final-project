import React from 'react'
import { useCart } from 'react-use-cart'
import { useTranslation } from 'react-i18next';
import data from '../data/data'
import SingleProduct from '../components/SingleProduct';

const ThankYou = () => {
    const { items, cartTotal } = useCart();
    const { t } = useTranslation();

    return (
        <>
            <div className="thankyou">
                <div className="row mx-auto">
                    <div className="col-7 mx-auto py-5">
                        <h1 >{t("thankyou.0")}</h1>
                        <h5 className='my-4 text-center'>{t("thankyou.1")}</h5>
                        <div className="row exoticflowers">
                                {data.slice(0, 8).map((item) => (
                                    <SingleProduct
                                        alldata={item} key={item.id} id={item.id} title={item.title} img={item.images} price={item.price} rating={item.rating} desc={item.description} previousPrice={item.previousPrice}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou