import { useContext } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'
import GameOption from '../../components/GameOption'
import { useLocation } from 'wouter'
export default function Settings () {
  const { playersNumber, gamemode, setPlayersNumber } = useContext(GameContext)
  const [, navigate] = useLocation()

  const handlePlayButton = () => {
    navigate('/game')
  }
  return (
    <div className='flex items-center justify-center flex-col select-none flex-grow'>
      <div className='flex flex-col place-content-center w-3/4 text-center'>
        <h2 className='text-4xl mb-8'>Establece el modo de juego:</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 space-x-2 rounded-xl bg-red-100 p-2 mb-8'>
          <GameOption type='gamemode' content='Commander' id='commander' name='gamemode-option' value='commander' checked={gamemode === 'commander' ? 'checked' : ''} />
          <GameOption type='gamemode' content='Pauper' id='pauper' name='gamemode-option' value='pauper' checked={gamemode === 'pauper' ? 'checked' : ''} />
          <GameOption type='gamemode' content='Duel' id='duel' name='gamemode-option' value='duel' checked={gamemode === 'duel' ? 'checked' : ''} />
        </div>
      </div>

      <div className='flex flex-col place-content-center w-3/4 text-center'>
        <h2 className='text-4xl mb-8'>Establece el número de jugadores:</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 space-x-2 rounded-xl bg-red-100 p-2'>
          <GameOption type='players' content='2 jugadores' id='2players' name='players-option' value={2} checked={playersNumber === 2 || gamemode === 'duel' ? 'checked' : ''} />
          <GameOption type='players' content='3 jugadores' id='3players' name='players-option' value={3} disabled={gamemode === 'duel' ? 'disabled' : ''} />
          <GameOption type='players' content='4 jugadores' id='4players' name='players-option' value={4} disabled={gamemode === 'duel' ? 'disabled' : ''} />
          <GameOption type='players' content='5 jugadores' id='5players' name='players-option' value={5} disabled={gamemode === 'duel' ? 'disabled' : ''} />
          <GameOption type='players' content='6 jugadores' id='6players' name='players-option' value={6} disabled={gamemode === 'duel' ? 'disabled' : ''} />
        </div>
      </div>

      <button className='bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-xl mt-6 disabled:bg-gray-500' disabled={playersNumber === null || gamemode === null ? 'disabled' : ''} onClick={handlePlayButton}>Jugar</button>
    </div>
  )
}
