import axios from "axios";
import { createContext, useEffect, useState } from "react";

export  const context=createContext();
export function ContextProvider(props){
    const [blogs,setBlogs]=useState([]);
    const [blogDetail,setBlogDetail]=useState({})
    useEffect(()=>{
       axios.get("http://localhost:8080/api/v1/blogs").then((res)=>{
        console.log(res.data.data);
        setBlogs(res.data.data.reverse());
       }).catch((err)=>{
        console.log(err)
       })
    },[])
    return(
        <>
        <context.Provider value={{blogs,blogDetail,setBlogDetail}}>
            {props.children}
        </context.Provider>
        </>
    )
}

