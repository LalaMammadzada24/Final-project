import React from 'react'
import { Link } from 'react-router-dom'

const AboutContact = () => {
    return (
        <>
            <div className="aboutcontact py-5 px-3 ">
                <div className="row ms-5 me-5 g-3 pt-5">
                    <div className="col-12 col-sm-12 col-md-4">
                        <div className="col d-flex align-items-start">
                            <div className='left-col'>
                                <h3>Get answers to all your questions you might have.</h3>
                                <p>We will answer any questions you may have about our online</p>
                                <Link to="/contact" className="contact btn rounded-0">
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4">
                        <div className="card rounded-0 border-0" >
                            <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-teammember-1.jpg.webp" className="card-img-top rounded-0" alt="..." />
                            <div className="card-body text-center position-absolute bottom-0 start-50 translate-middle-x">
                                <h4 className="card-title">Jenny Wilson</h4>
                                <p className="card-text">Founder</p>
                                <div className='card-icon'>
                                <i class="fa-brands fa-facebook-f me-2"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4">
                        <div className="card rounded-0 border-0" >
                            <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-teammember-2.jpg.webp" className="card-img-top rounded-0" alt="..." />
                            <div className="card-body text-center position-absolute bottom-0 start-50 translate-middle-x">
                                <h4 className="card-title">Darlene Robertson</h4>
                                <p className="card-text my-1">Founder</p>
                                <div className='card-icon'>
                                <i class="fa-brands fa-facebook-f me-2"></i>
                                <i class="fa-brands fa-linkedin-in me-2"></i>
                                <i class="fa-brands fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContact