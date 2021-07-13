import React from 'react';

const Home = () => {
  return(
    <div>
      <div>I'm a new home component</div>
      <button onClick={ () => console.log('HIIII') }>Press me!!</button>
    </div>
  );    
};

export default Home;