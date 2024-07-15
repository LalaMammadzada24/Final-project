const blog =[];

export const blogReducer =(state=blog,action)=>{
    switch (action.type) {
        case "ADD_BLOG":
            return [...state,action.blogdata]
        case "EDIT_BLOG":
            return state.map(item=>{
                if (item.id === action.id){
                    return{
                       ...item,...action.update
                    }
                }else{
                    return item;
                }
            })
        case "REMOVE_BLOG":
            return state.filter(({id})=>{
                return id !== action.id
            })

            case "SET_BLOGS":
                return action.blogs;
                
        default:
            return state;
    }
}