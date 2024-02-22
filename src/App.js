
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import {BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { format, setDate } from 'date-fns';
import axios from 'axios';
import api from './api/ApiService';
import post from './api/ApiService';
import useWindowSize from './hooks/useWindowSize';
import useAxiosFetch from './hooks/useAxiousFetch';
import { DataProvider } from './context/DataContext';



function App() {


  return (
    <div className="App">

      <DataProvider>
    
      <Header title="React Js Blog" />
      <Nav />
        <Routes> 
        <Route index  element={<Home />}/>
        <Route path='/post'  element={ <NewPost/> }
         />
        <Route path='/post/:id' element={<PostPage/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='*' element={ <Missing/>}/>
        </Routes>
      <Footer/>
          
      </DataProvider>
    </div>
  );
}

export default App;
