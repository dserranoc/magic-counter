import { useState } from 'preact/hooks'
import './app.css'
import { Player } from './components/Player'
import Board from './components/Board'
import { GameContextProvider } from './contexts/GameContext'

export function App() {
  const [count, setCount] = useState(0)

  return (
      <GameContextProvider>
        <Board/>
      </GameContextProvider>

  )
}
