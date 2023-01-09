import { useContext, useEffect } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'
export default function GameOption ({ content, id, name, value, disabled, checked, type }) {
  const { setGamemode, setPlayersNumber, playersNumber, gamemode } = useContext(GameContext)
  const handleClick = () => {
    if (type === 'gamemode') {
      setGamemode(value)
    } else if (type === 'players') {
      setPlayersNumber(value)
    }
  }

  useEffect(() => {
    if (type === 'gamemode' && gamemode === 'duel') setPlayersNumber(2)
  }, [playersNumber, gamemode])

  return (
    <div>
      <input type='radio' name={name} id={id} class='peer hidden' onClick={handleClick} disabled={disabled} checked={checked} />
      <label for={id} className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'>
        {content}
      </label>
    </div>
  )
}
