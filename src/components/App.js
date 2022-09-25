import '../styles/App.css';

import PokemonList from './PokemonList';
import Banner from './Banner';
import React from 'react';
import { useState } from 'react';

const App = () => {

  const [selected, privateUpdateSelected] = useState(new Set())
  const [toggle, triggerRender] = useState(false)

  // selected is an Object, we manually trigger rendering to
  // avoid re-copying the all list just to update Object address
  function updateSelected(el, isInsert) {
    if (isInsert) {
      privateUpdateSelected(selected.add(el));
      triggerRender(!toggle);
    }
    else {
      selected.delete(el);
      privateUpdateSelected(selected);
      triggerRender(!toggle);
    }
  }
  
  return (
    <React.Fragment>
      <Banner selected={selected}/>
      <div className="App">
        <PokemonList selected={selected} updateSelected={updateSelected} />
      </div>
    </React.Fragment>
  );
};

export default App;
