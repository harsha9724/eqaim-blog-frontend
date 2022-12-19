import React, { useContext } from 'react'
import Cards from '../Cards/Cards'
import Header from '../header/Header'
import { Link } from "react-router-dom"
import "./home.css";
import { context } from '../ContextApi/context'
export default function Home() {
const {blogs}=useContext(context);
    return (
        <div>
            <Header />
            <div id='card-container'>
                {
                    blogs.map((post,i)=>{
                      return  <Cards post={post} key={i} />
                    })
                }
               
                {/* <Link to={"/blogpost"}> <Cards /></Link>
                <Link to={"/blogpost"}> <Cards /></Link>
                <Link to={"/blogpost"}> <Cards /></Link>
                <Link to={"/blogpost"}> <Cards /></Link>
                <Link to={"/blogpost"}> <Cards /></Link> */}

            </div>
            <div id='create-post'>
                <Link to={"/newblog"}><img src="/add.png" alt="add" /></Link>
            </div>

        </div>
    )
}
