import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from "../../userContext";
import './ReviewAdd.css'
import { useNavigate } from "react-router-dom";

export default function ReviewAdd () {
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
    const addReview = async(e) => {
      e.preventDefault();
      let {review}=formulari;
      console.log(formulari);
      var formData = new FormData();
      formData.append("review", review);

      try{
        const data = await fetch("https://backend.insjoaquimmir.cat/api/places/"+id+"/reviews", {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + authToken
          },
          method: "POST",
          body: formData

        })
        const resposta = await data.json();
        console.log(resposta)
        if (resposta.success === true){
          console.log(resposta);
          alert("Review creado correctamente");
          setFormulari({});
          navigate("/places/"+ id + "/reviews")
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
      addReview();

    }, [])

  return (
    <div>
        <div>
          <form id="formulario">
            <div><h1>Add Review</h1></div>

            <div>
              <label>Review: </label>
              <input type="text" placeholder="Review" id="review" name="review" onChange={handleChange}/>
            </div>
            <div>{ error ? (<div className="mensaje-error"> {error}</div>) : (<></>)}</div>

            
            <button
              onClick={(e) => {
                addReview(e);
              }}>
              Submit
            </button>		

          </form>
        </div>		
    </div>
  )
}