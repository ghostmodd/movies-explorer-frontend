import React from "react";
import "./Header.css"
import Logo from "../Logo/Logo";

function Header(props) {
  return (
    <header className={`header header_color_${props.backgroundColor}`}>
      <div className={`header__container header__container_place_${props.place}`}>
        <Logo link={true} />
        {props.children}
        <button className="header__btn-show-navigation button"></button>
      </div>
    </header>
  )
}

export default Header;
