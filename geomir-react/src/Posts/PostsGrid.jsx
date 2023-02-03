import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import PostGrid from './PostGrid';
// import './PostGrid.css'

const PostsGrid = () => {
  let [ posts, setPosts] = useState([]);
  let {usuari, setUsuari, authToken, setAuthToken}=useContext(UserContext)

  const getPosts = async (e) => {
    try {

      const data = await fetch("https://backend.insjoaquimmir.cat/api/posts", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer '  + authToken,

        },
        method: "GET",
    })
      const resposta = await data.json();
      if (resposta.success == true )
      {
        setPosts(resposta.data);
        setAuthToken(authToken);  

      }else{
        console.log("La resposta /api/posts no ha triomfat")
      }            
      
    } catch {
      console.log("Error /api/posts");
      console.log("catch /api/posts");
    }
  };
  useEffect(()=>{
    getPosts();
}, [])
return (
  <>
      <div className='postgrid'>
        {posts.map((post) => (
          (post.visibility.name == 'public' || usuari == post.author.email) &&  
          ( <PostGrid key={post.id} post={post} />)
        ))}
        
      </div>  
  </>
)
}
        

export default PostsGrid