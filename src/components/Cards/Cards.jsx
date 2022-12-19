import React, { useContext } from 'react'
import "./Cards.css";
import { useNavigate } from "react-router-dom";
import { context } from '../ContextApi/context';
export default function Cards({post}) {
    const navigate=useNavigate();
    const {setBlogDetail}=useContext(context);
    return (
        <div id='card-wrap' onClick={()=>{
            setBlogDetail(post);
            navigate("/blogpost");
        }}>
            <p id='card-name'>{post.title}</p>
        </div>
    )
}
