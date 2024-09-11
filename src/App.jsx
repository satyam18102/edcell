import React from "react";
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

function App() {
  return (
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
              <>
                <EFest5 />
              </>
            }
          />
          <Route
            path="/2"
            element={
              <>
                <Innovation_Challenge />
              </>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
