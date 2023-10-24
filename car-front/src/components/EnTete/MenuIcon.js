import React from 'react';
import { FaBars } from 'react-icons/fa';

const MenuIcon = ({ onClick }) => {
  return (
    <button className="menu-icon" onClick={onClick} title='Menu'>
      <FaBars />
  </button>
  );
};

export default MenuIcon;
