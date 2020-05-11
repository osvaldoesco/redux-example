import React from 'react';

import ReduxLogo from '../assets/images/redux-logo.png';

function Home() {
  return (
    <div className="row"> 
      <div className="col-md-6 text-center">
        <img src={ReduxLogo} alt="Redux" />
      </div>
      <div className="col-md-6">
        <h2 className="mt-4">Redux Example</h2>
        <p>
          Small example about Redux with React using&nbsp;
          <a href="https://pokemontcg.io/"> https://pokemontcg.io</a>&nbsp; 
          as example.
        </p>
      </div>
    </div>
  );
}

export default Home;