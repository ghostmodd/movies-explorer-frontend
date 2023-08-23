import React from "react";
import "./BurgerMenuPopup.css";
import Popup from "../Popup/Popup";
import Navigation from "../Navigation/Navigation";

function BurgerMenuPopup(props) {
  return (
    <Popup type="burgerMenu" isOpened={props.isOpened} onClose={props.onClose}>
      <div className="burger-menu" onClick={(evt) => evt.stopPropagation()}>
        <Navigation isLogged={true} place="burger-menu" />
      </div>
    </Popup>
  )
}

export default BurgerMenuPopup;
