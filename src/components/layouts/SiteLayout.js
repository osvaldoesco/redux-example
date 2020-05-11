import React from 'react';

import Header from '../ui/Header';
import Footer from '../ui/Footer';

const SiteLayout = ({children}) => {
    return (
      <div className="App">
        <Header/>
        <div className="container mt-5">
          {children}   
        </div> 
        <Footer/>
      </div> 
    );
}

export default SiteLayout;