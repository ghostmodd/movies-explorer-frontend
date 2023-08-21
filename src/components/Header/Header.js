import React from "react";
import "./Header.css"
import Logo from "../Logo/Logo";

function Header(props) {
  return (
    <header className="header" style={{ backgroundColor: props.backgroundColor }}>
      <div className="header__container">
        <Logo link={true} />
        <div className="header__children">
          {props.children}
        </div>
        <button className="header__btn-show-navigation button"></button>
      </div>
    </header>
  )
}

export default Header;
