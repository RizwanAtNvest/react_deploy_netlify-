import React, { useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import DataContext from './context/DataContext';
import ApiService from './api/ApiService';



const PostPage = () => {
  const {id} =useParams();
  const {posts,setPosts}=useContext(DataContext);
  const navigate = useNavigate();


  const handleDelete = async(id) =>{
    try{
     await ApiService.delete(`/posts/${id}`);
     const postsList = posts.filter(post => post.id !==id);
      setPosts(postsList);
      navigate('/');


    }catch(err){
      console.log(`Error: ${err.message}` );

    }
   
  }
  const post=posts.find( post=> (post.id).toString()===id)
  return (
    <main className='PostPage'>
        <article className='post'>
      {
        post &&
        <>
          <h2>{post.title}</h2>
          <p className='postDate'>{post.dateTime}</p>
          <p className='postBody'>{post.body}</p>
          <button onClick={()=>handleDelete(post.id)}>
            Delete post
          </button>

        </>
      }
      { !post && 
        <>
          <h2>Post Not Found</h2>
          <p>well, that's disappointing</p>
          <p>
            <Link to='/'>Visit Our Homepage</Link>
          </p>
        </>

      }

        </article>
    </main>
  )
}

export default PostPage