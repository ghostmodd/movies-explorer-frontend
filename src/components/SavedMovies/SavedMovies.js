import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  React.useEffect(() => {
    if(props.searchResult) {
      props.setMoviesSearchResult([]);
    }

    if(props.searchQuery.query || props.searchQuery.isSearchingShortMovies || props.searchQuery.isSearchingFirstTime) {
      props.setSearchQuery({
        query: "",
        isSearchingShortMovies: false,
        isSearchingFirstTime: false,
      });
    }

    if(props.searchError) {
      props.setSearchErrpr("");
    }
  }, []);

  return (
    <>
      <Header place="saved-movies" backgroundColor="black" >
        <Navigation isLogged={props.loggedIn} place="header" openBurgerMenu={props.openBurgerMenu} />
      </Header>

      <main className="main">
        <SearchForm searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} setIsSearching={props.setIsSearching} onSearch={props.onSearch} results={props.movies.length > 0} />
        <MoviesCardList movies={props.searchResult.length === 0 ? props.movies : props.searchResult} place="saved-movies" isSearching={props.isSearching} setSearchError={props.setSearchError} searchError={props.searchError} onDeleteMovie={props.onDeleteMovie} />
      </main>

      <Footer place="saved-movies" description='Учебный проект Яндекс.Практикум х BeatFilm.' />
    </>
  )
}

export default SavedMovies;
