import { useState } from 'preact/hooks'

export default function Counter ({ minValue, maxValue, setValue, value, style }) {
  const subOne = () => {
    if (value > minValue) { setValue(value - 1) }
  }

  const addOne = () => {
    if (value < maxValue) { setValue(value + 1) }
  }

  return (
    <div className={style}>
      <button className='text-4xl font-bold text-white align-middle pl-1' onClick={subOne}>-</button>
      <span className='text-4xl font-bold text-white align-middle'>{value}</span>
      <button className='text-4xl font-bold text-white align-middle pr-1' onClick={addOne}>+</button>
    </div>
  )
}
