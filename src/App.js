import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import BlogPost from './components/Blog_post/BlogPost';
import { ContextProvider } from './components/ContextApi/context';
import Home from './components/Home Screen/Home';
import NewBlog from './components/new Blog/NewBlog';


function App() {
  return (
    <>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogpost' element={<BlogPost />} />
          <Route path='/newblog' element={<NewBlog />} />
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
