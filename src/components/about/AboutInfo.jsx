import React from 'react'
import { useTranslation } from 'react-i18next';

const AboutInfo = () => {
  const {t} = useTranslation();

    return (
        <>
            <div className="aboutinfo">
                <div className="row ms-5 me-4">
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="px-4 py-5 my-4">
                            <h1 >{t("aboutinfo.0")}</h1>
                            <div className="col-lg-10">
                                <p className="lead mb-4 mt-3">{t("aboutinfo.1")}<br /> <br /> {t("aboutinfo.2")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                       <div className="px-4 py-5 my-4">
                       <div className="con-open-date">
                       <div className='open-date d-flex flex-row justify-content-between align-items-center'>
                          <p>{t("aboutinfo.3")}</p> <h6>2018</h6>
                       </div>
                       <div className='open-date d-flex flex-row justify-content-between align-items-center border-top-0'>
                          <p>{t("aboutinfo.4")}</p> <h6>2019</h6>
                       </div>
                       <div className='open-date d-flex flex-row justify-content-between align-items-center border-top-0'>
                          <p>{t("aboutinfo.5")}</p> <h6>2021</h6>
                       </div>
                       </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutInfo