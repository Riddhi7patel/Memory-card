import React from 'react';
import GameBoard from './components/GameBoard';
import './components/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Card Game</h1>
        <GameBoard />
      </header>
    </div>
  );
}

export default App;
