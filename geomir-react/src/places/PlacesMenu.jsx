import React from 'react'
import './PlacesMenu.css';
import { Link } from 'react-router-dom';


function PlacesMenu() {
  return (
    <>
    <div>PLACES MENU</div>
    <div>
        <ul>
            <li><Link className="active" to="/places/add">Afegir entrada</Link></li>
            <li><Link to="/places/grid">Grid</Link></li>
            <li><Link to="/places">Llista</Link></li>
        </ul>
    </div>
    </>
  )
}

export default PlacesMenu