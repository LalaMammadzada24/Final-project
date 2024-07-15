import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const ContactHero = () => {
  const {t} = useTranslation();

  return (
    <>
    <div className="contacthero">
        <div className="row ms-5 me-4">
          <div className="col-12 col-sm-12 col-md-12">
            <h1 className='mt-3'>{t("contacthero.0")}</h1>
          </div>
          <div className="px-4 py-5">
            <div className="row flex-lg-row-reverse justify-content-between g-5 py-1">
              <div className="col-10 col-sm-8 col-lg-5">
                <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-contact-us-img.jpg.webp" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h2 className=" mb-3">{t("contacthero.1")}</h2>
                <p className="lead">{t("contacthero.2")}<span>{t("contacthero.3")}</span></p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <Link to="/writemessage"><button type="button" className="btn btn-lg px-4 me-md-2 rounded-0">{t("contacthero.4")}</button></Link>
                </div>
                <div className="icon-con">
                  <i class="fa-brands fa-facebook-f me-2" style={{ padding: "10px 13px" }}></i>
                  <i class="fa-brands fa-x-twitter me-2" style={{ padding: "10px 11px" }}></i>
                  <i class="fa-brands fa-instagram" style={{ padding: "10px 12px" }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactHero