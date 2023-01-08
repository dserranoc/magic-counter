import { useState, useContext, useEffect } from 'preact/hooks'
import Board from '../../components/Board'
import GameContext from '../../contexts/GameContext'
import { useLocation } from 'wouter-preact'

export default function Game () {
  const { playersNumber, gamemode } = useContext(GameContext)
  const [, navigate] = useLocation()

  useEffect(() => {
    if (!playersNumber || !gamemode) {
      navigate('/')
    }
  }, [playersNumber, gamemode])
  return (
    <Board />
  )
}
