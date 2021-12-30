import React, { useState } from 'react';
import Navigator from '.';
import Navtab from './Navtab';
import Resume from './Resume';
import Contact from './Contact';
import About from './About';
import index from './index';
import Project from '../Project';
function PortfolioContainer() {
  const [currentPage, handlePageChange] = useState('About me');

  const renderPage = () => {
    switch (currentPage) {
      case 'About me':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      case 'Project' :
        return <Project />;
    }
  };

  return (
    <div>
      <div>
        <header/>
      <Navtab currentPage={currentPage} handlePageChange={handlePageChange} />
      
      </div>
      
      <div>{renderPage(currentPage)}</div>
    </div>
  )
}

export default PortfolioContainer;