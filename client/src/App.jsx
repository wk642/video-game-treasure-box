import { useState } from 'react'
import './App.css'
import gamesData from '../../data/hardcodedGamesData'
import GameCards from './components/GameCard'

function App() {
  return (
    <>
      <div className="title-header">
        <h1 className="text-9xl text-center font-bold underline text-orange-500">VIDEO GAMES</h1>
        <h1 className="text-8xl text-center font-bold underline text-orange-500">TREASURE BOX</h1>
      </div>

      <GameCards games={gamesData} />
    </>
  )
}

export default App