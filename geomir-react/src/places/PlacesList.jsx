import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import './PlacesList.css';
import { PlaceList } from './PlaceList';



const PlacesList = () => {
  let [ places, setPlaces] = useState([]);
  let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)
  let [refresh,setRefresh] = useState(false)

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

    const deletePlace = async (e,id) =>{
      e.preventDefault();
      try{
        const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
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
          alert("Place eliminat correctament");
          console.log("Place eliminat correctament");
        }
        else{
          alert("El place no se ha podido eliminar");
          console.log(resposta.message);
        }
  
      }catch {
        console.log(data);
        console.log("catch");
      }
    }

    useEffect(()=>{
      getPlaces();
  }, [refresh])

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
          <th><h1>VISIBILITY</h1></th>
          <th><h1>FAVORITES</h1></th>
          <th colSpan={3}><h1>ACTIONS</h1></th>
        </tr>
      </thead>
      <tbody>

        {places.map((place) => (
          (place.visibility.name == 'public' || usuari == place.author.email) &&  
          (<tr  key={place.id}><PlaceList place={place} deletePlace={deletePlace} /></tr>)
        ))}
      </tbody>
    </table>
  </div>
</>
)
}

export default PlacesList