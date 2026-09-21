document.addEventListener("DOMContentLoaded", () => {
  const cantidadTacos = 30; // Ajusta este número si quieres más o menos tacos cayendo

  for (let i = 0; i < cantidadTacos; i++) {
    crearTaco();
  }

  function crearTaco() {
    const taco = document.createElement("img");
    taco.src = "img/taco.png"; // Asegúrate de que taco.png esté en la carpeta img/
    taco.classList.add("taco-lluvia");

    // Posición horizontal inicial aleatoria
    const inicioX = Math.random() * (window.innerWidth + 200);
    taco.style.left = `${inicioX}px`;

    // Tamaño aleatorio para dar sensación de profundidad
    const tamano = Math.random() * 25 + 25; // entre 25px y 50px
    taco.style.width = `${tamano}px`;

    // Duración y retraso de la animación aleatorios
    const duracion = Math.random() * 3 + 3; // entre 3 y 6 segundos
    const retraso = Math.random() * 5; // hasta 5 segundos de retraso inicial

    taco.style.animationDuration = `${duracion}s`;
    taco.style.animationDelay = `${retraso}s`;

    document.body.appendChild(taco);
  }
});