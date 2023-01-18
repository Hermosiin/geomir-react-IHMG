import React from 'react'

export default function Register({ setCanvi }) {
    return (
      <>
        <h1>Soc el Register</h1>
        <button
          onClick={() => {
            setCanvi(true);
          }}
        >
          Inicia Sessió
        </button>
      </>
    );
  }
  