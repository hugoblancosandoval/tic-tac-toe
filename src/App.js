import { useState } from 'react'
import './App.css';
import './game.css';
import Welcome from './components/welcome'
import TicTacToe from './components/gameboard'

/************************************
  TASK
  
  Your task is to create a fully functional Tic-tac-toe game. You can use any front-end framework you want (e.g. React, Angular, Vue.js, etc.). The game should first ask each player a name before starting. It should be able to manage state and keep a history of how many times each player has won along with a simple leaderboard as well. If you have extra time, feel free to make it pretty!

************************************/

const DEFAULT_PLAYERS = {
  exes: {
    name: '',
    isActive: true
  },
  // Not very descriptive, could have choosen a better name
  ohs: {
    name: '',
    isActive: false
  }
}

/*
  What's implemented?

  So I followed your (Ruby King's) suggestion and didn't spend too much time on this: I ended up using like an hour and a half, a bit more because of this doc comments I'm writting. So what I ended up coding is:

  - /components/welcome.js.
    Takes the name of the players and stores them. Implements a very simple non-empty validation to continue to the game.
  - /components/gameboard.js
    The actual game.
    You can set the Xs or the Os, validates you can't set a square that is already set.
    Displays name of active players.
    Does NOT determines winner. I didn't implement the algoritm to check for the winner.

 */

function App() {
  // Holds the overall state of the game
  const [ showGame, setShowGame ] = useState(false)
  // Describes how we hold the players name and who's turn it is
  const [ players, setPlayers ] = useState(DEFAULT_PLAYERS)  
  
  return (
    <div className="App">
      { showGame
        ? <TicTacToe players={players} setPlayers={setPlayers} />
        : <Welcome players={players} setPlayers={setPlayers} setShowGame={setShowGame} />
      }
    </div>
  );
}

export default App;
