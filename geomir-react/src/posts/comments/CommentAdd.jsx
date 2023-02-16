import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../userContext';
import { useParams } from "react-router-dom";
import './CommentAdd.css'
export const CommentAdd = ({refresh, setRefresh}) => {  
    const { id } = useParams();
    let [formulari, setFormulari] = useState({});
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");
    let {authToken, setAuthToken}=useContext(UserContext);
  
    const handleChange = (e) => {
      e.preventDefault();
      setFormulari({
          ...formulari,
          [e.target.name] : e.target.value
      })
    };

    const sendComment = async (e) => {
      e.preventDefault();
      let {comment}=formulari;
      console.log(formulari);

      var formData = new FormData();
      formData.append("comment", comment);

      try {
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
          setSuccess("Comment creado Correctamente");
          setRefresh(!refresh);
          setFormulari({});
      }else{
          console.log(formulari)
          setError(resposta.message);
      } 
          
      }catch{
      console.log("Error");
      // alert("catch");
      }
    }

    return <div >
            {success ? <div>{success}</div> : <></>}
            <h1>Add Comment</h1>
            <form method='POST'>
              <div >
                <input type="text" placeholder="Comment" id="comment" name="comment" maxLength="100" value={formulari.name} onChange={handleChange}/>
              </div>
              {error ? <div className="mensaje-error">{error}</div> : <></>}
              <div>
                <button onClick={(e) => {sendComment(e);}} type="submit" >Crear comment</button>
              </div>
            </form>
          </div>;
}
export default CommentAdd