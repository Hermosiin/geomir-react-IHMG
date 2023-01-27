import  React  from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useState, useContext } from 'react';
import './header-footer.css';
import { useEffect } from 'react';



export default function Header() {
  let {authToken, setAuthToken}=useContext(UserContext)
  let [nom, setNom]=useState("");
  let [role, setRole]=useState([]); 

  useEffect(() => {

    fetch("https://backend.insjoaquimmir.cat/api/user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer '  + authToken,

      },
      method: "GET",
    })
      .then((data) => data.json())
      .then((resposta) => {
        console.log(resposta);
        if (resposta.success === true) {
          console.log(resposta.authToken);
          setNom(resposta.user.name);    
          setRole(resposta.roles)     
        }
      })
      .catch((data) => {
        console.log(data);
        console.log("Catchch");
      });  
  }, [])

    const logout = (e) => { 
    e.preventDefault();
    console.log("Comprovant credencials....");
    // Enviam dades a l'aPI i recollim resultat
    fetch("https://backend.insjoaquimmir.cat/api/logout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer '  + authToken,

      },
      method: "POST",
    })
      .then((data) => data.json())
      .then((resposta) => {
       console.log(resposta);
       if (resposta.success === true) {
         console.log(resposta.authToken);
         setAuthToken('')
       }
     })
      .catch((data) => {
        console.log(data);
        console.log("Catchch");
     });  
   };
  return (
    <>
      <div>
        <Link to="/places">Places </Link>
        <Link to="/posts">Posts </Link>
        <Link to="/about">About </Link>
        <button
            onClick={(e) => {
              logout(e);
            }}> {nom} Log Out { role.map (  (v)=> ( 
              <span key={v}> {v} </span>
    ) ) }</button>
      </div>
      <hr />
    </>
  );
}