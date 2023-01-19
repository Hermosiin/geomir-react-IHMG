import React from 'react'
import './login-register.css'


export default function Register({ setCanvi }) {
    return (
      <>
        <form class="auth-inner">
          <h3>Registrar-se</h3>
          <div className="mb-3">
            <label>Nom</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nom"
            />
          </div>
          <div className="mb-3">
            <label>Cognom</label>
            <input type="text" className="form-control" placeholder="Cognom" />
          </div>
          <div className="mb-3">
            <label>Correu Electrònic</label>
            <input
              type="email"
              className="form-control"
              placeholder="Correu Electrònic"
            />
          </div>
          <div className="mb-3">
            <label>Contrasenya</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contrasenya"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
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
  