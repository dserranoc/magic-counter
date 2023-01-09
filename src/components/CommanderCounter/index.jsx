import { useState, useContext } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'
export default function CommanderCounter ({ setLives, lives, playerId }) {
  const { styles, gamemode, doubleCommander } = useContext(GameContext)

  const DEFAULT_VALUE = 0
  const MIN_VALUE = 0
  const MAX_VALUE = gamemode === 'commander' ? 21 : 16

  const [valueA, setValueA] = useState(DEFAULT_VALUE)
  const [valueB, setValueB] = useState(DEFAULT_VALUE)
  const playerStyle = styles.players[playerId - 1]

  const subOneA = () => {
    if (valueA > MIN_VALUE) {
      setValueA(valueA - 1)
      setLives(lives + 1)
    }
  }

  const addOneA = () => {
    if (valueA < MAX_VALUE) {
      setValueA(valueA + 1)
      setLives(lives - 1)
    }
  }

  const subOneB = () => {
    if (valueB > MIN_VALUE) {
      setValueB(valueB - 1)
      setLives(lives + 1)
    }
  }

  const addOneB = () => {
    if (valueB < MAX_VALUE) {
      setValueB(valueB + 1)
      setLives(lives - 1)
    }
  }

  if (doubleCommander[playerId]) {
    return (
      <div>
        <div className={`${playerStyle.color} rounded-md flex place-content-center`}>
          <button className='text-sm font-bold text-white align-middle pl-2 text-border' onClick={subOneA}>-&nbsp;</button>
          <span className='text-sm font-bold text-white align-middle mx-1 text-border'>A{valueA}</span>
          <button className='text-sm font-bold text-white align-middle pr-2 text-border' onClick={addOneA}>&nbsp;+</button>
        </div>
        <div className={`${playerStyle.color} rounded-md flex place-content-center mt-1`}>
          <button className='text-sm font-bold text-white align-middle pl-2 text-border' onClick={subOneB}>-&nbsp;</button>
          <span className='text-sm font-bold text-white align-middle mx-1 text-border'>B{valueB}</span>
          <button className='text-sm font-bold text-white align-middle pr-2 text-border' onClick={addOneB}>&nbsp;+</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className={`${playerStyle.color} rounded-md flex place-content-center`}>
        <button className='text-2xl font-bold text-white align-middle pl-2 text-border' onClick={subOneA}>-&nbsp;</button>
        <span className='text-2xl font-bold text-white align-middle mx-1 text-border'>{valueA}</span>
        <button className='text-xl font-bold text-white align-middle pr-2 text-border' onClick={addOneA}>&nbsp;+</button>
      </div>
    </div>
  )
}
