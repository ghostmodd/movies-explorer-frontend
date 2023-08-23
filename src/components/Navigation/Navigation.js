import React from "react";
import "./Navigation.css"
import {NavLink, useNavigate} from "react-router-dom";
import section from "../Section/Section";

function Navigation(props) {
  const navigate = useNavigate();

  function handleRegistrationButton() {
    navigate("/signup");
  }

  function handleLoginButton() {
    navigate("/signin");
  }

  function handleAccountButton() {
    navigate("/profile");
  }

  return (
    <>
      {
        props.isLogged
        &&
        <div className={`navigation navigation_place_${props.place}`}>
          <nav
            className={`navigation__menu navigation__menu_place_${props.place}`}>
            {
              props.place === 'burger-menu'
              &&
              <NavLink
                className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''} link`}
                to='/'>Главная</NavLink>
            }
            <NavLink
              className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''} link`}
              to='/movies'>Фильмы</NavLink>
            <NavLink
              className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''} link`}
              to='/saved-movies'>Сохраненные фильмы</NavLink>
          </nav>

          <button className={`navigation__btn-account navigation__btn-account_place_${props.place} button`}
                  onClick={handleAccountButton}>
            Аккаунт
            <div className="navigation__btn-account-info"></div>
          </button>

          {
            props.place === "header"
            &&
            <button className="navigation__btn-show-navigation button" onClick={props.openBurgerMenu}></button>
          }
        </div>
      }

      {
        !props.isLogged
        &&
        <section className="navigation">
          <div className="navigation__auth-block">
            <button className="button button_borderless-white"
                    onClick={handleRegistrationButton}>Регистрация
            </button>
            <button className="navigation__btn-login button" onClick={handleLoginButton}>Войти</button>
          </div>
        </section>
      }
    </>
  )
}

export default Navigation;
