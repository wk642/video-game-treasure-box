import { MinusCircledIcon, Pencil1Icon, PlusCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import AddGameForm from './AddGameForm';

function GameCards({ games, setGames }) {
  const [addGameFormVisibility, setAddGameFormVisibility] = useState(false);

  // handle delete
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/games/${id}`, {
        method: 'DELETE',
      });
      const response = await fetch('http://localhost:5000/games');
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error('Error deleting game:', error);
    }
  };

  // handle add
  const handleAdd = async (newGame) => {
    try {
      await fetch('http://localhost:5000/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame),
      });
      const response = await fetch('http://localhost:5000/games');
      const data = await response.json();
      setGames(data);
      setAddGameFormVisibility(false); 
    } catch (error) {
      console.error('Error adding game:', error);
    }
  };

  return (
    <div className="relative">
      <div className="mt-8 ml-18 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 ">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative border bg-sky-900 rounded-lg shadow-white hover:shadow-2xl transition duration-400 ease-in-out p-4"
          >
            {/* minus button for delete */}
            <button
              className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-300 text-white font-bold p-2 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => handleDelete(game.id)}
            >
              <MinusCircledIcon />
            </button>

            {/* pencil button for update information */}
            <button
              className="absolute top-2 left-11 bg-orange-500 hover:bg-orange-300 text-white font-bold p-2 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => handleUpdate(game.id)}
            >
              <Pencil1Icon />
            </button>

            {/* Game Information */}
            <div className="mt-6">
              <h2 className="text-white-500 text-2xl font-bold mt-9 text-center">{game.title.toUpperCase()}</h2>
              <p className="text-orange-500">
                <span className="text-white text-xl font-bold mb-3 underline">
                  Platform:
                </span>
                <span className="p-4">
                  {game.platform}
                </span>
              </p>
              <p className="text-orange-500">
                <span className="text-white text-xl font-bold mb-1 underline">
                  Genre:
                </span>
                <span className="p-4">
                  {game.genre}
                </span>
              </p>
              <p className="text-orange-500">
                <span className="text-white text-xl font-bold mb-3 underline">
                  Year:
                </span>
                <span className="p-4">
                  {game.release}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Game Button */}
      <button
        className="fixed bottom-4 left-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded outline-offset-40 focus:outline-none focus:shadow-outline"
        onClick={() => setAddGameFormVisibility(true)}
      >
        <PlusCircledIcon className="w-9 h-9" />
      </button>

      {/* Add Game Form Popup */}
      {addGameFormVisibility && (
        <AddGameForm addGameFormVisibility={() => setAddGameFormVisibility(false)} onSubmit={handleAdd} />
      )}
    </div>
  );
}

export default GameCards;