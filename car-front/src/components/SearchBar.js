import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './EnTete.css'

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Rechercher un Car..." />
      <button title='Rechercher'>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
