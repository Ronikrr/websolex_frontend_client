import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import WOW from "wow.js";
import "animate.css";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Portfolioview from "./components/portfolioview";
import Service from "./pages/service";
import Contact from "./pages/contact"; // Ensure this matches the exported name
import Company from "./pages/company"; // Ensure this matches the exported name
import Webdevelopment from "./components/webdevelopment";
import Graphic from "./components/graphic";
import Uiux from "./components/design";
import MobileApp from "./components/mobileapps";
import Digital from "./components/digital";
import Blog from "./pages/blogpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Bussines from './components/bussines';
import Businesspage from "./pages/businesspage";
import Career from "./pages/career";
// import { useEffect } from 'react'
import Thankyou from "./components/thankyou";
import Notfound from "./pages/notfound";
import { BeatLoader } from "react-spinners";
const Layout = ({ children }) => {

  
  return (
    <>
      <Header />
      <main className="m-0 p-0"> {children} </main>
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    const wow = new WOW();
    wow.init(); // Initialize WOW.js
  }, []);
 
  return (
      <Router>
     
        <Routes>
          <Route path="/" element={ <Layout><Home /></Layout> } />
          <Route path="/portfolio" element={ <Layout><Portfolio /></Layout> } />
          <Route path="/portfolio/:portfolioid" element={ <Layout><Portfolioview /></Layout> } />
          <Route path="/company" element={ <Layout><Company /></Layout> } />
          <Route path="/contact" element={ <Layout><Contact /></Layout> } />
          <Route path="/service" element={ <Layout><Service /></Layout> } />
          <Route path="/service/webdevelopment" element={ <Layout><Webdevelopment /></Layout> } />
          <Route path="/service/graphic" element={ <Layout><Graphic /></Layout> } />
          <Route path="/service/uiux" element={ <Layout><Uiux /></Layout> } />
          <Route path="/service/mobileapps" element={ <Layout><MobileApp /></Layout>}  />
          <Route path="/service/digital" element={ <Layout><Digital /></Layout> } />
          <Route path="/blog" element={ <Layout><Blog /></Layout> } />
          <Route path="/blog/:blogid" element={ <Layout><Businesspage /></Layout> } />
          <Route path="/Career" element={ <Layout><Career /></Layout> } />
          <Route path="/thankyou" element={ <Layout><Thankyou /></Layout> } />
          <Route path="*" element={<Notfound />} />
          {/* <Route path='/blog/bussiness' element={<Bussines/>} /> */}
        </Routes>
       
      </Router>
    )
  
}

export default App;
