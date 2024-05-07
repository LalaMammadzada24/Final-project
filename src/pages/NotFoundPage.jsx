import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
       <Link to="/"><img src="https://miro.medium.com/v2/resize:fit:679/1*zBFBJktPD3_z0S_35kO5Hg.gif" alt="err" /></Link>
    </div>
  )
}

export default NotFoundPage