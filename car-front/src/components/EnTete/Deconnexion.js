import React from 'react';
import { FiPower } from 'react-icons/fi';
const Deconnexion = ({ onClick }) => {
  return (
    <button className="Deconnexion" onClick={onClick} title='Deconnexion'>
      <FiPower />
    </button>
  );
};

export default Deconnexion;
