import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import './PlacesList.css';
import { PlaceList } from './PlaceList';


const PlacesList = () => {
  let [ places, setPlaces] = useState([]);
  let {authToken, setAuthToken}=useContext(UserContext)


  const getPlaces = async (e) => {
      try {
  
        const data = await fetch("https://backend.insjoaquimmir.cat/api/places", {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": 'Bearer '  + authToken,
  
          },
          method: "GET",
      })
        const resposta = await data.json();
        console.log(resposta);
        if (resposta.success == true )
        {
          setPlaces(resposta.data);
          setAuthToken(authToken);  
          console.log(places); 

         
        }else{
          console.log("La resposta no ha triomfat");
  
        }            
        
      } catch {
        console.log("Error");
        console.log("catch");
      }
    };
    useEffect(()=>{
      getPlaces();
  }, [])

return (
  <>
  <div>PlacesList</div>
  <div className="container">

    <table className="table">
      <thead>
        <tr>
          <th><h1>ID</h1></th>
          <th><h1>NAME</h1></th>
          <th><h1>AUTHOR</h1></th>
          <th><h1>LATITUDE</h1></th>
          <th><h1>LONGITUDE</h1></th>
          <th><h1>REVIEWS</h1></th>
          <th><h1>Visibility</h1></th>
          <th><h1>Favorites</h1></th>
        </tr>
      </thead>
      <tbody>
        {places.map((place) => ( 
          (<tr  key={place.id}><PlaceList place={place} /></tr>)
        ))}
      </tbody>
    </table>
  </div>
</>
)
}

export default PlacesList