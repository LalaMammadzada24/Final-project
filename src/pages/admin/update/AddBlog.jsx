import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { useDispatch } from 'react-redux'
import { addBlog } from '../../../tools/action/blogAction';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='d-flex flex-column w-100 align-items-center justify-content-center'>
        <h1>AddBlog</h1>
        <div className="col-8 col-sm-7 col-md-5">
        <BlogForm comingblog={(item)=>{
          dispatch(addBlog(item))
          navigate('/dashboard')
        }}/>
        </div>
    </div>
  )
}

export default AddBlog