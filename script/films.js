let containerMoreAssisted = document.querySelector(".container_more_assisted");
let containerAction = document.querySelector(".container_action");
let containerComedy = document.querySelector(".container_comedy");
let containerAnimation = document.querySelector(".container_animation");
let containerNovel = document.querySelector(".container_novel");
let div_erro = document.querySelectorAll(".div_erro");

let containerSearchMessage = document.querySelector(
  ".container_search_message"
);

let inputSearch = document.querySelector("#input_search");
inputSearch.addEventListener("input", searchFilms);

let allFilms = [];
let filterFilms = [];
let moreAssisted = [];

async function initializeFilms() {
  try {
    allFilms = await respFilms();

    createFilms();
    mostAssistedfilms();
  } catch (erro) {
    showErro(erro);
  }
}
initializeFilms();

function createElementWithClass(type, elementClass) {
  const element = document.createElement(type);
  element.classList.add(elementClass);
  return element;
}

function createFilms() {
  allFilms.map((films) => {
    let card = createElementWithClass("div", "card");
    let div_img = createElementWithClass("div", "div_img");
    let container_button = createElementWithClass("span", "container_button");
    let button_Assisted = createElementWithClass("button", "button_Assisted");
    let name_films = createElementWithClass("p", "name_films");
    let starSection = createElementWithClass("section", "star_section");

    div_img.style.backgroundImage = `url(${films.capa})`;
    name_films.textContent = films.title;
    button_Assisted.textContent = "Assistir";
    starSection.innerHTML = `<i class="fa fa-star" aria-hidden="true"></i> ${films.estrela}<span>/10</span>`;

    container_button.appendChild(button_Assisted);
    div_img.appendChild(container_button);
    card.appendChild(div_img);
    card.appendChild(name_films);
    card.appendChild(starSection);

    container_button.addEventListener("click", () => {
      filmsSection(films);
    });

    checkFilmsCategory(films, card);
  });
}

function checkFilmsCategory(films, card) {
  
  if (films.categoria == "ação") {
    containerAction.appendChild(card);
  } else if (films.categoria == "comedia") {
    containerComedy.appendChild(card);
  } else if (films.categoria == "animacao") {
    containerAnimation.appendChild(card);
  } else {
    containerNovel.appendChild(card);
  }
}

function searchFilms() {
  let containerFilter = createElementWithClass("div", "container_filter");

  filterFilms = allFilms.filter(({ title }) =>
    title.toLowerCase().includes(inputSearch.value.toLowerCase())
  );

  filterFilms.map((films) => {
    let containerFilmsFilter = createElementWithClass(
      "section",
      "container_films_filter"
    );
    let descFilmsFilter = createElementWithClass("div", "desc_films_filter");
    let imgFilter = createElementWithClass("img", "img_filter");

    imgFilter.src = films.capa;
    descFilmsFilter.innerHTML = `<p>${films.title}</p><p><i class="fa fa-star" aria-hidden="true"></i> ${films.estrela}<span>/10</span></p>`;

    containerFilmsFilter.appendChild(imgFilter);
    containerFilmsFilter.appendChild(descFilmsFilter);
    containerFilter.appendChild(containerFilmsFilter);

    containerFilmsFilter.addEventListener("click", () => {
      filmsSection(films);
    });
  });

  let container = document.querySelector(".container_filter");

  if (inputSearch.value.length >= 2 && !container) {
    containerSearchMessage.appendChild(containerFilter);
    containerSearchMessage.style.background = "black";
  } else {
    if (container) {
      containerSearchMessage.removeChild(container);
      containerSearchMessage.style.background = "";
      searchFilms();
    }
  }
}

function mostAssistedfilms() {
  moreAssisted = allFilms.filter((i) => i.popularidade == "favorito");
  moreAssisted.map((assisted) => {
    let cardAssisted = createElementWithClass("section", "card_assisted");
    let imgAssisted = createElementWithClass("div", "img_assisted");
    let buttonAssisted = createElementWithClass("button", "button_assisted");
    let descAssisted = createElementWithClass("div", "desc_assisted");
    let titleAssisted = createElementWithClass("h2", "title_assisted");
    let assessAssisted = createElementWithClass("p", "assess_assisted");
    let sinospeAssisted = createElementWithClass("p", "sinospe_assisted");

    imgAssisted.style.backgroundImage = `url(${assisted.capaAtds})`;
    buttonAssisted.textContent = "Assistir";
    titleAssisted.textContent = assisted.title;
    assessAssisted.innerHTML = `
       <i class="fa fa-star" aria-hidden="true"></i>
       <i class="fa fa-star" aria-hidden="true"></i>
       <i class="fa fa-star" aria-hidden="true"></i>
       <i class="fa fa-star" aria-hidden="true"></i>
       <i class="fa fa-star-half" aria-hidden="true"></i> ${assisted.estrela}<span>/10</span>`;
    sinospeAssisted.textContent = assisted.sinospe;
    imgAssisted.appendChild(buttonAssisted);
    descAssisted.appendChild(titleAssisted);
    descAssisted.appendChild(assessAssisted);
    descAssisted.appendChild(sinospeAssisted);

    cardAssisted.appendChild(imgAssisted);
    cardAssisted.appendChild(descAssisted);

    containerMoreAssisted.appendChild(cardAssisted);

    buttonAssisted.addEventListener("click", () => {
      filmsSection(assisted);
    });
  });
}

function filmsSection(films) {
  let area_films = createElementWithClass("div", "area_films");
  let buttonCloseArea = createElementWithClass("button", "button_close_area");
  let containerAreaFilms = createElementWithClass(
    "section",
    "container_are_films"
  );
  let infoFilms = createElementWithClass("div", "info_films");
  let cardAreaFilms = createElementWithClass("div", "card_area_films");
  let nameFilmsArea = createElementWithClass("h2", "name_films_area");
  let coverFilmsArea = createElementWithClass("div", "cover_films_area");
  let buttonAreaPlay = createElementWithClass("button", "button_area_play");
  let year = createElementWithClass("p");
  let synopsis = createElementWithClass("p");
  let gender = createElementWithClass("p");
  let idioma = createElementWithClass("p");
  let duration = createElementWithClass("p");
  let assessment = createElementWithClass("p");

  trailer_video.pause();
  header.style.backgroundImage = "url(../img/fundo-hearder.png)";
  button_trailer.innerHTML = "Trailer";
  trailer();

  area_films.style.backgroundImage = `url(${films.fundo})`;
  coverFilmsArea.style.backgroundImage = `url(${films.capa})`;
  nameFilmsArea.textContent = films.title;

  buttonCloseArea.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i>`;
  buttonAreaPlay.innerHTML = `Assistir <i class="fa fa-step-forward" aria-hidden="true"></i>`;

  synopsis.innerHTML = `<strong>Sinospe:</strong> ${films.sinospe}`;
  year.innerHTML = `<strong>Lançamento:</strong> ${films.ano}`;
  gender.innerHTML = `<strong>Genero:</strong> ${films.generos}`;
  idioma.innerHTML = `<strong>Idioma:</strong> ${films.idioma}`;
  duration.innerHTML = `<strong>Duração:</strong> ${films.duracao}`;
  assessment.innerHTML = `<strong>Avaliação: </strong><i class="fa fa-star" aria-hidden="true"></i>  ${films.estrela}<span>/10</span>`;

  cardAreaFilms.appendChild(coverFilmsArea);
  cardAreaFilms.appendChild(buttonAreaPlay);

  infoFilms.appendChild(nameFilmsArea);
  infoFilms.appendChild(synopsis);
  infoFilms.appendChild(gender);
  infoFilms.appendChild(year);
  infoFilms.appendChild(idioma);
  infoFilms.appendChild(duration);
  infoFilms.appendChild(assessment);

  containerAreaFilms.appendChild(cardAreaFilms);
  containerAreaFilms.appendChild(infoFilms);
  area_films.appendChild(buttonCloseArea);
  area_films.appendChild(containerAreaFilms);

  window.document.body.appendChild(area_films);
  setTimeout(() => {
    area_films.style.transform = "translateY(0%)";
  }, 100);

  buttonAreaPlay.addEventListener("click", () => screenFilms(films));

  buttonCloseArea.addEventListener("click", () =>
    closeSectionMovie(area_films)
  );
}

function closeSectionMovie(area_films) {
  area_films.style.transform = "translateY(150%)";
  setTimeout(() => {
    window.document.body.removeChild(area_films);
  }, 300);
}

function screenFilms(films) {
  let mainScreen = createElementWithClass("div", "main_screen");
  let screen = createElementWithClass("div", "screen");
  let barFilms = createElementWithClass("section", "bar_films");
  let closeScreenFilms = createElementWithClass("button", "close_screen_films");
  let videoFilms = createElementWithClass("video", "video_films");

  closeScreenFilms.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
  barFilms.innerHTML = `<p>Aproveite o filme</p>`;
  videoFilms.setAttribute("controls", "controls");
  videoFilms.poster = films.fundo;
  videoFilms.src = films.filme;

  barFilms.appendChild(closeScreenFilms);
  screen.appendChild(barFilms);
  screen.appendChild(videoFilms);
  mainScreen.appendChild(screen);
  window.document.body.appendChild(mainScreen);

  closeScreenFilms.addEventListener("click", () => {
    window.document.body.removeChild(mainScreen);
  });
}

function showErro() {
  for (let item of div_erro) {
    item.innerHTML = `<h3>Erro ao carregar os dados...
    </h3><i class="fa fa-refresh fa-spin  fa-1x" aria-hidden="true"></i> `;
  }
}
