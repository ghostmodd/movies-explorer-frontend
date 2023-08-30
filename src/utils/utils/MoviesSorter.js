// функция сортировки фильмов
function sortMovies(movies, queryString, isSearchingShortMovies) {
  // манипуляции с запросом: удаление пробелов и приведение к нижнему регистру
  const queryRegexp = /^\s+|\s(?=\s)|\s+$/g;
  const query = queryString.replace(queryRegexp, "").toLowerCase();

  function _checkIfProperName(movieItem) {
    return movieItem.nameRU.toLowerCase().includes(query) || movieItem.nameEN.toLowerCase().includes(query);
  }

  function _checkIfShortMovies(movieItem) {
    if (isSearchingShortMovies && movieItem.duration <= 40) {
      return true;
    } else if (!isSearchingShortMovies) {
      return true;
    }
  }

  return movies.filter((movieItem) => {
    return _checkIfProperName(movieItem) && _checkIfShortMovies(movieItem);
  });
}

export default sortMovies;
