import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children})=>{
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://final-project-fea95-default-rtdb.europe-west1.firebasedatabase.app/")
            .then(res => setData(res.data));
    }, [])

    return    <ProductContext.Provider value={[data,setData]}>
         {children}
        </ProductContext.Provider>
} 