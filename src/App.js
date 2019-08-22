import React from 'react';
import Connexion from './components/Connexion';
import CompteClient from './components/CreerCompte';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Connexion />
        <Route path='/creercompte' component={CompteClient} />
      </div>
    </BrowserRouter>
  );
}

export default App;
