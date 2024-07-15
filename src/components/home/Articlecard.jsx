import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
const Articlecard = () => {
    const blogs = useSelector(p => p)
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="blog py-3">
                <div className="row ms-5 me-4 mx-auto">
                    <div className="col-12 col-sm-12 col-md-12">
                        <h2>{t("article.0")}</h2>
                    </div>
                    {blogs.slice(0, 3).map(item => (
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
                                            <span className="card-title">{t("article.1")}</span> <img className='rounded-circle' src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp" alt="err" /> <span>Mr. Mackay</span>
                                            <h3 className="card-text"><a className='text-decoration-none' href="">{item.title}</a></h3>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                                        <Link to={`/blog/${slugify(item.title)}`} className="btn">{t("article.2")}</Link>
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

export default Articlecard