import React, { useContext } from 'react'
import Header from '../header/Header'
import { Link } from "react-router-dom"
import "./BlogPost.css";
import { context } from '../ContextApi/context';
export default function BlogPost() {
    const {blogDetail}=useContext(context);
    return (
        <div id='BlogPost-wrap'>
            <div>
                <Header />
            </div>

            <div className='home-icon'>
                <Link to={"/"}><img src='/home.png' alt='home icon' /></Link>
            </div>
            <div id='blog-content-wrap'>
                <p id='blog-head'>{blogDetail.title}</p>
                <p id='blog-content'>{blogDetail.description}</p>
            </div>

        </div>
    )
}
