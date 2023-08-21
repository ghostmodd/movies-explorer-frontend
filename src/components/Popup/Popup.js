import React from "react";
import "./Popup.css";

function Popup(props) {
  return (
    <div className={`popup ${props.isOpened ? "popup_opened" : ""}`}>
      <div className="popup__container" onClick={props.onClose}>
        {props.children}
        <button className="popup__btn-close button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default Popup;
