import { useState } from 'preact/hooks'
import { createContext } from 'preact'
import styles from '../styles.json'

const GameContext = createContext({})

export function GameContextProvider ({ children }) {
  const [playersNumber, setPlayersNumber] = useState(null)
  const [gamemode, setGamemode] = useState(null)
  const [doubleCommander, setDoubleCommander] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false })

  return (
    <GameContext.Provider value={{ playersNumber, styles, setPlayersNumber, gamemode, setGamemode, doubleCommander, setDoubleCommander }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContext
