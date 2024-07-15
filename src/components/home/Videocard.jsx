import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const Videocard = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="videocard py-5">
                <div className="row ms-5 me-5">
                <div className="col-12 col-sm-12 col-md-12">
                    <h2 className='mb-5'>{t("video.0")}</h2>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                        <div className="card rounded-0 border-0" >
                            <video autoPlay muted loop playsInline src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/plants-banners-video-1-1.mp4 " className="card-img-top rounded-0 position-relative "
                            poster='https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/plants-banners-image-1.jpg'>
                            </video>
                            <div className="card-body position-absolute bottom-0 start-0">
                                <h6 className="card-text">{t("video.1")}</h6>
                                <h1>{t("video.2")}</h1>
                                <Link className='text-decoration-none' to="/shop"><p>{t("video.3")}</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card rounded-0 border-0" >
                        <video autoPlay muted loop playsInline src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/plants-banners-video-2-1.mp4 " className="card-img-top rounded-0 position-relative "
                            poster='https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/plants-banners-image-2.jpg'>
                            </video>                            
                            <div className="card-body position-absolute bottom-0 start-0">
                                <h6 className="card-text">{t("video.4")}</h6>
                                <h1>{t("video.5")}</h1>
                                <Link className='text-decoration-none' to="/shop"><p>{t("video.6")}</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card rounded-0 border-0" >
                        <video autoPlay muted loop playsInline src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/plants-banners-video-3-1.mp4 " className="card-img-top rounded-0 position-relative "
                            poster='https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/plants-banners-image-3.jpg'>
                            </video>                            
                            <div className="card-body position-absolute bottom-0 start-0">
                                <h6 className="card-text">{t("video.7")}</h6>
                                <h1>{t("video.8")}</h1>
                                <Link className='text-decoration-none' to="/shop"><p>{t("video.9")}</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Videocard