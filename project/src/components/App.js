import React from "react";
import PlayersForm from './Form';

import PlayersList from './PlayersList'
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <h1>NBA Players w/ Redux</h1>
      <div>Welcome to your state management project!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <PlayersForm />
      <PlayersList />
      
    </div>
  );
}


export default App;
