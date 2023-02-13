import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useNavigate } from "react-router-dom";

export default function Place () {
  const { id } = useParams();
  let {usuari,setUsuari,authToken,setAuthToken } = useContext(UserContext)
  let [refresh,setRefresh] = useState(false)
  let [place, setPlaces] = useState({
    author:{name:""},
    name:"",
    description:"",
    latitude:"",
    longitude:"",
    favorites_count:"",
    reviews_count:"",
    file:{filepath:""}
  });
  let navigate = useNavigate();
  let [ favorito, setFavorito ] = useState(false);
  
  const getPlace = async () => {
    try{
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/" + id, {
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
        setPlaces(resposta.data)
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
        navigate("/places/")
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

  const comprobarFavorito = async (e) => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/"+id+"/favorites", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer '  + authToken,
        },
        method: "POST",
      })
      const resposta = await data.json();
      console.log(resposta);
      if (resposta.success == true){
        setFavorito(false);
        unfavorite();
      }else{
        setFavorito(true);
      }            
    } catch {
      console.log("Error");
    }
  };

  const favorite = async (e) => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/"+id+"/favorites", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer '  + authToken,
        },
        method: "POST",
      })
      const resposta = await data.json();
      console.log(resposta);
      if (resposta.success == true){
        setFavorito(true);
        alert("Favorito añadido correctamente")
      }else{
        alert("Ya tenias en favoritos este sitio");
        setFavorito(false);
      }            
      setRefresh(!refresh);
    } catch {
      console.log("Error");
    }
  };

  const unfavorite = async (e) => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/places/"+id+"/favorites", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer '  + authToken,
        },
        method: "DELETE",
      })
      const resposta = await data.json();
      console.log(resposta);
      if (resposta.success == true){
        setFavorito(false);
        console.log("Favorito quitado correctamente")
        //lo tenia puesto como alert pero cada vez que entraba a un place que no tenia favorite me salia el alert de quitado correctamente
      }else{
        alert("No tienes en favoritos este sitio");
      }            
      setRefresh(!refresh);
    } catch {
      console.log("Error");
    }
  };

  useEffect(() => { getPlace();}, [refresh]);
  useEffect(()=>{
    comprobarFavorito()
  }, []);
  return (

    <div>
      <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name} height="450"width="450"/>
      <h1>{place.name}</h1>
      <p>Author: {place.author.name}</p>
      <p>Description: {place.description}</p>
      <p>Latitude: {place.latitude}</p>
      <p>Longitude: {place.longitude}</p>
      <p>Favorites: {place.favorites_count} <i className="bi bi-star-fill"></i></p>
      <p>Este place tiene {place.reviews_count} reseñas.</p>

      <div>


        {(usuari == place.author.email ) &&  
        <Link to={"/places/edit/" +place.id}><i className="bi bi-pencil-fill"></i></Link>}

        <Link to={"/places/" +place.id+"/reviews"}><i className="bi bi-chat"></i></Link>

  
        {favorito == false &&
          <button onClick={(e) => {favorite(e, place.id);}} ><i className="bi bi-star"></i></button>}
        {favorito == true &&
          <button onClick={(e) => {unfavorite(e, place.id);}} ><i className="bi bi-star-fill"></i></button>}

        {(usuari == place.author.email ) &&
          <button onClick={(e) => { deletePlace(e,place.id);}}><i className="bi bi-trash3-fill"></i></button>}
  
      </div>

    </div>

  )
}
