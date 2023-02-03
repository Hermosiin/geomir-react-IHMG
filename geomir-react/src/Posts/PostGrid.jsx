import React from 'react'
import {useContext } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom'
import './PostGrid.css'


const PostGrid =({post}) => {
    let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)
  return (
    <>  
        <div className='div-cartas'>
            <div className='nameAuthor'>
                <p>@{post.author.name}</p>
            </div>
            <div className='postimg'>
                <img src={"https://backend.insjoaquimmir.cat/storage/" + post.file.filepath} alt={post.name} height="400"width="300"/>
            </div>
            
            <div className='bodyPost'>
                {post.body}    
            </div>
            <div className='likespost'>
                <p><i class="bi bi-heart-fill"> {post.likes_count}</i></p>
                <Link to={"/posts/" +post.id}> <i className="bi bi-eye-fill"></i></Link>

                {(usuari == post.author.email ) &&  
                <Link to={"/posts/edit/" +post.id}><i className="bi bi-pencil-fill"></i></Link>}

                {(usuari == post.author.email ) &&
                <Link to={"/posts/delete/" +post.id}> <i className="bi bi-trash3-fill"></i></Link>}
            </div>
        </div>
    </>
  )
}

export default PostGrid