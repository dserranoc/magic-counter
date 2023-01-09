import { useState, useContext } from 'preact/hooks'
import Counter from '../Counter'
import MiniCounter from '../MiniCounter'
import GameContext from '../../contexts/GameContext'
export function Player ({ playerId }) {
  const { playersNumber, styles, gamemode } = useContext(GameContext)

  const DEFAULT_LIVES = gamemode === 'commander' ? 40 : gamemode === 'pauper' ? 30 : 20
  const DEFAULT_POISON = 0
  const MIN_VALUE = -2
  const MAX_VALUE = 200

  const DEFAULT_MINI_VALUE = 0
  const MINI_MIN_VALUE = 0
  const MINI_MAX_VALUE = gamemode === 'commander' ? 21 : 16

  const [lives, setLives] = useState(DEFAULT_LIVES)
  const [poison, setPoison] = useState(DEFAULT_POISON)
  const [showMiniCounters, setShowMiniCounters] = useState(false)

  const playerStyles = styles.players[playerId - 1]
  const spanStyles = playerStyles.span
  const rotationStyles = playerStyles.rotation
  const toggleBtnPositionStyles = playerStyles.toggleBtnPosition

  const otherPlayers = styles.players.slice(0, playersNumber).filter((player) => player.id !== playerId)

  // return (
  //   <div id={playerId} className={`${playerStyles.color} ${spanStyles && spanStyles[playersNumber] ? spanStyles[playersNumber] : ''} flex place-content-center items-center`}>
  //     <div className={`grid overflow-hidden grid-rows-2 grid-cols-2 ${rotationStyles && rotationStyles[playersNumber] ? rotationStyles[playersNumber] : ''}`}>
  //       <div className='flex items-center place-content-center'>
  //         <Counter minValue={MIN_VALUE} maxValue={MAX_VALUE} defaultValue={DEFAULT_LIVES} setValue={setLives} value={lives} />
  //       </div>
  //       <div className='flex items-center place-content-center'>
  //         <Counter minValue={MIN_VALUE} maxValue={MAX_VALUE} defaultValue={DEFAULT_LIVES} setValue={setPoison} value={poison} style='bg-white/50 rounded-md' />
  //       </div>
  //       {gamemode !== 'duel' && (
  //         <div className='col-span-2'>
  //           <div className='inline-grid overflow-hidden grid-rows-2 grid-cols-3 gap-3'>
  //             {otherPlayers.map((player) => <MiniCounter key={player.id} playerId={player.id} minValue={MINI_MIN_VALUE} maxValue={MINI_MAX_VALUE} defaultValue={DEFAULT_MINI_VALUE} setLives={setLives} lives={lives} />)}
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // )

  return (
    <div id={playerId} className={`${playerStyles.color} ${spanStyles && spanStyles[playersNumber] ? spanStyles[playersNumber] : ''} relative flex place-content-center items-center`}>
      <div className={`grid overflow-hidden ${showMiniCounters ? 'grid-rows-2 grid-cols-2' : 'grid-rows-2'} ${rotationStyles && rotationStyles[playersNumber] ? rotationStyles[playersNumber] : ''}`}>
        <div className='flex items-center place-content-center'>
          <Counter minValue={MIN_VALUE} maxValue={MAX_VALUE} defaultValue={DEFAULT_LIVES} setValue={setLives} value={lives} areMiniShown={showMiniCounters} />
        </div>
        <div className='flex items-center place-content-center'>
          <Counter minValue={MIN_VALUE} maxValue={MAX_VALUE} defaultValue={DEFAULT_LIVES} setValue={setPoison} value={poison} style='bg-white/50 rounded-md' areMiniShown={showMiniCounters} />
        </div>
        {gamemode !== 'duel' && (
          <div className={`${showMiniCounters ? 'col-span-2' : 'hidden'}`}>
            <div className='inline-grid overflow-hidden grid-rows-2 grid-cols-3 gap-3'>
              {otherPlayers.map((player) => <MiniCounter key={player.id} playerId={player.id} minValue={MINI_MIN_VALUE} maxValue={MINI_MAX_VALUE} defaultValue={DEFAULT_MINI_VALUE} setLives={setLives} lives={lives} />)}
            </div>
          </div>
        )}
      </div>
      <div className={`${rotationStyles && rotationStyles[playersNumber] ? rotationStyles[playersNumber] : ''} ${toggleBtnPositionStyles && toggleBtnPositionStyles[playersNumber] ? toggleBtnPositionStyles[playersNumber] : ''}`}>
        <button className={`bg-white ${showMiniCounters ? 'opacity-100' : 'opacity-50'} rounded-full h-8 w-8`} onClick={() => { setShowMiniCounters(!showMiniCounters) }} />
      </div>
    </div>
  )
}
