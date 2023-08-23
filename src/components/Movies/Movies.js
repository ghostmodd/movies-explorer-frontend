import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
  return (
    <>
      <Header place="movies" backgroundColor="black" >
        <Navigation isLogged={true} place="header" openBurgerMenu={props.openBurgerMenu} />
      </Header>

      <main className="main">
        <SearchForm />
        <MoviesCardList movies={props.moviesList} place="movies-list" />
      </main>

      <Footer place="movies" description='Учебный проект Яндекс.Практикум х BeatFilm.' />
    </>
  )
}

export default Movies
