import './App.css'
import React, { useState } from 'react';
import { UserContext } from "./userContext";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";
import LoginRegister from './auth/LoginRegister';
import About from "./About";
import Header from "./Header";

let [authToken, setAuthToken] = useState("");


export default function App() {
  // difere`cnai entre emprar i no emprar state

  let [authToken, setAuthToken] = useState("abcd");

  return (
    <>
      <UserContext.Provider
        value={{ authToken, setAuthToken }}
        // { authToken, setAuthToken } equival a  { authToken: authToken, setAuthToken:setAuthToken}
      >
        {authToken ? (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </>
        ) : (
          <LoginRegister />
        )}
      </UserContext.Provider>
    </>
  );
}
