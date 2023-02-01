import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom'


export default function PostList ({post})  {
  let { user, setUser,authToken,setAuthToken } = useContext(UserContext)

  return (
    <>
        <td>{post.id}</td>
        <td>{post.name}</td>
        <td>{post.author.name}</td>
        <td>{post.latitude}</td>
        <td>{post.longitude}</td>
        <td>{post.visibility.name}</td>
        <td><i className="bi bi-star-fill"></i>{post.likes_count}</td>
        
        
    </>
  )
}