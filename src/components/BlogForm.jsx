import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBlog } from '../tools/action/blogAction';

const BlogForm = ({ comingblog,editdata }) => {
    const [img, setImg] = useState(editdata?editdata.img:"");
    const [title, setTitle] = useState(editdata?editdata.title:"");
    const [desc, setDesc] = useState(editdata?editdata.desc:"");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");

    const formSubmit = e => {
        e.preventDefault();
        if (!title || !desc || !img || !date) {
            alert('please,fill input')
        } else {
            comingblog({
                title:title,
                desc:desc,
                img:img,
                date:date,
                type:type
            })
        }
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label className="form-label">Image url</label>
                    <input onChange={e => setImg(e.target.value)} value={img} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input onChange={e => setTitle(e.target.value)} value={title} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <div className="form-floating">
                        <textarea onChange={e => setDesc(e.target.value)} value={desc} className="form-control" style={{ height: 100 }} />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <div className="form-floating">
                        <input onChange={e => setDate(e.target.value)} type="text" value={date} className="form-control"  />
                    </div>
                </div>
                <button type="submit" className="btn rounded-0">{editdata?"Edit":"Add"}</button>
            </form>
        </div>
    )
}

export default BlogForm