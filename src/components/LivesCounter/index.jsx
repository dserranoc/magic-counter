import { useState } from 'preact/hooks'

export default function LivesCounter ({ minValue, maxValue, setValue, value, areCommanderShown }) {
  const subOne = () => {
    if (value > minValue) { setValue(value - 1) }
  }

  const addOne = () => {
    if (value < maxValue) { setValue(value + 1) }
  }

  return (
    <div>
      <button className='text-4xl font-bold text-white align-middle pl-1 text-border' onClick={subOne}>-&nbsp;</button>
      <span className={`${areCommanderShown ? 'text-3xl' : 'text-5xl'} font-bold text-white align-middle text-border`}>{value}</span>
      <button className='text-4xl font-bold text-white align-middle pr-1 text-border' onClick={addOne}>&nbsp;+</button>
    </div>
  )
}
