import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({post }) => {
  return (
    <article className='Posts'>
        <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.dateTime} </p>
        </Link>
        <p className='postBody'>
        { (post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...`


        }

        </p>
    </article>
  )
}

export default Posts