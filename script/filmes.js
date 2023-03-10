let container_acao = document.querySelector(".container_acao");
let container_comedia = document.querySelector(".container_comedia");
let container_animacao = document.querySelector(".container_animacao");

let div_erro = document.querySelectorAll(".div_erro");

let containerPesquisaContato = document.querySelector(
  ".container-pesquisaContato"
);
let inputPesquisa = document.querySelector("#input-pesquisa");
inputPesquisa.addEventListener("input", pesquisaFilmes);

let todosOsFilmes = [];
let filterFilmes = [];

async function iniciarFilmes() {
  try {
    todosOsFilmes = await respFilmes();

    geraFilme();
  } catch (erro) {
    showErro(erro);
  }
}
iniciarFilmes();

function geraFilme() {
  todosOsFilmes.map((filme) => {
    let card = document.createElement("div");
    let div_img = document.createElement("div");
    let container_button = document.createElement("span");
    let button_assistir = document.createElement("button");
    let nome_filme = document.createElement("p");
    let sectionEstrela = document.createElement("section");

    card.classList.add("card");
    div_img.classList.add("div_img");
    container_button.classList.add("container_button");
    button_assistir.classList.add("button_assistir");
    nome_filme.classList.add("nome_filme");
    sectionEstrela.classList.add("sectionEstrela");

    sectionEstrela.innerHTML = `<i class="fa fa-star" aria-hidden="true"></i>  ${filme.estrela}<span>/10</span>`;

    div_img.style.backgroundImage = `url(${filme.capa})`;
    nome_filme.textContent = filme.title;
    button_assistir.textContent = "Assistir";

    container_button.appendChild(button_assistir);
    div_img.appendChild(container_button);
    card.appendChild(div_img);
    card.appendChild(nome_filme);
    card.appendChild(sectionEstrela);
    if (filme.categoria == "ação") {
      container_acao.appendChild(card);
    }

    if (filme.categoria == "comedia") {
      container_comedia.appendChild(card);
    }

    if (filme.categoria == "animacao") {
      container_animacao.appendChild(card);
    }

    container_button.addEventListener("click", () => {
      chamaSecaoFilme(filme);
    });
  });
}

function pesquisaFilmes() {
  let containerFilter = document.createElement("div");
  containerFilter.classList.add("containerFilter");

  filterFilmes = todosOsFilmes.filter(({ title }) =>
    title.toLowerCase().includes(inputPesquisa.value.toLowerCase())
  );

  filterFilmes.map((filme) => {
    let containerFilmeFilter = document.createElement("section");
    let descFilmeFilter = document.createElement("div");
    let imgFilter = document.createElement("img");
    containerFilmeFilter.classList.add("containerFilmeFilter");
    descFilmeFilter.classList.add("descFilmeFilter");
    imgFilter.classList.add("imgFilter");

    imgFilter.src = filme.capa;
    descFilmeFilter.innerHTML = `<p>${filme.title}</p><p><i class="fa fa-star" aria-hidden="true"></i> ${filme.estrela}<span>/10</span></p>`;

    containerFilmeFilter.appendChild(imgFilter);
    containerFilmeFilter.appendChild(descFilmeFilter);
    containerFilter.appendChild(containerFilmeFilter);

    containerFilmeFilter.addEventListener("click", () => {
      chamaSecaoFilme(filme);
    });
  });

  let container = document.querySelector(".containerFilter");

  if (inputPesquisa.value.length >= 2 && !container) {
    containerPesquisaContato.appendChild(containerFilter);
    containerPesquisaContato.style.background = "black";
  } else {
    if (container) {
      containerPesquisaContato.removeChild(container);
      containerPesquisaContato.style.background = "";
      pesquisaFilmes();
    }
  }
}

function chamaSecaoFilme(filme) {
  let areaDoFilme = document.createElement("div");
  let button_fechaArea = document.createElement("button");
  let container_areFilme = document.createElement("section");
  let inform_filme = document.createElement("div");
  let cardAreaFilme = document.createElement("div");
  let nomeFilme_area = document.createElement("h2");
  let capaFilme_area = document.createElement("div");
  let buttonArea_assistir = document.createElement("button");
  let ano = document.createElement("p");
  let sinospe = document.createElement("p");
  let genero = document.createElement("p");
  let idioma = document.createElement("p");
  let duracao = document.createElement("p");
  let avaliacao = document.createElement("p");

  trailer_video.pause();
  header.style.backgroundImage = "url(../img/fundo-hearder.png)";
  button_trailer.innerHTML = "Trailer";
  trailer();
  areaDoFilme.classList.add("areaDoFilme");
  container_areFilme.classList.add("container_areFilme");
  capaFilme_area.classList.add("capaFilme_area");
  inform_filme.classList.add("inform_filme");
  nomeFilme_area.classList.add("nomeFilme_area");
  cardAreaFilme.classList.add("cardAreaFilme");

  button_fechaArea.classList.add("button_fechaArea");
  buttonArea_assistir.classList.add("buttonArea_assistir");

  areaDoFilme.style.backgroundImage = `url(${filme.fundo})`;
  capaFilme_area.style.backgroundImage = `url(${filme.capa})`;
  nomeFilme_area.textContent = filme.title;

  button_fechaArea.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i>`;
  buttonArea_assistir.innerHTML = `Assistir <i class="fa fa-step-forward" aria-hidden="true"></i>`;

  sinospe.innerHTML = `<strong>Sinospe:</strong> ${filme.sinospe}`;
  ano.innerHTML = `<strong>Lançamento:</strong> ${filme.ano}`;
  genero.innerHTML = `<strong>Genero:</strong> ${filme.generos}`;
  idioma.innerHTML = `<strong>Idioma:</strong> ${filme.idioma}`;
  duracao.innerHTML = `<strong>Duração:</strong> ${filme.duracao}`;
  avaliacao.innerHTML = `<strong>Avaliação: </strong><i class="fa fa-star" aria-hidden="true"></i>  ${filme.estrela}<span>/10</span>`;

  cardAreaFilme.appendChild(capaFilme_area);
  cardAreaFilme.appendChild(buttonArea_assistir);

  inform_filme.appendChild(nomeFilme_area);
  inform_filme.appendChild(sinospe);
  inform_filme.appendChild(genero);
  inform_filme.appendChild(ano);
  inform_filme.appendChild(idioma);
  inform_filme.appendChild(duracao);
  inform_filme.appendChild(avaliacao);

  container_areFilme.appendChild(cardAreaFilme);
  container_areFilme.appendChild(inform_filme);
  areaDoFilme.appendChild(button_fechaArea);
  areaDoFilme.appendChild(container_areFilme);

  window.document.body.appendChild(areaDoFilme);
  setTimeout(() => {
    areaDoFilme.style.transform = "translateY(0%)";
  }, 100);

  buttonArea_assistir.addEventListener("click", () => telaFilme(filme));

  button_fechaArea.addEventListener("click", () =>
    fechaSecaoFilme(areaDoFilme)
  );
}

function fechaSecaoFilme(areaDoFilme) {
  areaDoFilme.style.transform = "translateY(150%)";
  setTimeout(() => {
    window.document.body.removeChild(areaDoFilme);
  }, 300);
}

function telaFilme(filme) {
  let main_tela = document.createElement("div");
  let tela = document.createElement("div");
  let barraFilme = document.createElement("section");
  let fechaTela = document.createElement("button");
  let videoFilme = document.createElement("video");

  main_tela.classList.add("main_tela");
  tela.classList.add("tela");
  barraFilme.classList.add("barraFilme");
  videoFilme.classList.add("videoFilme");
  fechaTela.classList.add("fechaTela");
  fechaTela.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
  barraFilme.innerHTML = `<p>Aproveite o filme</p>`;
  videoFilme.setAttribute("controls", "controls");
  videoFilme.poster = filme.fundo;
  videoFilme.src = filme.filme;

  barraFilme.appendChild(fechaTela);
  tela.appendChild(barraFilme);
  tela.appendChild(videoFilme);
  main_tela.appendChild(tela);
  window.document.body.appendChild(main_tela);

  fechaTela.addEventListener("click", () => {
    window.document.body.removeChild(main_tela);
  });
}

function showErro() {
  for (let item of div_erro) {
    item.innerHTML = `<h3>Erro ao carregar os dados...
    </h3><i class="fa fa-refresh fa-spin  fa-1x" aria-hidden="true"></i> `;
  }
}
