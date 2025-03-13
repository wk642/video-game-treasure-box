import { Cross1Icon, PlusCircledIcon } from '@radix-ui/react-icons';

function GameCards({ games, setGames }) {

  // handle delete button
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
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {games.map((game) => (
      <div key={game.id} className="relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out p-4">
        {/* Delete Button */}
        <button
          className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-300 text-white font-bold p-2 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => handleDelete(game.id)}
        >
          <Cross1Icon />
        </button>
        {/* Plus Button for update information */}
        <button
          className="absolute top-2 left-11 bg-orange-500 hover:bg-orange-300 text-white font-bold p-2 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => handleDelete(game.id)}
        >
          <PlusCircledIcon />
        </button>

        {/* Game Information */}
        <div className="mt-6">
          <h2 className="text-orange-500 text-2xl font-bold mb-3">{game.title}</h2>
          <p className="text-orange-500">
            <span className="text-black text-xl font-bold mb-3 underline">Platform:</span> 
            {game.platform}
          </p>
          <p className="text-orange-500">
            <span className="text-black text-xl font-bold mb-1 underline">Genre:</span> 
            {game.genre}
          </p>
          <p className="text-orange-500">
            <span className="text-black text-xl font-bold mb-3 underline">Year:</span> 
            {game.release}
          </p>
        </div>
      </div>
    ))}
  </div>
  );
}

export default GameCards;