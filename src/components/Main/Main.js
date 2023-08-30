import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main(props) {
  return (
    <>
      <Header place="main" backgroundColor="blue" >
        <Navigation isLogged={props.loggedIn} place="header" openBurgerMenu={props.openBurgerMenu} />
      </Header>

      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>

      <Footer place="main" description='Учебный проект Яндекс.Практикум х BeatFilm.' />
    </>
  )
}

export default Main;
