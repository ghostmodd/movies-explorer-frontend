import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
  return (
    <>
      <Header place="movies" backgroundColor="black">
        <Navigation isLogged={props.loggedIn} place="header" openBurgerMenu={props.openBurgerMenu} />
      </Header>

      <main className="main">
        <SearchForm onSearch={props.onSearch} searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} setIsSearching={props.setIsSearching} results={props.movies.length > 0} />
        <MoviesCardList place="movies-list" movies={props.movies} isSearching={props.isSearching} searchError={props.searchError} setSearchError={props.setSearchError} onSaveMovie={props.onSaveMovie} checkIsCardSaved={props.checkIsCardSaved} onDeleteMovie={props.onDeleteMovie} />
      </main>

      <Footer place="movies" description='Учебный проект Яндекс.Практикум х BeatFilm.' />
    </>
  )
}

export default Movies
