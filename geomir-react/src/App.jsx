import './App.css'
import React, { useState } from 'react';
import { UserContext } from "./userContext";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";
import LoginRegister from './auth/LoginRegister';
import About from "./About";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import NotFound from "./NotFound";

import Post from "./posts/Post";
import Place from "./places/Place";





export default function App() {
  // difere`cnai entre emprar i no emprar state

  let [authToken, setAuthToken] = useState("");

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
              <Route path="*" element={<NotFound />} />
              <Route path="/posts" element={<Post />} />
              <Route path="/places" element={<Place />} />
              <Route path="/" element={<Post />} />
              <Route path="/about" element={<About />} />
            </Routes>

            <Footer />
          </>
        ) : (
          <LoginRegister />
        )}
      </UserContext.Provider>
    </>
  );
}
