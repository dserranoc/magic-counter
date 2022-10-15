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
    <div className={`${playerStyle.color} rounded-md`}>
      <button className='text-sm font-bold text-white' onClick={subOne}>-</button>
      <span className='text-sm font-bold text-white'>{value}</span>
      <button className='text-sm font-bold text-white' onClick={addOne}>+</button>
    </div>
  )
}