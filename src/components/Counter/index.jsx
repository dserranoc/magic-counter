import { useState } from 'preact/hooks'

export default function Counter ({ minValue, maxValue, setValue, value, style, areMiniShown }) {
  const subOne = () => {
    if (value > minValue) { setValue(value - 1) }
  }

  const addOne = () => {
    if (value < maxValue) { setValue(value + 1) }
  }

  return (
    <div className={style}>
      <button className='text-4xl font-bold text-white align-middle pl-1 text-border' onClick={subOne}>-&nbsp;</button>
      <span className={`text-${areMiniShown ? 3 : 5}xl font-bold text-white align-middle text-border`}>{value}</span>
      <button className='text-4xl font-bold text-white align-middle pr-1 text-border' onClick={addOne}>&nbsp;+</button>
    </div>
  )
}
