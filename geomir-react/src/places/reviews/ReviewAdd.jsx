import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../userContext';
import { useParams } from "react-router-dom";
import './ReviewAdd.css'
export const ReviewAdd = ({refresh, setRefresh}) => {  
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

    const sendReview = async (e) => {
      e.preventDefault();
      let {review}=formulari;
      console.log(formulari);

      var formData = new FormData();
      formData.append("review", review);

      try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/"+id+"/reviews", {
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
          setSuccess("Review creado Correctamente");
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
            <h1>Add Review</h1>
            <form method='POST'>
              <div >
                <input type="text" placeholder="Review" id="review" name="review" maxLength="100" value={formulari.name} onChange={handleChange}/>
              </div>
              {error ? <div className="mensaje-error">{error}</div> : <></>}
              <div>
                <button onClick={(e) => {sendReview(e);}} type="submit" >Crear review</button>
              </div>
            </form>
          </div>;
}
export default ReviewAdd