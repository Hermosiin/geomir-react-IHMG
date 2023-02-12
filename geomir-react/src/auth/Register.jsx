import { useState } from 'react';
import React from 'react'
import './login-register.css'
import { UserContext } from '../userContext';
import { useContext } from 'react';


export default function Register({ setCanvi }) {

    let [formulari, setFormulari] = useState({});
    let [error, setError] = useState("");
    let {authToken, setAuthToken} = useContext(UserContext);

    const handleChange = (e) => {
      e.preventDefault();
  
      setFormulari({
        ...formulari,
        [e.target.name]: e.target.value
      });
    };

    const handleRegister = async (e) => {
      e.preventDefault();
      console.log("Comprovant credencials....");

      let { nom, correu, contra1, contra2 } = formulari;

      alert(
        "He enviat les Dades:  " +
          nom +
          "/" +
          correu +
          "/" +
          contra1 +  
          "/" +
          contra2 
      );

      if (contra2 !== contra1) {
        alert("Els passwords han de coincidir");
        return false;
      }
    
      // Enviam dades a l'aPI i recollim resultat
      try {
        const data = await fetch("https://backend.insjoaquimmir.cat/api/register", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ name : nom, email : correu, password : contra1 })
        });
  
  
        const resposta = await data.json();
        if (resposta.success === true){
          alert("Te has registrado correctamente")
          console.log(resposta.authToken);
          setAuthToken(resposta.authToken);

        }
          
        else 
          alert("La resposta no ha triomfat");
          console.log(resposta)
          setError(resposta.message);
  
  

      } catch {
        console.log("Error");
        alert("catch");
      }
    };
    
    return (
      <>
        <form className="auth-inner">
          <h3>Registrar-se</h3>
          <div className="mb-3">
            <label>Nom i Cognom</label>
            <input
              name="nom"
              type="text"
              className="form-control"
              placeholder="Nom i Cognom"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Correu Electrònic</label>
            <input
              name="correu"
              type="email"
              className="form-control"
              placeholder="Correu Electrònic"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Contrasenya</label>
            <input
              name="contra1"
              type="password"
              className="form-control"
              placeholder="Contrasenya"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Confirma la Contrasenya</label>
            <input
              name="contra2"
              type="password"
              className="form-control"
              placeholder="Confirmar Contrasenya"
              onChange={handleChange}
            />
          </div>
          { error ? (<div className="mensaje-error"> {error}</div>) : (<></>)} 
          <div className="d-grid">
            <button type="submit" className="btn btn-primary"
              onClick={(e) => {
                handleRegister(e);
              }}
            >
              Registrar-se
            </button>
          </div>
          <p className="forgot-password text-right">
            Ja tens compta? <a className="link-cambiar" onClick={() => { setCanvi(true);}}> Inicia Sessió </a>
          </p>
        </form>
        
      </>
    );
  }
  