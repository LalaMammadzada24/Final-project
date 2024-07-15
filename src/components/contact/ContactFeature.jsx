import React from 'react'
import { useTranslation } from 'react-i18next';

const ContactFeature = () => {
  const {t} = useTranslation();

  return (
    <>
        <div className="contactfeature">
        <div className="pt-5  ms-5 me-5">
          <div className="row py-4">
            <div className="col-12 col-md">
              <h4>{t("contactfeature.0")}</h4>
              <img className="mb-4 ms-1" src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/arrow.svg" alt='err' />
            </div>
            <div className="col-6  col-md">
              <ul className="list-title list-unstyled text-small">
                <li className="mb-4"><p>{t("contactfeature.1")}</p></li>
                <li className="mb-4"><p>{t("contactfeature.2")}</p></li>
                <li className="mb-4"><p>{t("contactfeature.3")}</p></li>
              </ul>
            </div>
            <div className="col-6 col-md ">
            <ul className="list-text list-unstyled text-small">
                <li className="mb-4"><p>(064) 332-1233</p></li>
                <li className="mb-4"><p>atlanta.plants@gmail.com</p></li>
                <li className="mb-4 w-75"><p>{t("contactfeature.4")}</p></li>
              </ul>
            </div>
            <div className="col-6 col-md text-end">
              <h5>Jenny Wilson</h5>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-12 col-md">
              <h4>Nashville</h4>
              <img className="mb-4 ms-1" src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/arrow.svg" alt='err' />
            </div>
            <div className="col-6  col-md">
              <ul className="list-title list-unstyled text-small">
                <li className="mb-4"><p>{t("contactfeature.1")}</p></li>
                <li className="mb-4"><p>{t("contactfeature.2")}</p></li>
                <li className="mb-4"><p>{t("contactfeature.3")}</p></li>
              </ul>
            </div>
            <div className="col-6 col-md ">
            <ul className="list-text list-unstyled text-small">
                <li className="mb-4"><p>(933) 989-4765</p></li>
                <li className="mb-4"><p>nashville.plants@gmail.com</p></li>
                <li className="mb-4 w-75"><p>{t("contactfeature.5")}</p></li>
              </ul>
            </div>
            <div className="col-6 col-md text-end">
              <h5>Darlene Robertson</h5>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ContactFeature