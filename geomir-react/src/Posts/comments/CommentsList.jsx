import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from "../../userContext";
import '../../App.css'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

export default function CommentsList () {
    const { id } = useParams();
    let [comments, setComments] = useState([]);
    let { authToken,setAuthToken } = useContext(UserContext);

    const getComments = async() =>{
      
      try{
        const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/" + id + "/comments", {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + authToken
          },
          method: "GET"

        })
        const resposta = await data.json();
        if (resposta.success === true){
          console.log(resposta.data);
          setComments(resposta.data);
        } 

        else{
          console.log(comments)
          alert("La resposta no ha triomfat");
        } 
          
      }catch{
        console.log("Error");
        alert("catch");
      }

    }
    
    useEffect(() => {
      getComments();
      
    }, [])
  return (
    <>
    <div>
        <h1>REVIEWS PLACE {id}</h1>
        {comments.map((comment) => (
            (<p key={comment.id}>- {comment.user.name}: {comment.comment}</p>)
        ))}
    </div>
    <div>
        <Link to={"/posts/" +id+"/comments/add"}> <i className="bi bi-plus-circle"></i></Link>

    </div>
    </>
  )
}