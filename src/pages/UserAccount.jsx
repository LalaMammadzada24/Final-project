import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const UserAccount = () => {
  const [fullname,setFullname] = useState(localStorage.getItem("fullname"));
  const [tel,setTel] = useState(localStorage.getItem('tel'));
  const [email,setEmail] = useState(localStorage.getItem('email'));
  const navigate = useNavigate();
  const {t} = useTranslation();

  const userAccountSubmit = e =>{
    e.preventDefault();

    if(!fullname || !tel || !email){
      alert("please,fill input");
    }else{
          localStorage.setItem('fullname', fullname);
          localStorage.setItem('email', email);
          localStorage.setItem('tel', tel);
          location.reload();
    }
  }
  return (
    <>
    <div className="d-flex flex-column w-100 align-items-center justify-content-center">
    <h1 className='my-4'>{t("account.0")}</h1>
      <div className="col-8 col-sm-7 col-lg-5">
      <form onSubmit={userAccountSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">{t("account.1")}</label>
          <input value={fullname} onChange={e=>setFullname(e.target.value)} type="text" className="form-control" id="exampleInputName1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputNumber1" className="form-label">{t("account.2")}</label>
          <input value={tel} onChange={e=>setTel(e.target.value)} type="tel" className="form-control" id="exampleInputNumber1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">{t("account.3")}</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        {localStorage.getItem('email') === 'lala@admin.com' && localStorage.getItem('password') === 'admin123'?
        <Link to="/dashboard" className='ms-1 me-5 btn'>{t("account.4")}</Link>:" "}
      </form>
      <button className='btn my-3'><Link className='btn text-light p-0' to="/changepassword">{t("account.5")}</Link></button> <br />
      <button className='btn danger ' onClick={()=>{
        localStorage.removeItem('login');
        location.assign('/login')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
      }}>{t("account.6")}</button>
      </div>
    </div>
    </>
  )
}

export default UserAccount