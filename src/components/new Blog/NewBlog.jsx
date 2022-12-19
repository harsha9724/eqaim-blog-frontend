import React, { useState } from "react";
import Header from '../header/Header'
import { useNavigate } from "react-router-dom";
import { CKEditor}  from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-build-classic";
import "./NewBlog.css";
import axios from "axios";


export default function NewBlog() {
 const navigate=useNavigate();
 const [blogDetails,setBlogDetails]=useState({
    title:"",
    description:""
 });
 const handleChange=(e)=>{
    const {name,value}=e.target;
    setBlogDetails({...blogDetails,[name]:value})
 }
    const handlePost = () => {
       if(blogDetails.title==""){
       return alert(" Enter blog title")
       }
       else if(blogDetails.description==""){
        return alert("please write description")
       }
       else{
        axios.post("http://localhost:8080/api/v1/addBlog",blogDetails).then((res)=>{
            console.log(res);
            navigate("/");
            document.location.reload();
        }).catch((err)=>{
            console.log(err);
        })
       }
    }
    return (
        <div>
            <Header />
            <div className='home-icon' onClick={()=>{
                      navigate("/")
            }}>
                <img src='/home.png' alt='home icon' />
            </div>
            <div className='home-icon' id='post-icon'>
                <img src='/create.png' alt='home icon' onClick={handlePost} />
            </div>
            <div id='text-area'>
                <div id='text-styles' style={{marginBottom:"10px"}}>
                    <img src="bold.png" alt="bold" /><img src="itailc.png" alt="bold" /><img src="underline.png" alt="bold" /><img src="strikethrough.png" alt="bold" /><img src="text-format.png" alt="bold" /><img src="list.png" alt="bold" /><img src="link.png" alt="bold" />
                </div>
                <div style={{marginBottom:"10px"}}>
                    <input type="text" name="title" id='newBloghead' value={blogDetails.title} onChange={handleChange} placeholder='BlogPost Title' />
                </div>
              <textarea name="description" id="blog-text" value={blogDetails.description} onChange={handleChange} cols="25" rows="30" placeholder=' Type Your blog  here....' ></textarea>
              <CKEditor editor={ClassicEditor} data={blogDetails.description}/>
            </div>
        </div>
    )
}
