import '../styles/App.css';

import PokemonList from './PokemonList';
import Banner from './Banner';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Banner />
      <div className="App">
        <PokemonList />
      </div>
    </React.Fragment>
  );
};

export default App;
