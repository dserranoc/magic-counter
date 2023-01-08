import { useContext } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'
import GameOption from '../../components/GameOption'
import { useLocation } from 'wouter'
export default function Settings () {
  const { playersNumber, gamemode } = useContext(GameContext)
  const [, navigate] = useLocation()

  const handlePlayButton = () => {
    navigate('/game')
  }
  return (
    <div className='flex items-center justify-center flex-col h-screen bg-blue-200'>

      <div className='w-3/4'>
        <h2 className='text-4xl mb-8'>Establece el modo de juego:</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 space-x-2 rounded-xl bg-blue-100 p-2 mb-8'>
          <GameOption type='gamemode' content='Brawl' id='brawl' name='gamemode-option' value='brawl' />
          <GameOption type='gamemode' content='Commander' id='commander' name='gamemode-option' value='commander' />
        </div>
      </div>

      <div className='w-3/4'>
        <h2 className='text-4xl mb-8'>Establece el número de jugadores:</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 space-x-2 rounded-xl bg-blue-100 p-2'>
          <GameOption type='players' content='2 jugadores' id='2players' name='players-option' value={2} />
          <GameOption type='players' content='3 jugadores' id='3players' name='players-option' value={3} />
          <GameOption type='players' content='4 jugadores' id='4players' name='players-option' value={4} />
          <GameOption type='players' content='5 jugadores' id='5players' name='players-option' value={5} />
          <GameOption type='players' content='6 jugadores' id='6players' name='players-option' value={6} />
        </div>
      </div>

      <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-xl mt-6 disabled:bg-gray-500' disabled={playersNumber === null || gamemode === null ? 'disabled' : ''} onClick={handlePlayButton}>Jugar</button>
    </div>
  )
}
