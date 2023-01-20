import { useState } from 'react';
import React from 'react'
import './login-register.css'


export default function Register({ setCanvi }) {

    let [formulari, setFormulari] = useState({});

    const handleChange = (e) => {
      e.preventDefault();
  
      setFormulari({
        ...formulari,
        [e.target.name]: e.target.value
      });
    };

    const handleRegister = (e) => {
      e.preventDefault();
  
      let { nom, correu, contra } = formulari;
      alert(
        "He enviat les Dades:  " +
          nom +
          "/" +
          correu +
          "/" +
          contra 
      );
    };

    return (
      <>
        <form class="auth-inner">
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
              name="contra"
              type="password"
              className="form-control"
              placeholder="Contrasenya"
              onChange={handleChange}
            />
          </div>
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
            Ja tens compta? <a class="link-cambiar" onClick={() => { setCanvi(true);}}> Inicia Sessió </a>
          </p>
        </form>
        
      </>
    );
  }
  