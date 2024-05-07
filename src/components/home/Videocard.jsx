import React from 'react'

const Videocard = () => {
    return (
        <>
            <div className="videocard py-5">
                <div className="row ms-5 me-5">
                <div className="col-12 col-sm-12 col-md-12">
                    <h2 className='mb-5'>Shopping by size</h2>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                        <div className="card rounded-0 border-0" >
                            <video autoPlay muted loop playsInline src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/plants-banners-video-1-1.mp4 " className="card-img-top rounded-0 position-relative "
                            poster='https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/plants-banners-image-1.jpg'>
                            </video>
                            <div className="card-body position-absolute bottom-0 start-0">
                                <h6 className="card-text">1 - 2ft.</h6>
                                <h1>Small plants</h1>
                                 <p>Shop now</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card rounded-0 border-0" >
                        <video autoPlay muted loop playsInline src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/plants-banners-video-2-1.mp4 " className="card-img-top rounded-0 position-relative "
                            poster='https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/plants-banners-image-2.jpg'>
                            </video>                            
                            <div className="card-body position-absolute bottom-0 start-0">
                                <h6 className="card-text">2 - 4ft.</h6>
                                <h1>Medium plants</h1>
                                 <p>Shop now</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card rounded-0 border-0" >
                        <video autoPlay muted loop playsInline src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/plants-banners-video-3-1.mp4 " className="card-img-top rounded-0 position-relative "
                            poster='https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/plants-banners-image-3.jpg'>
                            </video>                            
                            <div className="card-body position-absolute bottom-0 start-0">
                                <h6 className="card-text">5+ ft.</h6>
                                <h1>Large plants</h1>
                                 <p>Shop now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Videocard