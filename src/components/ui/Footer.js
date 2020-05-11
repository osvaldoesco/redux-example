import React from 'react';

import './footer.css';
import Logo from '../../assets/images/app-logo.png';

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <img 
          src={Logo} 
          alt="Logo" 
          style={{width: '30px', marginRight: '10px'}} />
        <span className="text-muted">Applaudo Studios - Osvaldo Escobar</span>
      </div>
    </footer>
  );
}  



