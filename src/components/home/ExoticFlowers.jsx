import React, { useContext } from 'react'
import data from '../../data/data'
import SingleProduct from '../SingleProduct'
import { ProductContext } from '../../context/ProductContext'
import { useTranslation } from 'react-i18next'

const ExoticFlowers = () => {
  const { t, i18n } = useTranslation();
  // const [data] = useContext(ProductContext)
  return (
    <>
      <div className="exoticflowers py-4">
        <div className="row ms-5 me-4 ">
        <div className="col-12 col-sm-12 col-md-12">
        <h2 className='my-5'>{t("exotic.0")}</h2>
        </div>
            {data.slice(0, 4).map((item) => (
              <SingleProduct
              alldata={item} key={item.id} id={item.id} title={item.title} img={item.images} price={item.price} rating={item.rating} desc={item.description} previousPrice={item.previousPrice}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default ExoticFlowers