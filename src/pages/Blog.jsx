import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

const Blog = () => {
  const blogs = useSelector(p => p)

  return (
    <>
      <div className="blog pt-3">
          <div className="row ms-5 me-4">
            <div className="col-12 col-sm-12 col-md-12">
              <h1>Blog</h1>
            </div>
            {blogs.map(item=>(
              <div className="col-12 col-sm-12 col-md-12">
              <div className="card rounded-0" >
                <div className="row g-0">
                  <div className="date">
                    <span className='date-day mb-0'>{item.date}</span> 
                  </div>
                  <a className="info">
                    {item.type}
                  </a>
                  <div className="img-box col-md-3">
                    <img src={item.img} className="big-img img-fluid rounded-0" alt="..." />
                  </div>
                  <div className="col-md-7 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <span className="card-title">Posted by</span> <img className='rounded-circle' src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp" alt="err" /> <span>Mr. Mackay</span>
                      <h3 className="card-text"><a className='text-decoration-none' href="">{item.title}</a></h3>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center align-items-center">
                    <Link to={`/blog/${slugify(item.title)}`} className="btn">Continue reading</Link>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
      </div>
    </>
  )
}

export default Blog