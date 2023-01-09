import { useState, useContext } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'
export default function CommanderCounter ({ setLives, lives, playerId }) {
  const { styles, gamemode } = useContext(GameContext)

  const DEFAULT_VALUE = 0
  const MIN_VALUE = 0
  const MAX_VALUE = gamemode === 'commander' ? 21 : 16

  const [value, setValue] = useState(DEFAULT_VALUE)
  const playerStyle = styles.players[playerId - 1]

  const subOne = () => {
    if (value > MIN_VALUE) {
      setValue(value - 1)
      setLives(lives + 1)
    }
  }

  const addOne = () => {
    if (value < MAX_VALUE) {
      setValue(value + 1)
      setLives(lives - 1)
    }
  }

  return (
    <div className={`${playerStyle.color} rounded-md flex place-content-center`}>
      <button className='text-2xl font-bold text-white align-middle pl-2 text-border' onClick={subOne}>-&nbsp;</button>
      <span className='text-2xl font-bold text-white align-middle mx-1 text-border'>{value}</span>
      <button className='text-xl font-bold text-white align-middle pr-2 text-border' onClick={addOne}>&nbsp;+</button>
    </div>
  )
}
