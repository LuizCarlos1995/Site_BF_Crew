document.addEventListener("DOMContentLoaded", function () {
  // Definir rotas
  const routes = {
    "/": loadHome,
    "/Home": loadHome,
    "/Bboys": loadSobreBboys,
    "/Eventos": loadEventos,
    "/Crew": loadSobreCrew,
    "/Fotos": loadGaleriaFotos,
  };

  function loadHome() {
    document.getElementById("conteudo").innerHTML = "<h1>Home</h1>";
  }

  function loadSobreBboys() {
    document.getElementById("conteudo").innerHTML = "<h1>Sobre Bboys</h1>";
  }

  function loadEventos() {
    document.getElementById("conteudo").innerHTML = "<h1>Eventos</h1>";
  }

  function loadSobreCrew() {
    document.getElementById("conteudo").innerHTML = "<h1>Sobre Crew</h1>";
  }

  function loadGaleriaFotos() {
    document.getElementById("conteudo").innerHTML = "<h1>Galeria de Fotos</h1>";
  }

  // Função para navegar pelas rotas
  function navigate(path) {
    if (routes[path]) {
      routes[path]();
    } else {
      document.getElementById("conteudo").innerHTML =
        "<h1>404 - Página não encontrada</h1>";
    }
  }

  // Lidar com navegação
  window.onpopstate = function (event) {
    navigate(window.location.pathname);
  };

  // Iniciar rota inicial
  navigate(window.location.pathname);

  // Adicionar escuta aos links
  document.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      const path = this.getAttribute("href");
      history.pushState({}, "", path);
      navigate(path);
    });
  });
});