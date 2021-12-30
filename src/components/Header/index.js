import React from 'react';
import Navtab from '../Navigator/Navtab';
import PortfolioContainer from '../Navigator/PortfolioContainer';
import About from '../Navigator/About';
const Header = () => {

  //   return (
  //     <header>
  //     <h1><a href="/">Paul Barcenas</a></h1>
  //     <nav>
  //         <ul>
  //             <li>
  //                 <a href="#about-me">About Me</a>
  //             </li>
  //             <li>
  //                 <a href="#work">Work</a>
  //             </li>
  //             <li>
  //                 <a href="#contact-me">Contact Me</a>
  //             </li>

  //             <li>
  //                 <a href="#resume">Resume:TBD</a>
  //             </li>
  //         </ul>
  //     </nav>
  // </header>
  //   )

  return (

    <div>
      {/* <header>
        <h1><a href="/">Paul Barcenas</a></h1>
      </header> */}
      <header><h1><a href="/">Paul Barcenas</a></h1>
      <PortfolioContainer></PortfolioContainer>
      </header>
      
    </div>
  )
}

export default Header;