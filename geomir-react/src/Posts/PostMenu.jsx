import React from 'react'
import { Link } from 'react-router-dom'
import './PostMenu.css'

function PostMenu() {
  return (
    <>
    <div className="container">
      <ul>
        <li><Link class="active" to="/post/add">Afegir Post</Link></li>
        <li><Link to="/post/grid">Grid</Link></li>
        <li><Link to="/post">List</Link></li>
      </ul>
    </div>
    </>
  )
}

export default PostMenu