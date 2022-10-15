import { useState, useContext } from 'preact/hooks'
import Counter from '../Counter'
import MiniCounter from '../MiniCounter'
import GameContext from '../../contexts/GameContext'
export function Player ({playerId}) {

  const [lives, setLives] = useState(40)
  const [poison, setPoison] = useState(0)

  const {playersNumber, styles} = useContext(GameContext)
  const playerStyles = styles.players[playerId-1]
  const spanStyles = playerStyles.span
  const rotationStyles = playerStyles.rotation

  const otherPlayers = styles.players.slice(0, playersNumber).filter((player) => player.id !== playerId)

  console.log(otherPlayers);

  return(
    <div id={playerId} className={`${playerStyles.color} ${spanStyles && spanStyles[playersNumber] ? spanStyles[playersNumber] : ""} flex place-content-center items-center`}>
      <div className={`grid overflow-hidden grid-rows-2 grid-cols-2 ${rotationStyles && rotationStyles[playersNumber] ? rotationStyles[playersNumber] : ""}`}>
        <div className='flex items-center place-content-center'>
          <Counter minValue={-2} maxValue={200} defaultValue={40} setValue={setLives} value={lives} />
        </div>
        <div className='row-span-2 flex items-center place-content-center'>
          <div className='grid overflow-hidden grid-rows-2 grid-cols-3 gap-2 grid-flow-row'>
            {otherPlayers.map((player) => <MiniCounter key={player.id} playerId={player.id} minValue={0} maxValue={21} defaultValue={0} setLives={setLives} lives={lives} />)}
          </div>
        </div>
        <div className='flex items-center place-content-center'>
          <Counter minValue={-2} maxValue={200} defaultValue={40} setValue={setPoison} value={poison} style={'bg-white/50 rounded-md pb-3 px-3'} />
        </div>
        
      </div>
    </div>
  )

}