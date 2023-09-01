import React from "react";
import './MoviesCard.css'

function MoviesCard(props) {
  const [isSaved, toggleIsSaved] = React.useState(() => {
    if (props.place === "movies-list") {
      return props.checkIsCardSaved(props.id);
    }

    return false;
  });

  function getHours(hours) {
    if (hours === 1) {
      return "час";
    } else if (/[2-4]$/.test(hours)) {
      return "часа";
    } else if (/[5-90]$/.test(hours)) {
      return "часов";
    }
  }

  // Склонение слова "минута"
  function getMinutes(minutes) {
    if (minutes === 1) {
      return "минута";
    } else if (/^[2-4]$/.test(minutes)) {
      return "минуты";
    } else if (/^[5-9]$/.test(minutes)) {
      return "минут";
    } else if (/^[1][0-9]$/.test(minutes)) {
      return "минут";
    } else if (/^\d+[1]$/.test(minutes)) {
      return "минута"
    } else if (/^\d+[2-4]$/.test(minutes)) {
      return "минуты";
    } else if (/^\d+[5-90]$/.test(props.duration)) {
      return "минут";
    }
  }

  // Функция переводит продолжительность фильма в формат "часы/минуты"
  function getNormalizedDuration() {
    const hours = Math.floor(props.duration / 60);

    if(!hours) {
      return `${props.duration} ${getMinutes(props.duration)}`
    } else {
      const minutes = props.duration % 60;

      if(!minutes) {
        return `${hours} ${getHours(hours)}`
      } else {
        return `${hours} ${getHours(hours)} ${minutes} ${getMinutes(minutes)}`
      }
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
        <p className='movies-card__caption'>{getNormalizedDuration()}</p>
      </div>

      <a className="link" href={props.trailer} rel="noreferrer" target="_blank">
        <img className='movies-card__image' src={props.image} alt={`Обложка фильма "${props.title}"`}/>
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
