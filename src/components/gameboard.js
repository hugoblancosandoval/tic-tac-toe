import { useState } from 'react'

const DEFAULT_GAME_STATE = new Array(9).fill(0)

export default function TicTacToe ({ players, setPlayers }) {
  const [ gameState, setGameState ] = useState(DEFAULT_GAME_STATE)

  const handleSquareClick = (e) => {
    // I'm using the square ID to know which square you are clicking
    const position = e.target.id 
    const isExesActive = players.exes.isActive    
    const updatedState = [...gameState]

    //Has this position been played already? Just return
    if(updatedState[position] !== 0) {
      return
    }

    // A 1 is an X, a -1 is O and a 0 is an empty square.
    updatedState[position] = isExesActive ? 1 : -1    
    setGameState(updatedState)

    const updatedPlayers = {...players}
    if(isExesActive) {
      updatedPlayers.exes.isActive = false;
      updatedPlayers.ohs.isActive = true;
    } else {
      updatedPlayers.exes.isActive = true;
      updatedPlayers.ohs.isActive = false;
    }

    setPlayers(updatedPlayers);
  }

  // This function is just a little utility to make the JSX more readable.
  const renderSquareState = (squareState) => {    
    switch(squareState) {
      case 1: return 'x'
      case 0: return ''
      case -1: return 'o'
      default: return ''
    }
  }

  return (
    <>
      <h2>Active player: {players.exes.isActive ? players.exes.name : players.ohs.name}</h2>
      <div className="game-board">
        {
          // As I said, I tried to favore a function style, when possible.
          gameState.map((square, idx) =>
          <div
            id={idx}
            key={idx}
            className="square"
            onClick={handleSquareClick}
          >
            { renderSquareState(gameState[idx]) }
          </div>
        )}
      </div>
      </>
  )
}
