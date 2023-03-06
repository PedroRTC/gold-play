function fetchJson(url) {
  return fetch(url).then((r) => {
    if (r.ok) {
      return r.json();
    } else {
      new Error(r.statusText);
    }
  });
}

function respFilmes() {
  return fetchJson("json/filmes.json");
}


