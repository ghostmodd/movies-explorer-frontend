import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
  return (
    <>
      <Header backgroundColor={"inherit"} >
        <Navigation isLogged={true} place="header" openBurgerMenu={props.openBurgerMenu} />
      </Header>

      <main className="main">
        <SearchForm />
        <MoviesCardList movies={props.moviesList} place="moviesList" />
      </main>

      <Footer description='Учебный проект Яндекс.Практикум х BeatFilm.' />
    </>
  )
}

export default Movies
