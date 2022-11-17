import './app.css'
import { GameContextProvider } from './contexts/GameContext'
import Routes from './routes'

export function App () {
  return (
    <GameContextProvider>
      <Routes />
    </GameContextProvider>
  )
}
