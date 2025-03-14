import React from 'react';
import { Cross1Icon, StarIcon, StarFilledIcon, MinusCircledIcon, Pencil1Icon } from '@radix-ui/react-icons';

function GameDetails({ game, closeGameDetails, handleToggleFavorite, handleDelete}) {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-sky-200 p-8 rounded-lg shadow-lg relative w-full max-w-md">
        <button
          className="absolute top-2 right-2 text-orange-500 hover:text-orange-200 w-10 h-10"
          onClick={closeGameDetails}
        >
          <Cross1Icon className="w-10 h-10" />
        </button>

         {/* Favorite Icon */}
         <button
          className="absolute top-2 left-20 text-white font-bold p-2 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => handleToggleFavorite(game)}
        >
          {game.fav ? (
            <StarFilledIcon className="text-orange-500" />
          ) : (
            <StarIcon className="stroke-orange-500" />
          )}
        </button>

        {/* Delete Icon */}
        <button
          className="absolute top-2 left-2 text-white font-bold p-2 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => handleDelete(game.id)}
        >
          <MinusCircledIcon className="stroke-orange-500 hover:stroke-orange-200" />
        </button>

        {/* Edit Icon */}
        <button
          className="absolute top-2 left-11 text-white font-bold p-2 rounded-full w-8 h-8 flex items-center justify-center"
        >
          <Pencil1Icon className="stroke-orange-500 hover:stroke-orange-200" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-orange-500 text-center">{game.title.toUpperCase()}</h2>

        {/* Placeholder for Game Image */}
        <div className="mb-4">
          <img
            src={`https://via.placeholder.com/300x200?text=${game.title}`} // Replace with actual image URL
            alt={game.title}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>

        <p className="text-orange-500">
          <span className="text-white text-xl font-bold mb-3 underline">Platform:</span>
          <span className="p-4">{game.platform}</span>
        </p>
        <p className="text-orange-500">
          <span className="text-white text-xl font-bold mb-1 underline">Genre:</span>
          <span className="p-4">{game.genre}</span>
        </p>
        <p className="text-orange-500">
          <span className="text-white text-xl font-bold mb-3 underline">Year:</span>
          <span className="p-4">{game.release}</span>
        </p>
        <p className="text-orange-500">
          <span className="text-white text-xl font-bold mb-3 underline">Info:</span>
          <span className="p-4">{game.info}</span>
        </p>
      </div>
    </div>
  );
}

export default GameDetails; 