import { useContext, useState } from 'react';
import React from 'react'
import './login-register.css'
import { UserContext } from '../userContext';


export default function Login({ setCanvi }) {

    let [correu, setCorreu] = useState("");
    let [contra, setContra] = useState("");
    let [error, setError] = useState("");
    let {authToken, setAuthToken} = useContext(UserContext);

  

    const sendLogin = async (e) => {
      e.preventDefault();
      console.log("Comprovant credencials....");
    
      // Enviam dades a l'aPI i recollim resultat
      try {
        const data = await fetch("https://backend.insjoaquimmir.cat/api/login", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ email : correu, password : contra })
        });
  
  
        const resposta = await data.json();
        if (resposta.success === true){
          alert(resposta.authToken);
          setAuthToken(resposta.authToken);

        }
          
        else 
          alert("La resposta no ha triomfat");
          console.log(resposta)
          setError(resposta.message);
  
  
        alert("He enviat les Dades:  " + correu + "/" + contra);
      } catch {
        console.log("Error");
        alert("catch");
      }
    };
  

  
    return (
      <>
        <form className="auth-inner">
          <h3>Iniciar Sessió</h3>
          <div className="mb-3">
            <label>Correu Electrònic</label>
            <input
              name="correu"
              type="email"
              className="form-control"
              placeholder="Correu Electrònic"
              onChange={(e) => {
                setCorreu(e.target.value);
              }}
            />

          </div>
          <div className="mb-3">
            <label>Contrasenya</label>
            <input
              name="contra"
              type="password"
              className="form-control"
              placeholder="Contrasenya"
              onChange={(e) => {
                setContra(e.target.value);
              }}
            />
          </div>
          { error ? (<div className="mensaje-error"> {error}</div>) : (<></>)} 
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" 
              onClick={(e) => {
                sendLogin(e);
              }}
            >
              Iniciar Sessió
            </button>

            
            </div>
          <p className="forgot-password text-right">
            Encara no tenns compta? <a className="link-cambiar"onClick={() => { setCanvi(false); }}> Registrar Compta </a>
          </p>
        </form>
      </>
    );
  }