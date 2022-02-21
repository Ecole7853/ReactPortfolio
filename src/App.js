import './App.css';
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ContactMe from "./Components/ContactMe";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";

function App() {

  return (  
  <Router>
    <div id="appContainer">
      <Route exact path="/"> 
      <AboutMe />
      </Route>
      <Route exact path="/AboutMe"> 
      <AboutMe />
      </Route>
      <Route exact path="/ContactMe"> 
      <ContactMe />
      </Route> 
      <Footer />
    </div>
    </Router> 
  );
}
export default App;