import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from "../../userContext";
import '../../App.css'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ReviewsList () {
    const { id } = useParams();
    let [reviews, setReviews] = useState([]);
    let { authToken,setAuthToken } = useContext(UserContext);

    const getReviews = async() =>{
      
      try{
        const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id + "/reviews", {
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + authToken
          },
          method: "GET"

        })
        const resposta = await data.json();
        if (resposta.success === true){
          console.log(resposta.data);
          setReviews(resposta.data);
        } 

        else{
          console.log(reviews)
          alert("La resposta no ha triomfat");
        } 
          
      }catch{
        console.log("Error");
        alert("catch");
      }

    }
    
    useEffect(() => {
      getReviews();
      
    }, [])
  return (
    <>
    <div>
        <h1>REVIEWS PLACE {id}</h1>
        {reviews.map((review) => (
            (<p key={review.id}>- {review.user.name}: {review.review}</p>)
        ))}
    </div>
    </>
  )
}