import React from "react";
import './MoviesCard.css'

function MoviesCard(props) {
  const [isSaved, toggleIsSaved] = React.useState(() => {
    if (props.place === "movies-list") {
      return props.checkIsCardSaved(props.id);
    }

    return false;
  });

  // Склонение слова "минута"
  function getMinutes() {
    if (props.duration === 1) {
      return "минута";
    } else if (/^[2-4]$/.test(props.duration)) {
      return "минуты";
    } else if (/^[5-9]$/.test(props.duration)) {
      return "минут";
    } else if (/^[1][0-9]$/.test(props.duration)) {
      return "минут";
    } else if (/^\d+[1]$/.test(props.duration)) {
      return "минута"
    } else if (/^\d+[2-4]$/.test(props.duration)) {
      return "минуты";
    } else if (/^\d+[5-90]$/.test(props.duration)) {
      return "минут";
    }
  }

  function onSaveMovie() {
    toggleIsSaved(true);
    props.onSaveMovie(props.movieData);
  }

  function onDeleteMovie() {
    // Условие для определения паттерна работы функции в зависимости от открытой страницы
    if (props.place === "movies-list") {
      toggleIsSaved(false);
      props.onDeleteMovie(props.movieData.id);
    } else if (props.place === "saved-movies") {
      props.onDeleteMovie(props.movieData.movieId);
    }
  }

  return (
    <div className="movies-card">
      <div className='movies-card__description'>
        <h3 className='movies-card__title'>{props.title}</h3>
        <p className='movies-card__caption'>{props.duration} {getMinutes()}</p>
      </div>

      <a className="link" href={props.trailer} rel="noreferrer" target="_blank">
        <img className='movies-card__image' src={props.image} alt={`Обложка фильма "${props.title}"`} />
      </a>

      {
        props.place === "movies-list"
        &&
        <button
          className={`movies-card__btn-save-movie ${isSaved ? 'movies-card__btn-save-movie_activated' : ''} button`}
          onClick={isSaved ? onDeleteMovie : onSaveMovie}> {isSaved ? '' : "Сохранить"}
        </button>
      }

      {
        props.place === "saved-movies"
        &&
        <button
          className="movies-card__btn-delete-movie button"
          onClick={onDeleteMovie}>
        </button>
      }
    </div>
  )
}

export default MoviesCard;
