import React from "react";
import  "./EnTete.css";
import { MdHome } from 'react-icons/md';

const Accueil = () => {
    return(   
        <button className="accueil">
            <MdHome  size={41} title="Accueil"/>
      </button>  
    );
}

export default Accueil ;