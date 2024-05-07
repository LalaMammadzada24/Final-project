import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserAccount = () => {
  const [fullname,setFullname] = useState(localStorage.getItem("fullname"));
  const [tel,setTel] = useState(localStorage.getItem('tel'));
  const [email,setEmail] = useState(localStorage.getItem('email'));
  const navigate = useNavigate();

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
    <h1 className='my-4'>Account</h1>
      <div className="col-8 col-sm-7 col-md-5">
      <form onSubmit={userAccountSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
          <input value={fullname} onChange={e=>setFullname(e.target.value)} type="text" className="form-control" id="exampleInputName1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputNumber1" className="form-label">Number</label>
          <input value={tel} onChange={e=>setTel(e.target.value)} type="tel" className="form-control" id="exampleInputNumber1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        {localStorage.getItem('email') === 'lala@admin.com' && localStorage.getItem('password') === 'admin123'?
        <Link to="/dashboard" className='ms-1 me-5 btn'>Dashboard</Link>:" "}
      </form>
      <button className='btn my-3'><Link className='btn text-light p-0' to="/changepassword">Change Password</Link></button> <br />
      <button className='btn danger ' onClick={()=>{
        localStorage.removeItem('login');
        location.assign('/login')
      }}>Logout</button>
      </div>
    </div>
    </>
  )
}

export default UserAccount