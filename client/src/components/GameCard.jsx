import { MinusCircledIcon, Pencil1Icon, PlusCircledIcon, StarIcon, StarFilledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import AddGameForm from './AddGameForm';
import GameDetails from './GameDetials';

function GameCards({ games, setGames }) {
  const [addGameFormVisibility, setAddGameFormVisibility] = useState(false);
  const [gameUserClicked, setGameUserClicked] = useState(null); // State for selected game


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
  //consider adding delete success message

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

  // handle fav icon which is also a put
  const handleToggleFavorite = async (game) => {
    try {
      const updateFav = await fetch(`http://localhost:5000/games/${game.id}/favorite`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fav: !game.fav }),
      }).then(res => res.json());

      setGames(games.map(game => game.id === updateFav.id ? updateFav : game));
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };
  //consider adding favorite success message

  // handle selecting card and showing the details
  // card selected
  const handleSelectedGameCard = (game) => {
    setGameUserClicked(game);
  };
  // closing out the game detail
  const closeGameDetails = () => {
    setGameUserClicked(null);
  };

  return (
    <div className="relative">
      <div className="mt-8 ml-18 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 ">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative border bg-sky-200 rounded-lg shadow-white hover:shadow-2xl transition duration-400 ease-in-out p-4"
            onClick={() => handleSelectedGameCard(game)}
          >
            {/* minus button for delete */}
            <button
              className="absolute top-2 left-2 text-white font-bold p-2 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => handleDelete(game.id)}
            >
              <MinusCircledIcon className="stroke-orange-500 hover:stroke-orange-200"/>
            </button>

            {/* pencil button for update information */}
            <button
              className="absolute top-2 left-11 text-white font-bold p-2 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => handleUpdate(game.id)}
            >
              <Pencil1Icon className="stroke-orange-500 hover:stroke-orange-200"/>
            </button>

            {/* start button to update fav or not fav */}
            <button
              className="absolute top-2 right-2 text-white font-bold p-2 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => handleToggleFavorite(game)}
            >
              {/* targle between fav vs not fav */}
              {game.fav ? <StarFilledIcon className="text-orange-500"/> : <StarIcon className="stroke-orange-500"/>}
            </button>


            {/* Game Information */}
            <div className="mt-6">
              <h2 className="text-orange-500 text-2xl font-bold mt-9 text-center">{game.title.toUpperCase()}</h2>
              <p className="text-orange-500">
                <span className="text-orange-500 text-xl font-bold mb-3 underline">
                  Platform:
                </span>
                <span className="p-4 text-sky-700">
                  {game.platform}
                </span>
              </p>
              <p className="text-orange-500">
                <span className="text-orange-500 text-xl font-bold mb-3 underline">
                  Genre:
                </span>
                <span className="p-4 text-sky-700">
                  {game.genre}
                </span>
              </p>
              <p className="text-orange-500">
                <span className="text-orange-500 text-xl font-bold mb-3 underline">
                  Year:
                </span>
                <span className="p-4 text-sky-700">
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

      {/* Card Details Popup */}
      {gameUserClicked && (
        <GameDetails
        game={gameUserClicked}
        closeGameDetails={closeGameDetails}
        handleToggleFavorite={handleToggleFavorite}
        handleDelete={handleDelete} 
        // handleUpdate={handleUpdate}
       />
      )}
    </div>
  );
}

export default GameCards;