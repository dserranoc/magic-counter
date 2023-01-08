import { useState } from 'preact/hooks'
import { createContext } from 'preact'
import styles from '../styles.json'

const GameContext = createContext({})

export function GameContextProvider ({ children }) {
  const [playersNumber, setPlayersNumber] = useState(null)
  const [gamemode, setGamemode] = useState(null)

  return (
    <GameContext.Provider value={{ playersNumber, styles, setPlayersNumber, gamemode, setGamemode }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContext
