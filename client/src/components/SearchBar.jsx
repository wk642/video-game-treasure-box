import React from 'react';

function SearchBar({ serachItem, onChangeSearch }) {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by title..."
        value={serachItem}
        onChange={onChangeSearch}
        className="border-b-4 p-5 w-full"
      />
    </div>
  );
}

export default SearchBar;