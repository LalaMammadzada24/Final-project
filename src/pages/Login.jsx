import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password ) {
      setText("Please fill input");
      setAlert("warning");
    } else {
      if (email!==localStorage.getItem('email')) {
        setText("This account is not defined");
          setAlert("info");
          setTimeout(()=>{
              navigate('/register')
          },2000)
      } else {
          if(email===localStorage.getItem('email') && password === localStorage.getItem('password')){
            setText("Login is successfully");
            localStorage.setItem('login',"true")
            location.assign('/useraccount')
          }else{
            setText("email or password is wrong")
            setAlert('danger')
          } 
      }
      
    }
  }
  return (
    <>
      <div className="d-flex flex-column w-100 align-items-center justify-content-center">
        <h1 className="my-4">Login</h1>
        <div className={`alert alert-${alert}`} role="alert">
          {text}
        </div>
        <div className="col-8 col-sm-7 col-md-5">
          <form onSubmit={loginSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
          <p className='mt-2'><Link to="/register">Create new account</Link></p>
          <p><Link to="/forgotpassword">Forgot your password?</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login