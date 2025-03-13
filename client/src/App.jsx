import React, { useState, useEffect } from 'react'
import './App.css'
// import gamesData from '../../data/hardcodedGamesData'
import GameCards from './components/GameCard'

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/games');
        const data = await response.json();
        setGames(data);
      } catch (err) {
        console.error("Not able to fetch the games")
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="title-header">
        <h1 className="text-9xl text-center font-bold underline text-orange-500">VIDEO GAMES</h1>
        <h1 className="text-8xl text-center font-bold underline text-orange-500">TREASURE BOX</h1>
      </div>

      <GameCards 
        games={games}
        setGames={setGames} />
    </>
  )
}

export default App;