import React from 'react'
import { useParams } from 'react-router-dom';

function Place() {
  const { id } = useParams();

  return (
    <div>Place {id}</div>
  )
}

export default Place