import { useState } from 'preact/hooks'

export default function Counter({minValue, maxValue, setValue, value, style}) {

  const subOne = () => {
    if (value > minValue)
      setValue(value-1)
  }

  const addOne = () => {
    if (value < maxValue)
      setValue(value+1)
  }

  return (
    <div className={style}>
      <button className='text-8xl font-bold text-white' onClick={subOne}>-</button>
      <span className='text-8xl font-bold text-white mx-5'>{value}</span>
      <button className='text-8xl font-bold text-white' onClick={addOne}>+</button>
    </div>
  )
}