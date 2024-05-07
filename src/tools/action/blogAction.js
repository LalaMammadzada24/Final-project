export const addBlog = ({title,desc,img,date,type}) => ({
    type:"ADD_BLOG",
    blogdata:{
        id:crypto.randomUUID(),
        title,
        desc,
        img,
        date,
        type
    }
})

export const  editBlog = (id,update)=>({
    type:"EDIT_BLOG",
    id,
    update
})
export const  removeBlog = ({id})=>({
    type:"REMOVE_BLOG",
    id
})