import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Rechercher..." />
      <button title='Rechercher'>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
