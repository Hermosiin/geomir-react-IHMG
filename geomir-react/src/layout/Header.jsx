import  React  from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useState, useContext } from 'react';
import './Header.css'
import { useEffect } from 'react';



export default function Header() {
  let {authToken, setAuthToken}=useContext(UserContext)
  let [nom, setNom]=useState("");
  let [role, setRole]=useState([]); 

  const getUser = async () => {

    console.log("Comprovant credencials....");
  
    // Enviam dades a l'aPI i recollim resultat
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/user", {
        headers: {
          Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer '  + authToken,

        },
        method: "GET",
      });

      const resposta = await data.json();
      if (resposta.success === true){
        console.log(resposta.authToken);
        setNom(resposta.user.name);    
        setRole(resposta.roles)    

      }
        
      else 
        alert("La resposta no ha triomfat");
        console.log(resposta)

    } catch {
      console.log("Error");
      alert("catch");
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    console.log("Comprovant credencials....");
  
    // Enviam dades a l'aPI i recollim resultat
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/logout", {
        headers: {
          Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer '  + authToken,

        },
        method: "POST",
      });

      const resposta = await data.json();
      if (resposta.success === true){
        console.log(resposta.authToken);
         setAuthToken('')    

      }
        
      else 
        alert("La resposta no ha triomfat");
        console.log(resposta)

    } catch {
      console.log("Error");
      alert("catch");
    }
  };

  useEffect(() => {
    getUser();
  }, [])


  return (
    <>
      <div className='cabecera'>
        <div className='botones'>
          <Link to="/places" >Places </Link>
          <Link to="/posts">Posts </Link>
          <Link to="/about">About </Link>
        </div>
        <p className='roles-name'> USER: {nom} ROLE: { role.map (  (v)=> ( 
          <span key={v}> {v} </span> 
        ) ) } 
        </p>
        <button className='boton-logout'
          onClick={(e) => {
            logout(e);
          }}> Log Out 
        </button>
      </div>
      <hr />
    </>
  );
}