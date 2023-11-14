class MoviesApi {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getError(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  _getJSON(res) {
    if (res.ok) {
      return res.json();
    }

    return this._getError(res);
  }

  getMovies() {
    return fetch(this._baseUrl, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        return this._getJSON(res);
      })
  }
}

const moviesApi = new MoviesApi("https://api.nomoreparties.co/beatfilm-movies", {
  "Content-Type": "application/json"
});

export default moviesApi;
