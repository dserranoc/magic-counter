import { useState } from 'preact/hooks'
import { createContext } from 'preact'
import styles from '../styles.json'

const GameContext = createContext({})

export function GameContextProvider({children}) {
  const [playersNumber, setPlayersNumber] = useState(6)

  return <GameContext.Provider value={{playersNumber, styles, setPlayersNumber}} >
    {children}
  </GameContext.Provider>

}

export default GameContext