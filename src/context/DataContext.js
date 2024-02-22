import { createContext } from "react";
import {BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { format, setDate } from 'date-fns';
import api from '../api/ApiService';
import useAxiosFetch from '../hooks/useAxiousFetch';
import post from "../api/ApiService";
const DataContext= createContext({});


export const DataProvider = ( {children  })=>{

    const [posts,setPosts] = useState([]);
    const [search,setSearch] = useState('');
    const [searchResults,setSearchResults]=useState([]);
  
    const [editTitle,setEditTitle] = useState('');
    const [editBody,setEditBody] = useState('');
    const navigate = useNavigate();
    const {data, fetchError,isLoading} = useAxiosFetch('http://localhost:3500/posts');
    
  
    useEffect(()=>{
      setPosts(data);
  
    },[data]);
  
    useEffect(()=>{
          debugger
  
        const filteredResults=posts.filter(post => 
          ((post.body).toLowerCase()).includes(search.toLowerCase())
        ||  ((post.title).toLowerCase()).includes(search.toLowerCase()));
    
        setSearchResults(filteredResults.reverse());
      
   
  
    },[posts,search])


      const handleEdit = async (id)=>{
        const datetime = format(new Date(),'MMMM dd, yyyy pp');
        const updatedPost={id,title:editTitle,datetime,body:editBody};
        try{
          const response = await api.put(`/posts/${id}`,updatedPost);
          setPosts(posts.map(post=> post.id === id ? {...response.data } : post))
          setEditTitle('');
          setEditBody('');
          navigate('/');
        }catch(err){
    
        }
      }
    

    
    return(
           <DataContext.Provider value={{
             posts,search,setSearch,searchResults,fetchError,isLoading
            ,handleEdit,setPosts
           }} >
            {children}
           </DataContext.Provider> 

    )
}

export default DataContext; 