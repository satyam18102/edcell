import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Hero } from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Incubatees from "./components/Incubatees";
import EDCellHighlights from "./components/EDCellHighlights";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import EFest5 from "./components/EFest5";
import Innovation_Challenge from "./components/Innovation_Challenge";
import Members from "./components/Members"
import Loader from "./components/Loader";
import { useState, } from "react";
import Team from "./components/Team.jsx"

function App() {
  const [screenLoading, setScreenLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setScreenLoading(false);
    }, 2488);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <Router>
          <div className="dark">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Hero />
                    <Cards />
                    <EDCellHighlights />
                    <Incubatees />
                    <Team/>
                    <hr />
                    <Footer />
                  </>
                }
              />

          <Route
            path="/gallery"
            element={
              <>
                <Gallery />
              </>
            }
          />
          <Route
            path="/1"
            element={
                <EFest5 />
            }
          />
         
          <Route
            path="/2"
            element={
                <Innovation_Challenge />
            }
          />
          <Route
            path="/members"
            element={
              <>
                <Members />
              </>
            }
          />
                
               <Route
                path="/*"
                element={
                  <>
                    <Navbar />
                    <Hero />
                    <Cards />
                    <EDCellHighlights />
                    <Incubatees />
                    <Team/>
                    <hr />
                    <Footer />
                  </>
                }
              />
               
        </Routes>
      </div>
    </Router>)}
    </>
  );
}

export default App;
