import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  return (
    <>
      <Header backgroundColor={"inherit"} >
        <Navigation isLogged={true} place="header" openBurgerMenu={props.openBurgerMenu} />
      </Header>

      <main className="main">
        <SearchForm />
        <MoviesCardList movies={props.savedMoviesList} place="savedMovies" />
      </main>

      <Footer description='Учебный проект Яндекс.Практикум х BeatFilm.' />
    </>
  )
}

export default SavedMovies;
