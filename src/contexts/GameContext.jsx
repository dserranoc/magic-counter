import { useState } from 'preact/hooks'
import { createContext } from 'preact'
import styles from '../styles.json'

const GameContext = createContext({})

export function GameContextProvider ({ children }) {
  const [playersNumber, setPlayersNumber] = useState(-1)
  const [isCommander, setIsCommander] = useState(false)

  return (
    <GameContext.Provider value={{ playersNumber, styles, setPlayersNumber, isCommander, setIsCommander }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContext
