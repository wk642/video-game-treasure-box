import React, { useState, useEffect } from 'react';
import './App.css';
import GameCards from './components/GameCard';
import SearchBar from './components/SearchBar';

function App() {
  const [games, setGames] = useState();
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'http://localhost:5000/games/';
        if (searchItem) {
          url += `?title=${searchItem}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setGames(data);
        setLoading(false);
      } catch (err) {
        console.error('Not able to fetch the games', err);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchItem]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleChangeSearch = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <>
      <div className="title-header">
        <h1 className="text-9xl text-center font-bold underline text-orange-500">
          VIDEO GAMES
        </h1>
        <h1 className="text-8xl text-center font-bold underline text-orange-500">
          TREASURE BOX
        </h1>
      </div>
      {/* Search bar */}
      <SearchBar searchItem={searchItem} onChangeSearch={handleChangeSearch}/>
      {/* Display game cards */}
      <GameCards games={games} setGames={setGames} />
    </>
  );
}

export default App;