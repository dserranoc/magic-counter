import { useState, useContext } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'
export default function MiniCounter({minValue, maxValue, defaultValue, setLives, lives, playerId}) {
  const [value, setValue] = useState(defaultValue)
  const {playersNumber, styles} = useContext(GameContext)

  const playerStyle = styles.players[playerId-1]

  const subOne = () => {
    if (value > minValue) {
      setValue(value-1)
      setLives(lives+1)
    }

  }

  const addOne = () => {
    if (value < maxValue) {
      setValue(value+1)
      setLives(lives-1)
    }

  }

  return (
    <div className={`${playerStyle.color} rounded-md flex place-content-center`}>
      <button className='text-2xl font-bold text-white align-middle pl-2' onClick={subOne}>-</button>
      <span className='text-2xl font-bold text-white align-middle mx-1'>{value}</span>
      <button className='text-xl font-bold text-white align-middle pr-2' onClick={addOne}>+</button>
    </div>
  )
}