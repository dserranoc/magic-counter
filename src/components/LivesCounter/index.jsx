import { useState, useContext } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'

export default function LivesCounter ({ minValue, maxValue, setValue, value, areCommanderShown, playerId }) {
  const { doubleCommander, setDoubleCommander } = useContext(GameContext)
  const subOne = () => {
    if (value > minValue) { setValue(value - 1) }
  }

  const addOne = () => {
    if (value < maxValue) { setValue(value + 1) }
  }

  return (
    <div>
      <button className='text-4xl font-bold text-white align-middle pl-1 text-border' onClick={subOne}>-&nbsp;</button>
      <span onDoubleClick={() => { setDoubleCommander({ ...doubleCommander, [playerId]: !doubleCommander[playerId] }) }} className={`${areCommanderShown ? 'text-3xl' : 'text-5xl'} font-bold text-white align-middle text-border`}>{value}</span>
      <button className='text-4xl font-bold text-white align-middle pr-1 text-border' onClick={addOne}>&nbsp;+</button>
    </div>
  )
}
