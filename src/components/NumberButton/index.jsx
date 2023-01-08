import { useContext } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'

export default function NumberButton ({ number }) {
  const DEFAULT_PLAYERS = 2
  const { setPlayersNumber } = useContext(GameContext)

  return (

    <div>
      <input type='radio' name='players-option' id={`${number}players`} class='peer hidden' checked={number === DEFAULT_PLAYERS ? 'checked' : ''} onClick={setPlayersNumber(number)} />
      <label for={`${number}players`} className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'>
        {number} jugadores
      </label>
    </div>
  )
}
