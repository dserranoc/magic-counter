import { useContext } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'
import { useLocation } from 'wouter-preact'

export default function NumberButton ({ number }) {
  const { setPlayersNumber } = useContext(GameContext)
  const [_, navigate] = useLocation()

  const handleClick = () => {
    setPlayersNumber(number)
    navigate('/game')
  }
  return (
    <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2' onClick={handleClick}>{number} jugadores</button>
  )
}
