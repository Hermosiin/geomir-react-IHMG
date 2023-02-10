import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../userContext';


export default function Post () {
  const { id } = useParams();
  let {usuari,setUsuari,authToken,setAuthToken } = useContext(UserContext)
  let [refresh,setRefresh] = useState(false)
  let [post, setPosts] = useState({
    author:{name:""},
    body:"",
    latitude:"",
    longitude:"",
    likes_count:"",
    coments_count:"",
    file:{filepath:""}
  });
  
  const getPost = async () => {
    try{
      const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/" + id, {
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + authToken
        },
        method: "GET",
      })

      const resposta = await data.json();
      console.log(resposta);
      if (resposta.success === true) {
        setPosts(resposta.data)
        console.log(resposta);
      }
      else{
        console.log("La resposta no ha triomfat");
        alert(resposta.message);
      }

    }catch {
      console.log("Error");
      alert("catch")
    }
  }
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

  useEffect(() => { getPost();}, [refresh]);
  return (

    <div className='div-show'>
      <div className='nombre'>
          <p>@{post.author.name}</p>
      </div>
      <div className='img-post'>
          <img src={"https://backend.insjoaquimmir.cat/storage/" + post.file.filepath} alt={post.name} />
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
  )
}