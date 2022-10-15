import { useState, useContext } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'
import { Player } from '../Player'



export default function Board() {
  const {playersNumber, styles} = useContext(GameContext)

  const players = styles.players.slice(0, playersNumber)

  const boardStyle = styles.board.playersNumber[playersNumber]

  return (
    <div className={`grid overflow-hidden gap-2 min-h-screen ${boardStyle}`}>
      {
      players
        .map((player) => 
          <Player key={player.id} playerId={player.id}/>
        )
      }
    </div>
  )
}