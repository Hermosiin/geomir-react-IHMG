import React, { useContext, useState} from 'react'
import '../App.css'
import { UserContext } from '../userContext'
import { Link } from 'react-router-dom'

export const PlaceList = ({place}) => {
let { authToken,setAuthToken } = useContext(UserContext)

  return (
    <>
        <td>{place.id}</td>
        <td>{place.name}</td>
        <td>{place.author.name}</td>
        <td>{place.latitude}</td>
        <td>{place.longitude}</td>
        <td>{place.reviews_count}</td>
        <td>{place.visibility.name}</td>
        <td>{place.favorites_count}</td>
        

    </>
  )
}
