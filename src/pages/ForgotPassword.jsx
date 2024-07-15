import React from 'react'
import { useTranslation } from 'react-i18next';

const ForgotPassword = () => {
  const {t} = useTranslation();

  return (
    <>
        <div className="d-flex flex-column w-100 align-items-center justify-content-center">
        <h1 className="my-5">{t("forgotpass.0")}</h1>
        <div className="col-8 col-sm-7 col-lg-5">
          <form >
            <div className="mb-3">
              <label className="form-label">{t("forgotpass.1")}</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">{t("forgotpass.2")}</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn">{t("forgotpass.3")}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
