import { useState } from 'preact/hooks'
import DiceSpinner from '../DiceSpinner'
export default function Dice () {
  const [value, setValue] = useState('?')
  const [rolling, setRolling] = useState(false)
  const MIN_VALUE = 1
  const MAX_VALUE = 20
  const roll = () => {
    if (rolling) return
    setRolling(true)
    setTimeout(() => {
      setRolling(false)
      setValue(Math.floor(Math.random() * MAX_VALUE) + MIN_VALUE)
    }, 1000)
  }
  return (
    <div className='bg-white rounded-full w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl cursor-pointer flex items-center justify-center border-2 border-gray-200' onClick={roll}>
      {rolling ? <DiceSpinner /> : value}
    </div>
  )
}
