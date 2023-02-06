import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ContactMe from "./Components/ContactMe";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Project from "./Components/Project";

function App() {
  return (
    <Router>
      <div
        id="appContainer"
        className="xl:overflow-hidden bg-black ... w-FULL"
        
      >
        <Header />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/AboutMe" element={<AboutMe />}></Route>
          <Route path="/Contact" element={<ContactMe />}></Route>
          <Route path="/Project" element={<Project />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
