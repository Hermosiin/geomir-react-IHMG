import React from 'react'
import {useContext } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom'
import './PostGrid.css'


const PostGrid =({post, deletePost}) => {
    let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)
  return (
    <>  
        <div className='div-cartas'>
            <div className='nombre'>
                <p>@{post.author.name}</p>
            </div>
            <div className='img-post'>
                <img src={"https://backend.insjoaquimmir.cat/storage/" + post.file.filepath} alt={post.name} height="400"width="300"/>
            </div>
            
            <div className='body-post'>
                {post.body}  
                <br></br>  
                Latitud: {post.latitude}
                <br />
                 Longitud: {post.longitude}
            </div>
            <div className='likes-post'>
                <p><i class="bi bi-heart-fill"> {post.likes_count}</i></p>
                <Link to={"/posts/" +post.id}> <i className="bi bi-eye-fill"></i></Link>

                {(usuari == post.author.email ) &&  
                <Link to={"/posts/edit/" +post.id}><i className="bi bi-pencil-fill"></i></Link>}

                {(usuari == post.author.email ) &&
                <button onClick={(e) => { deletePost(e,post.id);}}><i className="bi bi-trash3-fill"></i></button>}
            </div>
        </div>
    </>
  )
}

export default PostGrid