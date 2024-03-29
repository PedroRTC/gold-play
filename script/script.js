let header = document.querySelector("header");
let button_trailer = document.querySelector(".button_trailer");
let trailer_video = document.querySelector(".video_header");
let buttonPesquisa = document.querySelector(".fa-search");
let button_Assistir_header = document.querySelector(".button_Assistir_header");

let passRightButton = document.querySelectorAll(".pass_right_button");
let passLeftButton = document.querySelectorAll(".pass_left_button");
let containerFilms = document.querySelectorAll(".container_films");

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
  filme_header.src = "";

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


function passarFilme() {
  for (let index = 0; index < containerFilms .length; index++) {
    passRightButton[index].addEventListener("click", () => {
      containerFilms [index].scrollBy(300, 0);
      
    });

    passLeftButton[index].addEventListener("click", () => {
      containerFilms [index].scrollBy(-300, 0);
    });
  }
}

passarFilme();
