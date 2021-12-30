import React from 'react';

const Navigator = (props) => {
  const tabs = ['About me', 'Projects', 'Contact', 'Resume'];
  return(
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
    
  )
}

export default Navigator;