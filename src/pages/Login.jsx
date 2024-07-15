import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const admin = {
    email: "lala@admin.com",
    password: "admin123"
  }
  const loginSubmit = (e) => {
    e.preventDefault();
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const user = registeredUsers.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("login", "true");
      localStorage.setItem('activeUser', JSON.stringify(user))
      console.log(user)
      navigate("/shop");
      swal({
        title: "",
        text: "You are already logged in",
        icon: "success",
        timer: 1500,
      });
      window.location.reload();

    }
    else if (admin.email === email && admin.password === password) {
      localStorage.setItem('email', "lala@admin.com")
      localStorage.setItem('password', "admin123")
      localStorage.setItem("login", "true");
      navigate('/useraccount')
      window.location.reload();

    }
    else {
      swal({
        title: "",
        text: "Email or password is wrong",
        icon: "error",
        timer: 1500,
      });
      navigate("/register")
    }
  }
  return (
    <>
      <div className="d-flex flex-column w-100 align-items-center justify-content-center">
        <h1 className="my-4">{t("login.0")}</h1>
        <div className="col-8 col-sm-7 col-lg-5">
          <form onSubmit={loginSubmit}>
            <div className="mb-3">
              <label className="form-label">{t("login.1")}</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">{t("login.2")}</label>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
            </div>
            <button type="submit" className="btn">{t("login.3")}</button>
          </form>
          <p className='mt-2'><Link to="/register">{t("login.4")}</Link></p>
          <p><Link to="/forgotpassword">{t("login.5")}</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login