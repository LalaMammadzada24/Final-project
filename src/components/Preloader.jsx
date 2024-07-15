import React from 'react'
import { DotLoader } from 'react-spinners'

const Preloader = () => {
  return (
    <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center '>
        <DotLoader color="#555E1E" />
    </div>
  )
}

export default Preloader