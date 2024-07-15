import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from "sweetalert";
import { useTranslation } from 'react-i18next';

const Register = () => {
  const {t} = useTranslation();

  const [user,setUser]=useState({
    fullname:"",
    tel:"",
    email:"",
    password:"",
    againpassword:""
  })
  const navigate = useNavigate();
  
  const handleChange =(e)=>{
    setUser({...user, [e.target.name]: e.target.value})

  }
  const registerSubmit = (e) =>{
    e.preventDefault();
    if (!user.fullname || !user.tel || !user.email || !user.password || !user.againpassword) {
      swal({
        title: "",
        text: "Please fill the inputs",
        icon: "error",
        timer: 1500,
      });
    } else {
      if (user.password === user.againpassword) {
       
        swal({
          title: "",
          text: "you have registered",
          icon: "success",
          timer: 1500,
        });

        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const existingUser = registeredUsers.find(u => u.email === user.email);
        if (existingUser) {
          alert(t("register.userExists"));
        } else {
          registeredUsers.push(user);
          localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } else {
        swal({
          title: "",
          text: "Password is different",
          icon: "error",
          timer: 1500,
        });
      }
    }
  }
  return (
    <>
    <div className="d-flex flex-column w-100 align-items-center justify-content-center">
    <h1 className='my-4'>{t("register.0")}</h1>
      <div className="col-8 col-sm-7 col-lg-5">
      <form onSubmit={registerSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">{t("register.1")}</label>
          <input onChange={handleChange} type="text" name='fullname' className="form-control" id="exampleInputName1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputNumber1" className="form-label">{t("register.2")}</label>
          <input onChange={handleChange} type="tel" name='tel' className="form-control" id="exampleInputNumber1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">{t("register.3")}</label>
          <input onChange={handleChange} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">{t("register.4")}</label>
          <input onChange={handleChange} type="password" name='password' className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">{t("register.5")}</label>
          <input onChange={handleChange} type="password" name='againpassword' className="form-control" id="exampleInputPassword2" />
        </div>
        <button type="submit" className="btn">{t("register.6")}</button>
      </form>
      <p className='my-4'><Link to="/login">{t("register.7")}</Link></p>
      </div>
    </div>
    </>
  )
}

export default Register