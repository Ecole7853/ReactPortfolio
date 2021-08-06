import '../App.css';
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import Resume from "./Resume";

function ProfileContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  const [navColor, setNavColor] = useState(1)
   // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio/>;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe/>;
    }
    if (currentPage === 'Resume') {
      return <Resume/>;
    }
  };

const pageChanger = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header pageChanger = {pageChanger} currentPage = {currentPage} navColor={navColor} setNavColor={setNavColor}/>
      {renderPage()}
      <Footer/>
    </div>
  );
}
//20 (21-24)
export default ProfileContainer;