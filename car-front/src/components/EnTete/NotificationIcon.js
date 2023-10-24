import React from 'react';
import { FaBell } from 'react-icons/fa';
import { useState } from 'react';


const NotificationIcon = () => {
  const [nom,setNom] = useState(4) ;
  return (
    <button className="notification-icon">
      <FaBell /><sub>{nom}</sub>
    </button>
  );
};

export default NotificationIcon;
