import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from "../../userContext";
import './CommentAdd.css'
import { useNavigate } from "react-router-dom";

export default function CommentAdd () {
  let [formulari, setFormulari] = useState({});
  let { authToken,setAuthToken } = useContext(UserContext);
  let [error, setError] = useState("");
  let navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

        setFormulari({
        ...formulari,
        [e.target.name] : e.target.value

        })
      
  }
    const addComment = async(e) => {
      e.preventDefault();
      let {review}=formulari;
      console.log(formulari);
      var formData = new FormData();
      formData.append("comment", comment);

      try{
        const data = await fetch("https://backend.insjoaquimmir.cat/api/posts/"+id+"/comments", {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + authToken
          },
          method: "POST",
          body: formData

        })
        const resposta = await data.json();
        if (resposta.success === true){
          console.log(resposta);
          alert("Review creado correctamente");
          setFormulari({});
          navigate("/posts/"+ id + "/comments")
        } 

        else{
          console.log(formulari)
          setError(resposta.message);
        } 
          
      }catch{
        console.log("Error");
        alert("catch");
      }
      
    }
    useEffect(() => {
      addComment();

    }, [])

  return (
    <div>
        <div>
          <form id="formulario">
            <div><h1>Add Comment</h1></div>

            <div>
              <label>Review: </label>
              <input type="text" placeholder="Comment" id="comment" name="comment" onChange={handleChange}/>
            </div>

            
            <button
              onClick={(e) => {
                addComment(e);
              }}>
              Submit
            </button>		

          </form>
        </div>		
    </div>
  )
}