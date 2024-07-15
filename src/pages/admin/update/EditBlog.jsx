import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { useNavigate, useParams } from 'react-router-dom';
import slugify from 'slugify';
import { useDispatch, useSelector } from 'react-redux';
import { editBlogFromDatabase } from '../../../tools/action/blogAction';
import { useTranslation } from 'react-i18next';

const EditBlog = () => {
    const blogs = useSelector(p=>p);
    const {slug} = useParams();
    const selectBlog = blogs.filter(p=>slugify(p.title) === slug);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {t} = useTranslation();

  return (
    <div className='d-flex flex-column w-100 align-items-center justify-content-center'>
        <div className="col-8 col-sm-7 col-lg-5">
        <h1 className='text-center'>{t("editblog.0")}</h1>
        <BlogForm editdata={selectBlog[0]} comingblog={(item)=>{
            dispatch(editBlogFromDatabase(selectBlog[0].id ,item))
            navigate('/dashboard')
        }}/>
        </div>
    </div>
  )
}

export default EditBlog