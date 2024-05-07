import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import slugify from 'slugify';
import { Link } from 'react-router-dom'
import AboutSlider from '../../components/about/AboutSlider'

const BlogDetails = () => {
    const { slug } = useParams();
    const blogs = useSelector(p => p);
    const blogDetails = blogs.filter(p => slugify(p.title) === slug);
    console.log(blogDetails);
    return (
        <>
            <div className="blogdetails">
                <h1 className='ps-5 px-4 pt-3 mb-0'>BLOG</h1>
                <div className="row">
                    <div className="col-12 col-sm-7 col-md-9">
                        <div className=" pt-5  text-center">
                            <div className="type-category mx-auto py-1 px-2 ">{blogDetails[0].type}</div>
                            <h2 className='mt-3'>{blogDetails[0].title}</h2>
                            <div className="col-lg-6 mx-auto mb-3">
                                <span className="card-title">Posted by</span> <img className='rounded-circle' src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp" alt="err" /> <span>Mr. Mackay</span>
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
                                    If that’s what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader. Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets.
                                </div>
                                <div className="col-12 col-sm-6 col-md-6">
                                Websites in professional use templating systems. Commercial publishing platforms and content management systems ensure that you can show different text, different data using the same template. When it’s about controlling hundreds of articles, product pages for web shops, or user profiles in social networks, all of them potentially with different sizes, formats, rules for differing elements things can break, designs agreed upon can have unintended consequences and look much different than expected.                                </div>
                            </div>
                        </div>
                        <AboutSlider/>
                    </div>
                    <div className="details-box col-12 col-sm-5 col-md-3 mt-5 pt-5 ">
                        <h5 className='pb-4'>Recent Posts</h5>
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