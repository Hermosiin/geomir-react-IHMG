import React from 'react'
import { Link } from 'react-router-dom'
import './PostMenu.css'

function PostMenu() {
  return (
    <>
    <div className="container">
      <ul>
        <li><Link class="active" to="/posts/add">Afegir Post</Link></li>
        <li><Link to="/posts/grid">Grid</Link></li>
        <li><Link to="/posts">List</Link></li>
      </ul>
    </div>
    </>
  )
}

export default PostMenu