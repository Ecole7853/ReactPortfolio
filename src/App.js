import logo from './logo.svg';
import './reset.css';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;