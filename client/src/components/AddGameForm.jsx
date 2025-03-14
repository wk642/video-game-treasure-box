import { Cross1Icon } from '@radix-ui/react-icons';
import { useReducer } from 'react';

// creating the iniitail state of the form to empty
const initialFormState = {
  title: '',
  platform: '',
  genre: '',
  release: '',
  info: '',
  fav: false
};

// declaring the action and resetting the form to empty as needed
const reducer = (state, action) => {
  if (action.type === 'change-in-form') {
    return { ...state, [action.name]: action.value };
  } else if (action.type === 'reset-form') {
    return initialFormState;
  } else {
    return state;
  }
};

function AddGameForm({ addGameFormVisibility, onSubmit }) {
  const [addFormData, dispatch] = useReducer(reducer, initialFormState);

  // when user starts adding things to these fields
  const handleChangeAddGameForm = (e) => {
    dispatch({
      type: 'change-in-form',
      name: e.target.name,
      value: e.target.value,
    });
  };
  
  // handle user's submitting this form
  const handleSubmitAddGameForm = (e) => {
    e.preventDefault();
    onSubmit(addFormData);
    dispatch({ type: 'reset-form' });
    addGameFormVisibility();
  };

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center w-full">
      <div className="bg-sky-200 p-20 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-2 text-orange-500 hover:text-orange-200 w-10 h-10" onClick={addGameFormVisibility}>
          <Cross1Icon className="w-10 h-10" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-orange-500">{'Add Game'}</h2>
        <form onSubmit={handleSubmitAddGameForm} className="sm:w-100 md:w-200 lg:w-300">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-orange-500 hover:border-white"
              type="text"
              name="title"
              value={addFormData.title}
              onChange={handleChangeAddGameForm}
              placeholder="Game Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Platform</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-orange-500 hover:border-white"
              type="text"
              name="platform"
              value={addFormData.platform}
              onChange={handleChangeAddGameForm}
              placeholder="Game Platform"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Genre</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-orange-500 hover:border-white"
              type="text"
              name="genre"
              value={addFormData.genre}
              onChange={handleChangeAddGameForm}
              placeholder="Game Genre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Release Year</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-orange-500 hover:border-white"
              type="number"
              name="release"
              value={addFormData.release}
              onChange={handleChangeAddGameForm}
              placeholder="Release Year"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Game information</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-orange-500 hover hover:border-white"
              type="text"
              name="info"
              value={addFormData.info}
              onChange={handleChangeAddGameForm}
              placeholder="Game Information"
            />
          </div>
          <button className="bg-orange-500 hover:bg-orange-200 text-white font-bold py-2 px-4 text-xl rounded" type="submit">
            ADD GAME
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddGameForm;