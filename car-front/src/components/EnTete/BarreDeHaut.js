import React from "react";
import  "./EnTete.css";
import Accueil from "./Accueil";
import SearchBar from "./SearchBar";
import MenuIcon from "./MenuIcon";
import ProfileIcon from "./ProfileIcon";
import Deconnexion from "./Deconnexion";
import ParametreIcon from "./ParametreIcon";
import LogoEnTete from "./LogoEnTete";
import NotificationIcon from "./NotificationIcon";
import MessageIcon from "./MessageIcon";
const BarreDeHaut = () => {
    return(
        <div  className = "BarreDeHaut">
            <LogoEnTete></LogoEnTete>
            <MenuIcon></MenuIcon>
            <Accueil></Accueil>
            <MessageIcon nbr= "2"></MessageIcon>
            <ProfileIcon></ProfileIcon>
            <NotificationIcon></NotificationIcon>
            
            <SearchBar></SearchBar>
            
            <ParametreIcon></ParametreIcon>
            <Deconnexion></Deconnexion>
        </div>       
    );
}

export default BarreDeHaut ;