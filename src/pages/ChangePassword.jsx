import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const ChangePassword = () => {
  const [oldpasssword, setOldpasssword] = useState();
  const [password, setPassword] = useState();
  const [againPassword, setAgainPassword] = useState();
  const navigate = useNavigate();
  const {t} = useTranslation();

  const ChangePasswordSubmit = e => {
    e.preventDefault();

    if (!password || !againPassword || !oldpasssword) {
      alert("please,fill input");
    } else {
      if (oldpasssword === localStorage.getItem('password')) {
        if ((password === againPassword) && (oldpasssword === localStorage.getItem('password'))) {
          localStorage.setItem('password', password);
          location.assign('/useraccount')
        } else {
          alert('password is different!')
        }
      } else {
        alert('wrong password!')
      }
    }
  }
  return (
    <>
      <div className="d-flex flex-column w-100 align-items-center justify-content-center">
        <h1 className='my-4'>{t("changepass.0")}</h1>
        <div className="col-8 col-sm-7 col-lg-5">
        <form onSubmit={ChangePasswordSubmit}>
          <div className="mb-3">
            <label className="form-label">{t("changepass.1")}</label>
            <input onChange={e => setOldpasssword(e.target.value)} type="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">{t("changepass.2")}</label>
            <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">{t("changepass.3")}</label>
            <input onChange={e => setAgainPassword(e.target.value)} type="password" className="form-control" aria-describedby="emailHelp" />
          </div>
          <button type="submit" className="btn">{t("changepass.4")}</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default ChangePassword