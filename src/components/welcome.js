import { useState } from 'react'

export default function Welcome ({ players, setPlayers, setShowGame }) {  
  const [isDisabled, setIsDisabled] = useState(true)
  const handleOnClickDone = () => {
    setShowGame(true)
  }
  const handleOnChangePlayerName = (e) => {
    const { id: player, value } = e.target
    
    if (player === 'playerOne') {
      players.exes.name = value
    } else {
      players.ohs.name = value
    }

    setPlayers(players)
    setIsDisabled(players.exes.name.length > 0 && !players.ohs.name.length > 0)
  } 

  // Went for a <fieldset> because I've always liked how it groups the fields.
  // Plus, I like to use <legend> because sounds awesome and you should only use it with <fieldset> XD
   return (
    <header className="App-header">
      <p>
        Hello! This is a simple tic-tac-toe for two players!
      </p>
      <fieldset>
        <legend>Enter you names, please!</legend>

        <label htmlFor="playerOne">Player One: </label>
        <input id="playerOne" type="text" className="player-name" placeholder="Player One" onChange={handleOnChangePlayerName} />

        <label htmlFor="playerTwo">Player Two: </label>        
        <input id="playerTwo" type="text" className="player-name" placeholder="Player Two" onChange={handleOnChangePlayerName} />

        <button onClick={handleOnClickDone} disabled={isDisabled} >Done!</button>
      </fieldset>  
    </header>
  )
}
