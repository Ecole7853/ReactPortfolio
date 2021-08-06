import './App.css';
import React, { useState } from "react";
import Home from "./components/Home";
import ProfileContainer from "./components/ProfileContainer";
import {BrowserRouter as Route, Switch, Router} from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={ProfileContainer}/>
      </Switch>
      </Router>
    </div>
  );
}
export default App;