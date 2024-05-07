import React from 'react'

const ForgotPassword = () => {
  return (
    <>
        <div className="d-flex flex-column w-100 align-items-center justify-content-center">
        <h1 className="my-5">ForgotPassword</h1>
        <div className="col-8 col-sm-7 col-md-5">
          <form >
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn">Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
