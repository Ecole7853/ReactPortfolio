import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import ContactMe from "./Components/ContactMe";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Project from "./Components/Project";

function App() {
  return (
    <Router>
      <div id="appContainer">
        <Header />
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/AboutMe">
          <AboutMe />
        </Route>
        <Route exact path="/ContactMe">
          <ContactMe />
        </Route>
        <Route exact path="/Project">
          <Project />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
