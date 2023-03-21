function fetchJson(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      new Error(response.statusText);
    }
  });
}

function respFilms() {
  return fetchJson("json/films.json");
}


