import './App.css';
import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProfileContainer from "./components/ProfileContainer";
import ContactMe from "./components/ContactMe";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {

  return (  
  <Router>
    <div>
      <Route exact path="/"> 
      <Home />
      </Route>
      <Route exact path="/AboutMe"> 
      <AboutMe />
      </Route>
      <Route exact path="/Resume"> 
      <Resume />
      </Route>
      <Route exact path="/ContactMe"> 
      <ContactMe />
      </Route>
      <Route exact path="/Portfolio"> 
      <Portfolio />
      </Route>
      <Route exact path="/ProfileContainer"> 
      <ProfileContainer />
      </Route>   
      <Footer />
    </div>
    </Router> 
  );
}
export default App;