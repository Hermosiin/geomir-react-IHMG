import React, { useContext, useState} from 'react'
import '../App.css'
import { UserContext } from '../userContext'
import { Link } from 'react-router-dom'

export const PlaceList = ({place, deletePlace}) => {
  let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)


  return (
    <>
      <td>{place.id}</td>
      <td>{place.name}</td>
      <td>{place.author.name}</td>
      <td>{place.latitude}</td>
      <td>{place.longitude}</td>
      <td>{place.reviews_count}</td>
      <td>{place.visibility.name}</td>
      <td>{place.favorites_count} <i className="bi bi-star-fill"></i></td>

      <td><Link to={"/places/" +place.id}> <i className="bi bi-eye-fill"></i></Link></td>

      {(usuari == place.author.email ) &&  
      <td><Link to={"/places/edit/" +place.id}><i className="bi bi-pencil-fill"></i></Link></td>}

      {(usuari == place.author.email ) &&
      <td><button onClick={(e) => { deletePlace(e,place.id); }}><i className="bi bi-trash3-fill"></i></button></td>}

    </>
  )
}
