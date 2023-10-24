import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const MessageIcon = (props) => {
  return (
    <button className="message-icon">
      <FaEnvelope /><sub>{props.nbr}</sub>
    </button>
  );
};

export default MessageIcon;
