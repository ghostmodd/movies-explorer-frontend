import React from "react";
import "./SearchForm.css";
import searchFormIcon from "../../images/search-form__icon.svg";

function SearchForm() {
  const [searchShortFilms, toggleSearchShortFilms] = React.useState(true);

  function onCheckboxChecked() {
    toggleSearchShortFilms(!searchShortFilms);
  }

  return (
    <section className="search">
      <form className="search-form">
        <fieldset className="search-form__query-input-container">
          <input type="text" className="search-form__query-input" placeholder="Фильм" />
          <img className="search-form__icon" src={searchFormIcon} alt="Поиск по фильмам" />
          <button className="search-form__btn-search button"></button>
        </fieldset>

        <fieldset className="search-form__query-details-container fieldset">
          <input className="search-form__invisible-checkbox" tabIndex="0" id="short-films" type="checkbox"
            checked={searchShortFilms} onChange={() => {
            }} />
          <span className="search-form__short-film-checkbox" onClick={onCheckboxChecked}></span>
          <label htmlFor="short-films" className="search-form__label">Короткометражки</label>
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm;
