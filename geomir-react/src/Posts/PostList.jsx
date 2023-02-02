import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom'
import '../App.css'


export default function PostList ({post})  {
  let { authToken,setAuthToken } = useContext(UserContext)

  return (
    <>
        <td>{post.id}</td>
        <td>{post.body}</td>
        <td>{post.author.name}</td>
        <td>{post.latitude}</td>
        <td>{post.longitude}</td>
        <td>{post.visibility.name}</td>
        <td>{post.likes_count} <i class="bi bi-heart-fill"></i></td>   

        <td><Link to={"/posts/" +post.id}> <i className="bi bi-eye-fill"></i></Link></td>
        <td><Link to={"/posts/edit/" +post.id}> <i className="bi bi-pencil-fill"></i></Link></td>
        <td><Link to={"/posts/delete/" +post.id}> <i className="bi bi-trash3-fill"></i></Link></td>
    </>
  )
}