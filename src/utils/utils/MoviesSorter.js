// функция сортировки фильмов
function handleSortMovies(movies, queryString, isSearchingShortMovies) {
  // манипуляции с запросом: удаление пробелов и приведение к нижнему регистру
  let query;
  if(queryString) {
    const queryRegexp = /^\s+|\s(?=\s)|\s+$/g;
    query = queryString.replace(queryRegexp, "").toLowerCase();
  }

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
    if (queryString && isSearchingShortMovies) {
      return _checkIfProperName(movieItem) && _checkIfShortMovies(movieItem);
    } else if (!queryString) {
      return _checkIfShortMovies(movieItem);
    } else if (!isSearchingShortMovies) {
      return _checkIfProperName(movieItem);
    }
  });
}

export default handleSortMovies;
