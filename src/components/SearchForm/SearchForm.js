import React from "react";
import "./SearchForm.css";
import searchFormIcon from "../../images/search-form__icon.svg";

function SearchForm(props) {
  const [searchError, changeSearchError] = React.useState("");

  function onCheckboxChecked() {
    props.setSearchQuery({
      ...props.searchQuery,
      isSearchingShortMovies: !props.searchQuery.isSearchingShortMovies,
    });

    if (!props.searchQuery.isSearchingFirstTime || props.results) {
      props.onSearch(!props.searchQuery.isSearchingShortMovies);
    }
  }

  function onSearchInputChange(evt) {
    props.setSearchQuery({
      ...props.searchQuery,
      query: evt.target.value,
    })
  }

  function validateSearchQuery(query) {
    // регулярное выражение, проверяющее наличие букв/цифр
    if (!/[\d\wа-яА-Я]/.test(query)) {
      changeSearchError("Нужно ввести ключевое слово.");
      return false;
    } else {
      changeSearchError("");
      return true;
    }
  }

  function onSearch(evt) {
    evt.preventDefault();
    props.setSearchQuery({
      ...props.searchQuery,
      isSearchingFirstTime: false,
    })

    if (validateSearchQuery(props.searchQuery.query)) {
      props.setIsSearching(true);
      props.onSearch();
    }
  }

  return (
    <section className="search">
      <form className="search-form" onSubmit={onSearch}>
        <fieldset className="search-form__query-input-container">
          <input type="text" className="search-form__query-input" placeholder="Фильм"
            value={props.searchQuery.query} onChange={onSearchInputChange} />
          <img className="search-form__icon" src={searchFormIcon} alt="Поиск по фильмам" />
          <button className="search-form__btn-search button"></button>
        </fieldset>

        <fieldset className="search-form__query-details-container fieldset">
          <input className="search-form__invisible-checkbox" tabIndex="0" id="short-films" type="checkbox"
            checked={props.searchQuery.isSearchingShortMovies} onChange={() => {
            }} />
          <span className="search-form__short-film-checkbox" onClick={onCheckboxChecked}></span>
          <label htmlFor="short-films" className="search-form__label">Короткометражки</label>
        </fieldset>
      </form>
      <p className="search__error">{searchError}</p>
    </section>
  )
}

export default SearchForm;
