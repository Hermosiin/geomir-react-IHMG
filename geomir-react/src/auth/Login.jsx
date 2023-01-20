import { useState } from 'react';
import React from 'react'
import './login-register.css'


export default function Login({ setCanvi }) {

    let [correu, setCorreu] = useState("");
    let [contra, setContra] = useState("");

    const sendLogin = (e) => {
      e.preventDefault();
  
      alert("He enviat les Dades:  " + correu + "/" + contra);
    };

    return (
      <>
        <form class="auth-inner">
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
            Encara no tenns compta? <a class="link-cambiar"onClick={() => { setCanvi(false); }}> Registrar Compta </a>
          </p>
        </form>
      </>
    );
  }