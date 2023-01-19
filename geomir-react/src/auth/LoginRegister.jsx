import React from 'react'
import Login from './Login';
import Register from './Register';
import { useState } from 'react';

function LoginRegister() {

    let [login, setLogin] = useState(true);

  return (
    <div>
      {login ? <Login setCanvi={setLogin} /> : <Register setCanvi={setLogin} />}
    </div>
  )
}

export default LoginRegister