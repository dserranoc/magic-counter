import { useEffect, useContext } from 'preact/hooks'
import GameContext from '../../contexts/GameContext'
import { Player } from '../Player'
import Dice from '../Dice'
import { useLocation } from 'wouter-preact'

export default function Board () {
  const { playersNumber, styles } = useContext(GameContext)

  const [_, navigate] = useLocation()

  const players = styles.players.slice(0, playersNumber)

  const boardStyle = styles.board.playersNumber[playersNumber]

  useEffect(() => {
    if (playersNumber === -1) {
      navigate('/')
    }
  }, [playersNumber, navigate])

  return (
    <div className={`grid overflow-hidden gap-2 ${boardStyle}`}>
      <Dice />
      {
      players
        .map((player) =>
          <Player key={player.id} playerId={player.id} />
        )
      }
    </div>
  )
}
