import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { DesktopMediaQuery, GalleryConfig, MobileMediaQuery, TabletMediaQuery } from "../../utils/constants/constants";

function MoviesCardList(props) {
  const [moviesCardCount, setMoviesCardCount] = React.useState(0);
  const gallery = React.useRef();

  // Функция рендерит карты
  // В зависимости от открытой страницы, карточки будут отрисованы по-разному
  // Функция нужна для устранения конфликта между двумя API
  function renderCards() {
    if (props.movies) {
      if (props.place === "movies-list") {
        return props.movies.map((item, index) => {
          if (index <= moviesCardCount - 1) {
            return (
              <MoviesCard place={props.place} title={item.nameRU} duration={item.duration}
                image={'https://api.nomoreparties.co/' + item.image.url}
                key={item.id} id={item.id} type={props.type} movieData={item} onSaveMovie={props.onSaveMovie}
                onDeleteMovie={props.onDeleteMovie} checkIsCardSaved={props.checkIsCardSaved}
                trailer={item.trailerLink} />
            )
          }
        })
      } else if (props.place === "saved-movies") {
        return props.movies.map((item, index) => {
          return (
            <MoviesCard place={props.place} title={item.nameRU} duration={item.duration}
              image={item.image}
              key={item.movieId} id={item.id} type={props.type} movieData={item}
              onSaveMovie={props.onSaveMovie} onDeleteMovie={props.onDeleteMovie} trailer={item.trailerLink} />
          )
        })
      }
    }
  }

  // Функция вычисляет количество размещаемых карточек на странице
  // Формула: (ширина галереи - отступы) / ширину карточки * количество столбцов
  function calculateCardCount(showingMore = false) {
    const isDesktop = window.matchMedia(DesktopMediaQuery).matches;
    const isTablet = window.matchMedia(TabletMediaQuery).matches;
    const isMobile = window.matchMedia(MobileMediaQuery).matches;
    const deviceType = (isDesktop ? "desktop" : isTablet ? "tablet" : isMobile ? "mobile" : "");

    if (gallery.current) {
      const cardWidth = GalleryConfig[`${deviceType}CardWidth`];

      // raw переменные нужны для рассчета отступов
      const rawGalleryWidth = gallery.current.offsetWidth;
      const rawColumnRows = Math.floor(rawGalleryWidth / cardWidth);
      const galleryWidth = rawGalleryWidth - (GalleryConfig[`${deviceType}Gap`] * (rawColumnRows - 1));
      const cardsInRow = Math.floor(galleryWidth / cardWidth);

      if (!showingMore) {
        if (cardsInRow === 3) {
          return 12
        } else if (cardsInRow === 2) {
          return 8;
        } else if (cardsInRow === 1) {
          return 5
        }
      } else {
        if (cardsInRow === 1) {
          return moviesCardCount + (cardsInRow * 2);
        } else {
          return moviesCardCount + cardsInRow;
        }
      }
    }
  }

  function handleResize() {
    setTimeout(() => { setMoviesCardCount(calculateCardCount()) }, 1);
    window.removeEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);
  }

  React.useEffect(() => {
    setMoviesCardCount(calculateCardCount());

    window.addEventListener("resize", handleResize);
  }, [props.movies]);


  // Функция повышает число доступных для отображения карт...
  // ...в следствие этого происходит перерисовка галереи
  function handleShowMoreCards() {
    setMoviesCardCount(calculateCardCount(true));
  }

  return (
    <section className={`movies-card-list movies-card-list_place_${props.place}`}>
      {
        props.searchError
        &&
        <div className="movies-card-list__error-container">
          <p className="movies-card-list__error">{props.searchError}</p>
        </div>
      }

      {
        !props.searchError
        &&
        <div className="movies-card-list__gallery" ref={gallery}>
          {renderCards()}
          {props.isSearching && <Preloader />}
        </div>
      }

      {
        props.place === "movies-list"
        &&
        props.movies.length > moviesCardCount
        &&
        <button className="movies-card-list__btn-show-more button" onClick={handleShowMoreCards}>Ещё</button>
      }
    </section>
  )
}

export default MoviesCardList;
