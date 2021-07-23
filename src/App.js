import logo from './logo.svg';
import './reset.css';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;