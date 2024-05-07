import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [fullname,setFullname] = useState("");
  const [tel,setTel] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [againpassword,setAgainpassword] = useState("");
  const navigate = useNavigate();

  const registerSubmit = e =>{
    e.preventDefault();
    if(!fullname || !tel || !email || !password || !againpassword){
      alert("please,fill input");
    }else{
      if(password===againpassword){
          localStorage.setItem('fullname', fullname);
          localStorage.setItem('email', email);
          localStorage.setItem('tel', tel);
          localStorage.setItem('password', password);
          localStorage.setItem('login',"true")
          navigate('/login')
      }else{
        alert("password is different")
      }
    }
  }
  return (
    <>
    <div className="d-flex flex-column w-100 align-items-center justify-content-center">
    <h1 className='my-4'>Register</h1>
      <div className="col-8 col-sm-7 col-md-5">
      <form onSubmit={registerSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
          <input onChange={e=>setFullname(e.target.value)} type="text" className="form-control" id="exampleInputName1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputNumber1" className="form-label">Number</label>
          <input onChange={e=>setTel(e.target.value)} type="tel" className="form-control" id="exampleInputNumber1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input onChange={e=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={e=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Again Password</label>
          <input onChange={e=>setAgainpassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword2" />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
      <p className='my-4'><Link to="/login">Do you already have an account?</Link></p>
      </div>
    </div>
    </>
  )
}

export default Register