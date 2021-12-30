import React from 'react';

const Navtab = (props) => {
  const tabs = ['About me', 'Project', 'Contact', 'Resume'];
  return(
    
    <header>
    <h1><a href="/">Paul Barcenas</a></h1>
    {/* <PortfolioContainer></PortfolioContainer> */}
    <nav>
      <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className ="nav-item" key={tab}>
          <a
          href={'#' + tab.toLowerCase()}
          onClick={() => props.handlePageChange(tab)}
          className={
            props.currentPage === tab ? 'nav-link active' : 'nav-link'
          }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </nav>
</header>

  
    
  )
}

export default Navtab;