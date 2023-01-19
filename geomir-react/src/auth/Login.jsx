import React from 'react'
import './login-register.css'


export default function Login({ setCanvi }) {
    return (
      <>
        <form class="auth-inner">
          <h3>Iniciar Sessió</h3>
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
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                &nbsp;Recorda'm
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
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