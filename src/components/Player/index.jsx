import { useState, useContext } from 'preact/hooks'
import LivesCounter from '../LivesCounter'
import PoisonCounter from '../PoisonCounter'
import CommanderCounter from '../CommanderCounter'
import GameContext from '../../contexts/GameContext'
export function Player ({ playerId }) {
  const { playersNumber, styles, gamemode } = useContext(GameContext)

  const DEFAULT_LIVES = gamemode === 'commander' ? 40 : gamemode === 'pauper' ? 30 : 20
  const DEFAULT_POISON = 0
  const MIN_VALUE = -2
  const MAX_VALUE = 200

  const [lives, setLives] = useState(DEFAULT_LIVES)
  const [poison, setPoison] = useState(DEFAULT_POISON)
  const [showCommanderCounters, setShowCommanderCounters] = useState(false)

  const playerStyles = styles.players[playerId - 1]
  const spanStyles = playerStyles.span
  const rotationStyles = playerStyles.rotation
  const toggleBtnPositionStyles = playerStyles.toggleBtnPosition

  const otherPlayers = styles.players.slice(0, playersNumber).filter((player) => player.id !== playerId)

  return (
    <div id={playerId} className={`${playerStyles.color} ${spanStyles && spanStyles[playersNumber] ? spanStyles[playersNumber] : ''} relative flex place-content-center items-center`}>
      <div className={`grid overflow-hidden ${showCommanderCounters ? 'grid-rows-2 grid-cols-2' : 'grid-rows-2'} ${rotationStyles && rotationStyles[playersNumber] ? rotationStyles[playersNumber] : ''} gap-1`}>
        <div className='flex items-center place-content-center row-span-2'>
          <LivesCounter minValue={MIN_VALUE} maxValue={MAX_VALUE} defaultValue={DEFAULT_LIVES} setValue={setLives} value={lives} areCommanderShown={showCommanderCounters} playerId={playerId} />
        </div>
        <div className='flex items-center place-content-center row-span-2'>
          <PoisonCounter minValue={MIN_VALUE} maxValue={MAX_VALUE} defaultValue={DEFAULT_LIVES} setValue={setPoison} value={poison} style='bg-white/50 rounded-md' areCommanderShown={showCommanderCounters} />
        </div>
        {gamemode !== 'duel' && (
          <div className={`${showCommanderCounters ? 'col-span-2' : 'hidden'}`}>
            <div className='inline-grid overflow-hidden grid-rows-2 grid-cols-3 gap-2 row-span-3'>
              {otherPlayers.map((player) => <CommanderCounter key={player.id} playerId={player.id} setLives={setLives} lives={lives} />)}
            </div>
          </div>
        )}
      </div>
      <div className={`${rotationStyles && rotationStyles[playersNumber] ? rotationStyles[playersNumber] : ''} ${toggleBtnPositionStyles && toggleBtnPositionStyles[playersNumber] ? toggleBtnPositionStyles[playersNumber] : ''}`}>
        <button className={`bg-white ${showCommanderCounters ? 'opacity-100' : 'opacity-50'} rounded-full h-8 w-8`} onClick={() => { setShowCommanderCounters(!showCommanderCounters) }} />
      </div>
    </div>
  )
}
