import React, { useContext, useState} from 'react'
import './PlacesGrid.css';
import { UserContext } from '../userContext'
import { Link } from 'react-router-dom'

export const PlaceGrid = ({place, deletePlace}) => {
  let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)

  return (
    <>
        <div className="grid-place">
          <p>{place.author.name}</p>
          <h2>{place.name}</h2>
            <img src={"https://backend.insjoaquimmir.cat/storage/" + place.file.filepath} alt={place.name} height="400"width="300"/>
            <div>
                {place.description}     
            </div>
            <div>
                {place.favorites_count} <i className="bi bi-star-fill"></i>
            </div>
            <div>
                <Link to={"/places/" +place.id}> <i className="bi bi-eye-fill"></i></Link>

                {(usuari == place.author.email ) &&  
                <Link to={"/places/edit/" +place.id}><i className="bi bi-pencil-fill"></i></Link>}

                {(usuari == place.author.email ) &&
                <button onClick={(e) => { deletePlace(e,place.id);}}><i className="bi bi-trash3-fill"></i></button>}
   
            </div>
        </div>

    </>
  )
}
