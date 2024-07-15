import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import slugify from 'slugify';
import { Link } from 'react-router-dom'
import AboutSlider from '../../components/about/AboutSlider'
import { useTranslation } from 'react-i18next';

const BlogDetails = () => {
    const { slug } = useParams();
    const blogs = useSelector(p => p);
    const blogDetails = blogs.filter(p => slugify(p.title) === slug);
    console.log(blogDetails);
    const {t} = useTranslation();

    return (
        <>
            <div className="blogdetails">
                <h1 className='ps-5 px-4 pt-3 mb-0'>{t("blogdetails.0")}</h1>
                <div className="row">
                    <div className="col-12 col-sm-7 col-md-12 col-lg-9">
                        <div className=" pt-5  text-center">
                            <h2 className='mt-3'>{blogDetails[0].title}</h2>
                            <div className="col-lg-6 mx-auto mb-3">
                                <span className="card-title">{t("blogdetails.1")}</span> <img className='rounded-circle' src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp" alt="err" /> <span>Mr. Mackay</span>
                            </div>

                            <div className="overflow-hidden" style={{ maxHeight: '90vh' }}>
                                <div className="container px-5 ">
                                    <img src={blogDetails[0].img} className="img-fluid border mb-4  position-relative " alt="Example image" loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="desc-box container ps-5 pb-3 pt-3">
                            <div>
                            {blogDetails[0].desc}
                            </div>
                            <div className="row pt-3">
                                <div className="col-12 col-sm-6 col-md-6">
                                {t("blogdetails.2")}
                                </div>
                                <div className="col-12 col-sm-6 col-md-6">
                                {t("blogdetails.3")}</div>
                            </div>
                        </div>
                        <AboutSlider/>
                    </div>
                    <div className="details-box col-12 col-sm-5 col-md-3 mt-5 pt-5 ">
                        <h5 className='pb-4'>{t("blogdetails.4")}</h5>
                        {blogs.map(item => (
                            <div className="details-img col-12 col-sm-12 col-md-12">
                                <div className="card rounded-0 border-0" >
                                    <div className="row g-0">
                                        <div className="col-md-4 mt-3">
                                            <img src={item.img} className="img-fluid rounded-0" alt="..." />
                                        </div>
                                        <div className="details-text col-md-8 d-flex justify-content-center align-items-center">
                                            <div className="card-body">
                                                <h3 className="card-text"><Link className='text-decoration-none' to={`/blog/${slugify(item.title)}`}>{item.title}</Link></h3>
                                                <div className="date">
                                                    <span className='date-day mb-0'>{item.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default BlogDetails