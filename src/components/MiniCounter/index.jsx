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
    <div className={`${playerStyle.color} rounded-md pb-1 px-3`}>
      <button className='text-4xl font-bold text-white' onClick={subOne}>-</button>
      <span className='text-4xl font-bold text-white mx-5 pl-1'>{value}</span>
      <button className='text-4xl font-bold text-white' onClick={addOne}>+</button>
    </div>
  )
}