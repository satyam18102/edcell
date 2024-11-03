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
import SparkUpSummit from "./components/SparkUpSummit.jsx";
import SocialMedia from "./components/sparkupsummit/Team/SocialMedia";
import Marketing from "./components/sparkupsummit/Team/Marketing";
import Production from "./components/sparkupsummit/Team/Production";
import Finance from "./components/sparkupsummit/Team/Finance";
import Graphics from "./components/sparkupsummit/Team/Graphics";
import Leads from "./components/sparkupsummit/Team/Leads";
import Content from "./components/sparkupsummit/Team/Content";
import Creative from "./components/sparkupsummit/Team/Creative";
import Sponsorship from "./components/sparkupsummit/Team/Sponsorship";
import Logistics from "./components/sparkupsummit/Team/Logistics";
import Web from "./components/sparkupsummit/Team/Web"


function App() {
  const [screenLoading, setScreenLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setScreenLoading(false);
    }, 2488);
  }, []);
  return (
    <>
        <Router>
          <div className="dark">
            <Routes>
              <Route
                path="/"
                element={screenLoading ? (
                  <Loader />
                ) : (
                  <>
                    <Navbar />
                    <Hero />
                    <Cards />
                    <EDCellHighlights />
                    <Incubatees />
                    <Team/>
                    <hr />
                    <Footer />
                  </>)
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
          path="/sparkupsummit"
          element={<SparkUpSummit/>}
          />
          <Route path="/sparkupsummit/Web" element={<Web />} />
            <Route path="/sparkupsummit/SocialMedia" element={<SocialMedia />} />
            <Route path="/sparkupsummit/Marketing" element={<Marketing />} />
            <Route path="/sparkupsummit/Production" element={<Production />} />
            <Route path="/sparkupsummit/Finance" element={<Finance />} />
            <Route path="/sparkupsummit/Graphics" element={<Graphics />} />
            <Route path="/sparkupsummit/Leads" element={<Leads />} />
            <Route path="/sparkupsummit/Content" element={<Content />} />
            <Route path="/sparkupsummit/Creative" element={<Creative />} />
            <Route path="/sparkupsummit/Sponsorship" element={<Sponsorship />} />
            <Route path="/sparkupsummit/Logistics" element={<Logistics />} />
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
    </Router>
    </>
  );
}

export default App;
