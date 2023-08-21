import React from "react";
import './MoviesCard.css'

function MoviesCard(props) {
  const [isSaved, toggleIsSaved] = React.useState(false);
  const [isDeleted, toggleIsDeleted] = React.useState(false);

  function onSaveMovie() {
    toggleIsSaved(!isSaved);
  }

  function onDeleteMovie() {
    toggleIsDeleted(!isDeleted);
  }

  return (
    <div className='movies-card' style={{ display: `${isDeleted ? "none" : "flex"}` }}>
      <div className='movies-card__description'>
        <h3 className='movies-card__title'>{props.title}</h3>
        <p className='movies-card__caption'>{props.duration} минут</p>
      </div>

      <img className='movies-card__image' src={props.image} alt={`Обложка фильма "${props.title}"`} />

      {
        props.place === "moviesList"
        &&
        <button
          className={`movies-card__btn-save-movie ${isSaved ? 'movies-card__btn-save-movie_activated' : ''} button`}
          onClick={onSaveMovie}> {isSaved ? '' : "Сохранить"}
        </button>
      }

      {
        props.place === "savedMovies"
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
