import NumberButton from '../../components/NumberButton'
import { useContext } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'

export default function Settings () {
  const { setIsCommander } = useContext(GameContext)
  return (
    <div className='flex items-center justify-center flex-col h-screen bg-blue-100'>
      <h1 className='text-4xl mb-2'>Configura la partida</h1>
      {/* <div>
        <label htmlFor='commanderCheckbox'>Modo commander</label>
        <input className='mx-2' type='checkbox' name='commanderCheckbox' id='commanderCheckbox' onChange={(evt) => setIsCommander(evt.target.checked)} />
      </div> */}
      <div className=''>
        <NumberButton number={2} />
        <NumberButton number={3} />
        <NumberButton number={4} />
        <NumberButton number={5} />
        <NumberButton number={6} />
      </div>
    </div>
  )
}
