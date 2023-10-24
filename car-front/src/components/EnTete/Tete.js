import React from "react";
import  "./EnTete.css";
import BarreDeHaut from "./BarreDeHaut";
import BarreDeBas from "./BarreDeBas";

const Tete = () => {
    return(
        <div  className = "tete">
            <BarreDeHaut></BarreDeHaut>
            <BarreDeBas></BarreDeBas>
            
        </div>       
    );
}

export default Tete ;