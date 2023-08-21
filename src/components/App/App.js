import { Routes, Route } from "react-router-dom";
import './App.css'
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import temporaryData from "./temporaryData";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import React from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import BurgerMenuPopup from "../BurgerMenuPopup/BurgerMenuPopup";


function App() {
  const [popupStatus, changePopupStatus] = React.useState({
    burgerMenu: false,
  });

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
    })
  }

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies moviesList={temporaryData.moviesData} openBurgerMenu={() => { handleOpenBurgerMenu() }} />} />
        <Route path="/saved-movies" element={<SavedMovies savedMoviesList={temporaryData.savedMoviesData} openBurgerMenu={() => { handleOpenBurgerMenu() }} />} />
        <Route path="/profile" element={<Profile user={temporaryData.userData} openBurgerMenu={() => { handleOpenBurgerMenu() }} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <BurgerMenuPopup isOpened={popupStatus.burgerMenu} onClose={() => { handleCloseAllPopups() }} />
    </div>
  );
}

export default App;
