import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { useDispatch } from 'react-redux'
import { addBlogToDatabase } from '../../../tools/action/blogAction';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
    <div className='d-flex flex-column w-100 align-items-center justify-content-center'>
        <h1>{t("addblog.0")}</h1>
        <div className="col-8 col-sm-7 col-lg-5">
        <BlogForm comingblog={(item)=>{
          dispatch(addBlogToDatabase(item))
          navigate('/dashboard')
        }}/>
        </div>
    </div>
  )
}

export default AddBlog