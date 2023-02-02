import React from 'react'
import { useParams } from 'react-router-dom';

function PlaceEdit() {
    const { id } = useParams();

  return (
    <div>PlaceEdit {id}</div>

  )
}

export default PlaceEdit