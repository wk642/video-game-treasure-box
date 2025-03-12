import { useState } from 'react'
import './App.css'
import gamesData from '../../data/hardcodedGamesData'

function App() {
  return (
    <>
      <div className="title-header">
        <h1 className="text-9xl text-center font-bold">VIDEO GAMES</h1>
        <h1 className="text-8xl text-center font-bold">TREASURE BOX</h1>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {/* Game Cards */}
        {gamesData.map((game) => (
          <div key={game.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
            <p className="text-gray-600">Platform: {game.platform}</p>
            <p className="text-gray-600">Genre: {game.genre}</p>
            <p className="text-gray-600">Year: {game.release_year}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
