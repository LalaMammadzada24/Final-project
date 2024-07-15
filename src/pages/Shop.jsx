import React, {useState } from 'react'
import SingleProduct from '../components/SingleProduct'
import data from '../data/data'
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import slug from 'react-slugify';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

const Shop = () => {
  const [query, setQuery] = useState();
  const [state, setState] = useState(data);
  // const [data] = useContext(ProductContext);
  const {t} = useTranslation();
  
  const filterCategory = (ctg) => {
    if (ctg === 'all') {
      setState(data)
      return
    }
    const filteredData = data.filter(item => item.category === ctg);
    setState(filteredData)
    console.log(filteredData)
  }


  const sortProducts = (value) => {
    if (value == 'all') {
      setState(data);
      return;
    }
    else if (value == 'low-to-high') {
      let copy = [...state]
      const sortedProducts = copy.sort((a, b) => a.price - b.price);
      setState(sortedProducts);
    }
    else if (value == 'high-to-low') {
      let copy = [...state]
      const sortedProducts = copy.sort((a, b) => b.price - a.price);
      setState(sortedProducts);
    }
    else if (value == 'a-z') {
      let copy = [...state]
      const sortedProducts = copy.sort((a, b) => a.title.localeCompare(b.title));
      setState(sortedProducts);
    }
    else if (value == 'z-a') {
      let copy = [...state]
      const sortedProducts = copy.sort((a, b) => b.title.localeCompare(a.title));
      setState(sortedProducts);
    }
  }

  return (
    <>
      <div className="shop">
        <div className="px-5">
          <div className="computer-version d-flex justify-content-between pt-3">
            <h1 className="text-center"> {t("shop.0")}</h1>
            <div className='col-9 col-sm-7 col-md-4 mb-3'>
              <div className="input-group mb-1">
                <input onChange={e => setQuery(e.target.value)} type="search" className="form-control" placeholder={t("shop.1")} />
                <button className="btn" type="search" >{t("shop.2")}</button>
              </div>
              <ol className='px-3'>
                {!query ? " " : data.filter(p => p.title.toLocaleLowerCase().includes(query)).map(item => (
                  <Link className='text-decoration-none' to={`/shop/${slug(item.title)}`}><li className='my-2 w-100 mx-4 d-flex align-items-center justify-content-start'><img width={70} src={item.images[0]} alt=".." /><p className='ms-3 me-4 '>{item.title}</p></li></Link>
                ))}
              </ol>
            </div>
            <Select
              defaultValue={t("shop.3")}
              style={{
                width: 120,
              }}
              onChange={sortProducts}
              options={[
                {
                  value: 'all',
                  label: `${t("shop.3")}`,
                },
                {
                  value: 'a-z',
                  label: 'A-Z',
                },
                {
                  value: 'z-a',
                  label: 'Z-A',
                },
                {
                  value: 'low-to-high',
                  label: `${t("shop.4")}`,
                },
                {
                  value: 'high-to-low',
                  label: `${t("shop.5")}`,
                }
              ]}
            />
          </div>
          <div className="phone-version d-flex flex-column justify-content-between pt-3">
            <h1 className="text-start mb-3">{t("shop.0")}</h1>
            <div className='col-9 col-sm-7 col-md-4 mb-3'>
              <div className="input-group mb-1">
                <input onChange={e => setQuery(e.target.value)} type="search" className="form-control" placeholder={t("shop.1")} />
                <button className="btn" type="search" >{t("shop.2")}</button>
              </div>
              <ol className='px-3'>
                {!query ? " " : data.filter(p => p.title.toLocaleLowerCase().includes(query)).map(item => (
                  <Link className='text-decoration-none' to={`/shop/${slug(item.title)}`}><li className='my-2 w-100 mx-4 d-flex align-items-center justify-content-start'><img width={70} src={item.images[0]} alt=".." /><p className='ms-3 me-4 '>{item.title}</p></li></Link>
                ))}
              </ol>
            </div>
            <Select className='mb-3'
              defaultValue={t("shop.3")}
              style={{
                width: 120,
              }}
              onChange={sortProducts}
              options={[
                {
                  value: 'all',
                  label: `${t("shop.3")}`,
                },
                {
                  value: 'a-z',
                  label: 'A-Z',
                },
                {
                  value: 'z-a',
                  label: 'Z-A',
                },
                {
                  value: 'low-to-high',
                  label: `${t("shop.4")}`,
                },
                {
                  value: 'high-to-low',
                  label: `${t("shop.5")}`,
                }
              ]}
            />
          </div>

          <div className="shopcards row g-5">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className='filteredproducts p-4'>
                <h2>{t("shop.6")}</h2>
                <div className="d-flex flex-column mt-4">
                  <div>
                    <div className="form-check my-3" onClick={() => filterCategory("plants")}>
                      <input className="form-check-input" type="radio" name="exampleRadios" id="plants" />
                      <label className="form-check-label" htmlFor="plants">
                        {t("shop.7")}
                      </label>
                    </div>
                    <div className="form-check my-3" onClick={() => filterCategory("planters")}>
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" />
                      <label className="form-check-label" htmlFor="exampleRadios1">
                        {t("shop.8")}
                      </label>
                    </div>
                    <div className="form-check my-3" onClick={() => filterCategory("plant care")}>
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" />
                      <label className="form-check-label" htmlFor="exampleRadios2">
                        {t("shop.9")}
                      </label>
                    </div>
                    <div className="form-check my-3" onClick={() => filterCategory("gift ideas")}>
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" />
                      <label className="form-check-label" htmlFor="exampleRadios3">
                        {t("shop.10")}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {state.map(item => (
              <SingleProduct alldata={item} key={item.id} id={item.id} title={item.title} img={item.images} price={item.price} rating={item.rating} desc={item.description} previousPrice={item.previousPrice} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop