import React from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import ProtectedRouteElement from "../ProtectedRouteElement/ProtectedRouteElement";
import './App.css'
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import BurgerMenuPopup from "../BurgerMenuPopup/BurgerMenuPopup";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import moviesApi from "../../utils/api/MoviesApi";
import mainApi from "../../utils/api/MainApi";
import useLocalStorage from "../../utils/hooks/useLocalStorage";
import {CurrentUserContext} from "../../utils/context/CurrentUserContext";
import {getArrayWithoutObject} from "../../utils/utils/ArrayOperations";
import handleSortMovies from "../../utils/utils/MoviesSorter";


function App() {
  const navigate = useNavigate();

  // Данные пользователя
  const [isLogged, toggleIsLogged] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({
    name: "",
    email: "",
  });

  // Данные страниц поиска
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchMoviesQuery, setSearchMoviesQuery] = useLocalStorage(
    "searchMoviesQuery",
    {
      query: "",
      isSearchingShortMovies: false,
    }
  );
  const [searchMoviesError, setSearchMoviesError] = useLocalStorage("searchMoviesError", "");
  const [moviesSearchResult, setMoviesSearchResult] = useLocalStorage("moviesSearchResult", []);

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchSavedMoviesQuery, setSearchSavedMoviesQuery] = useLocalStorage(
    "searchSavedMoviesQuery",
    {
      query: "",
      isSearchingShortMovies: false,
    }
  );
  const [searchSavedMoviesError, setSearchSavedMoviesError] = useLocalStorage("searchSavedMoviesError", "");
  const [savedMoviesSearchResult, setSavedMoviesSearchResult] = React.useState([]);

  // Данные попапа
  const [popupStatus, changePopupStatus] = React.useState({
    burgerMenu: false,
  });

  // Данные форм
  const [registerFormError, setRegisterFormError] = React.useState("");
  const [loginFormError, setLoginFormError] = React.useState("");
  const [profileFormError, setProfileFormError] = React.useState("");
  const [profileNotification, setProfileNotification] = React.useState("");


  React.useEffect(() => {
    // Отправка запроса о провкерке авторизации
    if (!userInfo.name || !userInfo.email || !userInfo.id) {
      mainApi.getUserInfo()
        .then((res) => {
          setUserInfo({
            id: res._id,
            email: res.email,
            name: res.name,
          });
          toggleIsLogged(true);
        })
        .catch(() => {
          console.log("Вы не авторизованы.");
        });
    }

    // Получение массива сохраненных фильмов
    if (isLogged) {
      getSavedMovies();
    }
  }, [isLogged]);

  function handleOpenBurgerMenu() {
    changePopupStatus({
      ...popupStatus,
      burgerMenu: true,
    });
  }

  function handleCloseAllPopups() {
    changePopupStatus({
      ...popupStatus,
      burgerMenu: false,
    });
  }

  function handleRegister(registrationParams = {}) {
    mainApi.register(registrationParams)
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        if (err === 409) {
          setRegisterFormError("Пользователь с таким email уже существует.");
        } else {
          setRegisterFormError("При регистрации пользователя произошла ошибка.");
        }
      });
  }

  function handleLogin(loginParams = {}) {
    mainApi.login(loginParams)
      .then(() => {
        toggleIsLogged(true);
      })
      .then(() => {
        navigate("/movies", {replace: true})
      })
      .catch((err) => {
        if (err === 401) {
          setLoginFormError("Вы ввели неправильный логин или пароль.");
        } else {
          setLoginFormError("При авторизации произошла ошибка. Переданный токен некорректен.");
        }
      });
  }

  function handleExitAccount() {
    mainApi.exitAccount()
      .then(() => {
        toggleIsLogged(false);
        localStorage.clear();
        navigate("/");
      })
      .catch(() => {
        setProfileFormError("При выходе из аккаунта произошла ошибка.")
      });
  }

  function handleEditProfile(userParams = {}) {
    mainApi.editProfile(userParams)
      .then((res) => {
        setUserInfo({
          ...userInfo,
          name: res.name,
          email: res.email,
        })
      })
      .then(() => {
        setProfileNotification("Данные успешно сохранены!");
      })
      .catch((err) => {
        if (err === 409) {
          setProfileFormError("Пользователь с таким email уже существует.");
        } else {
          setProfileFormError("При обновлении профиля произошла ошибка.");
        }
      });
  }

  async function getMovies() {
    let moviesArray;

    if (!localStorage.getItem('movies')) {
      await moviesApi.getMovies()
        .then((res) => {
          localStorage.setItem('movies', JSON.stringify(res))
        })
    }

    moviesArray = JSON.parse(localStorage.getItem('movies'));
    return moviesArray;
  }

  async function handleSearchMovies(isSearchingShortMovies = null) {
    setSearchMoviesError("");
    try {
      const sortedMovies = handleSortMovies(await getMovies(), searchMoviesQuery.query, isSearchingShortMovies === null ? searchMoviesQuery.isSearchingShortMovies : isSearchingShortMovies);
      setMoviesSearchResult(sortedMovies);
      setIsSearching(false);
      if (sortedMovies.length === 0) {
        setSearchMoviesError("Ничего не найдено");
      }
    } catch {
      setSearchMoviesError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
    }
  }

  function getSavedMovies() {
    mainApi.getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
  }

  function handleSearchSavedMovies(isSearchingShortMovies = null) {
    setSearchSavedMoviesError("");
    try {
      const sortedMovies = handleSortMovies(savedMovies, searchSavedMoviesQuery.query, isSearchingShortMovies === null ? searchMoviesQuery.isSearchingShortMovies : isSearchingShortMovies);
      setSavedMoviesSearchResult(sortedMovies);
      setIsSearching(false);
      if (sortedMovies.length === 0) {
        setSearchSavedMoviesError("Ничего не найдено");
      }
    } catch {
      setSearchSavedMoviesError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
    }
  }

  function handleSaveMovie({
                             nameRU,
                             nameEN,
                             image,
                             description,
                             director,
                             country,
                             duration,
                             trailerLink,
                             year,
                             id,
                           }) {
    const imageUrl = "https://api.nomoreparties.co/" + image.url;
    mainApi.saveMovie({
      nameRU,
      nameEN,
      image: imageUrl,
      description,
      director,
      country,
      duration,
      trailerLink,
      year,
      movieId: id,
      thumbnail: trailerLink,
    })
      .then((res) => {
        setSavedMovies([
          ...savedMovies,
          res
        ]);
      })
      .catch(err => {
        console.log(err)
      });
  }

  // Функция проверяет, сохранена ли карта, или нет
  function checkIsCardSaved(cardId) {
    return savedMovies.some((movie) => {
      return movie.movieId === cardId;
    });
  }

  // Функция получает корректный id
  // Необходима из-за использования разных API
  function getCorrectMovieId(rawMovieId) {
    let movieId;
    savedMovies.forEach((movie) => {
      if (movie.movieId === rawMovieId) {
        movieId = movie._id;
      }
    });

    return movieId;
  }

  function handleDeleteMovie(rawMovieId) {
    const movieId = getCorrectMovieId(rawMovieId);
    const card = savedMovies.filter((item) => {
      return item._id === movieId;
    });

    mainApi.deleteMovie(movieId)
      .then(() => {
        setSavedMovies(getArrayWithoutObject(savedMovies, card));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <CurrentUserContext.Provider value={userInfo}>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Main loggedIn={isLogged} openBurgerMenu={handleOpenBurgerMenu}/>}/>

          <Route path="/movies"
                 element={<ProtectedRouteElement element={Movies} loggedIn={isLogged} movies={moviesSearchResult}
                                                 onSearch={handleSearchMovies}
                                                 searchQuery={searchMoviesQuery}
                                                 setSearchQuery={setSearchMoviesQuery}
                                                 setIsSearching={setIsSearching}
                                                 searchError={searchMoviesError}
                                                 onSaveMovie={handleSaveMovie}
                                                 onDeleteMovie={handleDeleteMovie}
                                                 isSearching={isSearching}
                                                 openBurgerMenu={handleOpenBurgerMenu}
                                                 checkIsCardSaved={checkIsCardSaved}
                 />}
          />

          <Route path="/saved-movies"
                 element={<ProtectedRouteElement
                   element={SavedMovies} loggedIn={isLogged}
                   movies={savedMoviesSearchResult.length === 0 ? savedMovies : savedMoviesSearchResult}
                   onSearch={handleSearchSavedMovies}
                   searchQuery={searchSavedMoviesQuery}
                   setSearchQuery={setSearchSavedMoviesQuery}
                   setIsSearching={setIsSearching}
                   searchError={searchSavedMoviesError}
                   onDeleteMovie={handleDeleteMovie}
                   openBurgerMenu={handleOpenBurgerMenu}
                 />}
          />

          <Route path="/profile"
                 element={<ProtectedRouteElement element={Profile} loggedIn={isLogged} formError={profileFormError}
                                                 setFormError={setProfileFormError} notification={profileNotification}
                                                 setNotification={setProfileNotification}
                                                 onEditProfile={handleEditProfile}
                                                 onExitAccount={handleExitAccount}
                                                 openBurgerMenu={handleOpenBurgerMenu}
                 />}
          />

          <Route path="/signup" element={<Register onRegister={handleRegister} formError={registerFormError}
                                                   setFormError={setRegisterFormError}/>}/>

          <Route path="/signin"
                 element={<Login onLogin={handleLogin} formError={loginFormError} setFormError={setLoginFormError}/>}/>

          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>

        <BurgerMenuPopup isOpened={popupStatus.burgerMenu} onClose={handleCloseAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
