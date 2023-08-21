import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__gallery">
        {props.movies.map((item) => {
          return <MoviesCard place={props.place} title={item.nameRU} duration={item.duration} image={item.image} key={item.movieId} type={props.type} />
        })}
      </div>

      {
        props.place === "moviesList"
        &&
        <button className="movies-card-list__btn-show-more button">Ещё</button>
      }
    </section>
  )
}

export default MoviesCardList;
