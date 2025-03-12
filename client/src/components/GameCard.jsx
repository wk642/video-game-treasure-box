function GameCards({ games }) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {games.map((game) => (
        <div key={game.id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out p-4">
          <h2 className="text-orange-600 text-2xl font-bold mb-3"> {game.title}</h2>
          <p>
            <span className="text-xl font-bold mb-3 underline"> 
              Platform: 
            </span> 
            {game.platform}
          </p>
          <p>
            <span className="text-xl font-bold mb-1 underline">
              Genre: 
            </span> 
            {game.genre}
          </p>
          <p>
            <span className="text-xl font-bold mb-3 underline">
              Year: 
            </span> 
            {game.release_year}
          </p>
        </div>
      ))}
    </div>
  );
}

export default GameCards;