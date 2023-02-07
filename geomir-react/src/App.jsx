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
import { useParams } from 'react-router-dom';

import Place from "./places/Place";

import Post from "./Posts/Post";
import PostAdd from "./Posts/PostAdd";
import PostEdit from "./Posts/PostEdit";
import PostsGrid from "./Posts/PostsGrid";
import PostsList from "./Posts/PostsList";
import PostMenu from './Posts/PostMenu';


export default function App() {
  // difere`cnai entre emprar i no emprar state

  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");



  return (
    <>
      <UserContext.Provider
      value= { { usuari, setUsuari,authToken,setAuthToken }} // { authToken, setAuthToken } equival a  { authToken: authToken, setAuthToken:setAuthToken}
      >
        {authToken ? (
          <>
            <Header />

            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Post />} />
              <Route path="/places" element={<Place />} />
              <Route path="/about" element={<About />} />


              <Route path="/posts" element={<> <PostMenu/><PostsList /> </>} /> 
              <Route path="/posts/grid" element={<> <PostMenu/><PostsGrid /> </>} /> 
              <Route path="/posts/add" element={<> <PostMenu/><PostAdd /> </>} /> 
              <Route path="/posts/:id" element={<> <PostMenu/><Post /> </>} /> 
              <Route path="/posts/edit/:id" element={<> <PostMenu/><PostEdit /> </>} /> 
 
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
