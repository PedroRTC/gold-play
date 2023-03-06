let header = document.querySelector("header");
let item = document.querySelectorAll(".item");
let button_trailer = document.querySelector(".button_trailer");
let trailer_video = document.querySelector(".video-header");
let buttonPesquisa = document.querySelector(".fa-search");
let button_Assistir_header = document.querySelector(".button_Assistir_header");

let button_direita = document.querySelectorAll(".button_direita");
let button_esquerda = document.querySelectorAll(".button_esquerda");
let container_filmes = document.querySelectorAll(".container_filmes");

function assistir_header() {
  button_Assistir_header.addEventListener("click", assistir_filme);
  let container_filme = document.createElement("div");
  let div_filme = document.createElement("div");
  let section_filme = document.createElement("div");
  let button_fecha = document.createElement("button");
  let filme_header = document.createElement("video");

  container_filme.classList.add("container_filme");
  div_filme.classList.add("div_filme");
  button_fecha.classList.add("button_fecha");
  filme_header.classList.add("filme_header");
  section_filme.classList.add("section_filme");

  filme_header.setAttribute("type", "video");
  filme_header.setAttribute("controls", "controls");
  filme_header.poster = "img/img-acao/fundo1.png";
  filme_header.src = "videos/filme-acao/ultimo-homem.mp4";

  function assistir_filme() {
    header.style.backgroundImage = "url(../img/fundo-hearder.png)";
    section_filme.appendChild(button_fecha);
    div_filme.appendChild(section_filme);
    div_filme.appendChild(filme_header);
    container_filme.appendChild(div_filme);

    trailer_video.pause();
    button_trailer.innerHTML = "Trailer";
    trailer();

    setTimeout(() => {
      div_filme.style.transform = "scale(1)";
    }, 50);

    window.document.body.appendChild(container_filme);
  }

  button_fecha.addEventListener("click", () => {
    div_filme.style.transform = "scale(0)";

    setTimeout(() => {
      window.document.body.removeChild(container_filme);
    }, 400);
  });
}
assistir_header();

function trailer() {
  button_trailer.addEventListener("click", trailer_play);

  function trailer_play() {
    header.style.backgroundImage = "url()";
    trailer_video.style.display = "inline";
    trailer_video.autoplay = true;
    trailer_video.load();
    button_trailer.innerHTML = "Pause";
    button_trailer.removeEventListener("click", trailer_play);
    button_trailer.addEventListener("click", trailer_pause);
  }

  function trailer_pause() {
    header.style.backgroundImage = "url(../img/fundo-hearder.png)";
    trailer_video.load();
    trailer_video.pause();
    button_trailer.innerHTML = "Trailer";
    button_trailer.addEventListener("click", trailer_play);
    button_trailer.removeEventListener("click", trailer_pause);
    trailer_video.style.display = "none";
  }
}
trailer();

function selection_item_menu() {
  for (const iterator of item) {
    iterator.addEventListener("click", selection_item);

    function selection_item() {
      iterator.classList.add("selection");
      iterator.addEventListener("click", remove_item(iterator));

      video.load();
      video.pause();
    }
  }

  function remove_item(iterator) {
    let item_selection = document.querySelectorAll(".item");

    for (const it of item_selection) {
      if (it) {
        it.classList.remove("selection");
        iterator.classList.add("selection");
      }
    }
  }
}
selection_item_menu();

function passarFilme() {
  for (let index = 0; index < button_direita.length; index++) {
    button_direita[index].addEventListener("click", () => {
      container_filmes[index].scrollBy(300, 0);
    });

    button_esquerda[index].addEventListener("click", () => {
      container_filmes[index].scrollBy(-300, 0);
    });
  }
}

passarFilme();
