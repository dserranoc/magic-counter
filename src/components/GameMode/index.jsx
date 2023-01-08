import { useContext } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'

export default function GameMode ({ gamemode }) {
  const { setGamemode } = useContext(GameContext)
  const DEFAULT_GAMEMODE = 'brawl'
  return (

    <div>
      <input type='radio' name='gamemode-option' id={gamemode} class='peer hidden' checked={gamemode === DEFAULT_GAMEMODE ? 'checked' : ''} onClick={setGamemode(gamemode)} />
      <label for={gamemode} className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'>
        {gamemode}
      </label>
    </div>
  )
}
