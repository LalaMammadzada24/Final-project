import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from '../components/SingleProduct'
import data from '../data/data'
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import slug from 'react-slugify';
import { Select, Space } from 'antd';

const Shop = () => {
  const [query, setQuery] = useState();
  const [state, setState] = useState(data);
  const [category, setCategory] = useState(" ")
  const filteredData = state.filter(item => item.category === category);

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
  // const [data] = useContext(ProductContext);

  return (
    <>
      <div className="shop">
        <div className="px-5">
          <div className="d-flex justify-content-between pt-3">
            <h1 className="text-center">Shop</h1>
            <div className='col-9 col-sm-7 col-md-4 mb-3'>
              <div className="input-group mb-1">
                <input onChange={e => setQuery(e.target.value)} type="text" className="form-control" placeholder="Enter product" />
                <button className="btn" type="search" >Search</button>
              </div>
              <ol className='px-3'>
                {!query ? " " : data.filter(p => p.title.toLocaleLowerCase().includes(query)).map(item => (
                  <Link className='text-decoration-none' to={`/shop/${slug(item.title)}`}><li className='my-2 w-100 mx-4 d-flex align-items-center justify-content-start'><img width={70} src={item.images[0]} alt=".." /><p className='ms-3 me-4 '>{item.title}</p></li></Link>
                ))}
              </ol>
            </div>
            <Select
              defaultValue="All"
              style={{
                width: 120,
              }}
              onChange={sortProducts}
              options={[
                {
                  value: 'all',
                  label: 'All',
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
                  label: 'Low-to-high',
                },
                {
                  value: 'high-to-low',
                  label: 'High-to-low',
                }
              ]}
            />
          </div>

          <div className="shopcards row g-5">
            <div className="col-12 col-sm-6 col-md-3">
              <div className='filteredproducts p-4'>
                <h2>Filtered Products</h2>
                <div className="d-flex flex-column mt-4">
                  <div>
                    {/* <div className="form-check my-3" onClick={() => setCategory(data)}>
                      <input className="form-check-input" type="radio" name="exampleRadios" id="all"/>
                      <label className="form-check-label" htmlFor="all">
                      All
                      </label>
                    </div> */}
                    <div className="form-check my-3" onClick={() => setCategory("plants")}>
                      <input className="form-check-input" type="radio" name="exampleRadios" id="plants"/>
                      <label className="form-check-label" htmlFor="plants">
                      Plants
                      </label>
                    </div>
                    <div className="form-check my-3" onClick={() => setCategory("planters")}>
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"/>
                      <label className="form-check-label" htmlFor="exampleRadios1">
                        Planters
                      </label>
                    </div>
                    <div className="form-check my-3" onClick={() => setCategory("plant care")}>
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" />
                      <label className="form-check-label" htmlFor="exampleRadios2">
                        Plant care
                      </label>
                    </div>
                    <div className="form-check my-3" onClick={() => setCategory("gift ideas")}>
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" />
                      <label className="form-check-label" htmlFor="exampleRadios3">
                        Gift ideas
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {filteredData.map(item => (
              <SingleProduct alldata={item} key={item.id} id={item.id} title={item.title} img={item.images} price={item.price} desc={item.description} previousPrice={item.previousPrice} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop