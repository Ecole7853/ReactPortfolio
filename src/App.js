import './App.css';
import React from "react";
import Home from "./Components/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProfileContainer from "./Components/ProfileContainer";
import ContactMe from "./Components/ContactMe";
import Portfolio from "./Components/Portfolio";
import AboutMe from "./Components/AboutMe";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";

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