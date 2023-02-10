import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import PostGrid from './PostGrid';
// import './PostGrid.css'

const PostsGrid = () => {
  let [ posts, setPosts] = useState([]);
  let [refresh,setRefresh] = useState(false)
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
  
  const deletePost = async (e,id) =>{
    e.preventDefault();
    try{
      const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/" + id, {
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + authToken
        },
        method: "DELETE",
    })

      const resposta = await data.json();
      console.log(resposta);
      if (resposta.success === true) {
        setRefresh(!refresh);
        alert("Post eliminat correctament");
        console.log("Post eliminat correctament");
      }
      else{
        alert("El post no se ha podido eliminar");
        console.log(resposta.message);
      }

    }catch {
      console.log(data);
      console.log("catch");
    }
  }

  useEffect(()=>{
    getPosts();
}, [refresh])
return (
  <>
      <div className='postgrid'>
        {posts.map((post) => (
          (post.visibility.name == 'public' || usuari == post.author.email) &&  
          ( <PostGrid key={post.id} post={post} deletePost={deletePost}/>)
        ))}
        
      </div>  
  </>
)
}
        

export default PostsGrid