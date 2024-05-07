import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeBlog } from '../../tools/action/blogAction';
import slugify from 'slugify';

const Dashboard = () => {
    const blogs = useSelector(p=>p);
    const dispatch = useDispatch();
    return (
        <>
            <div className="dashboard pe-5 ps-5 pt-3">
                <h2 className='text-center'>Dashboard</h2>
                <div className="d-flex align-items-center justify-content-center py-5">
                    <div className="col-9">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Photo</th>
                                    <th>Title</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map((item,count)=>(
                                <tr key={count}>
                                    <th className='pt-4' scope="row">{count+1}</th>
                                    <td><img src={item.img} width={100} alt={item.title} /></td>
                                    <td className='pt-4 blog-title'>{item.title}</td>
                                    <td className='pt-4'><Link to={`/dashboard/edit/${slugify(item.title)}`}><button className='edit-btn'><i class="fa-regular fa-pen-to-square fs-4"></i></button></Link></td>
                                    <td className='pt-4'><button onClick={()=>{dispatch(removeBlog({id:item.id}))}} className='border-0'><i class="fa-solid fa-xmark"></i></button></td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        {blogs.map((item) => (
                            <div className="card mb-3 border-0 rounded-0" >
                                <div className="row g-0 border-bottom">
                                    <div className="col-3 col-sm-3 col-md-4">
                                        <img src={item.img} width={70} className="img-fluid rounded-0" alt="..." />
                                    </div>
                                    <div className="col-9 col-sm-9 col-md-8">
                                            <div className='d-flex justify-content-between align-items-center mx-2'><p className="cart-title my-auto">{item.title.slice(0,13)}...</p><button onClick={()=>{dispatch(removeBlog({id:item.id}))}} className='border-0 deletebutton rounded-0'><i class="fa-solid fa-xmark"></i></button></div>
                                            <div className='d-flex justify-content-between align-items-center py-1 mx-2'><p>Edit:</p><Link to={`/dashboard/edit/${slugify(item.title)}`}><button className='edit-btn border-0'><i class="fa-regular fa-pen-to-square fs-4"></i></button></Link></div>
                                    </div>
                                </div>
                            </div>))}
                        <Link className='btn rounded-0 mt-2' to="/dashboard/add">Add blog</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard