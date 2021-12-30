import React from 'react';
import './App.css';
import Navigator from './components/Navigator';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import Resume from './components/Navigator/Resume';
 import PortfolioContainer from './components/Navigator/PortfolioContainer';
 import About from './components/Navigator/About';
 import Navtab from './components/Navigator/Navtab';
function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <PortfolioContainer></PortfolioContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;