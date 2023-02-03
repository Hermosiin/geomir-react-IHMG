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

import PlaceAdd from "./places/PlaceAdd";
import PlaceEdit from "./places/PlaceEdit";
import PlacesGrid from "./places/PlacesGrid";
import PlacesList from "./places/PlacesList";
import PlacesMenu from "./places/PlacesMenu";




export default function App() {
  // difere`cnai entre emprar i no emprar state

  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");

  return (
    <>
      <UserContext.Provider
        value={{  usuari, setUsuari,authToken, setAuthToken }}
        // { authToken, setAuthToken } equival a  { authToken: authToken, setAuthToken:setAuthToken}
      >
        {authToken ? (
          <>
            <Header />

            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/posts" element={<Post />} />
              
              <Route path="/" element={<Post />} />
              <Route path="/about" element={<About />} />

              <Route path="/places/grid" element={<> <PlacesMenu/><PlacesGrid /> </>} />
              <Route path="/places" element={<> <PlacesMenu/><PlacesList /> </>} />
              <Route path="/places/add" element={<> <PlacesMenu/><PlaceAdd /> </>} />
              <Route path="/places/:id" element={<> <PlacesMenu/><Place /> </>} />
              <Route path="/places/edit/:id" element={<> <PlacesMenu/><PlaceEdit /> </>} />

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
