document.addEventListener("DOMContentLoaded", () => {
  const cantidadTacos = 35; // Puedes aumentar o reducir la cantidad de tacos

  for (let i = 0; i < cantidadTacos; i++) {
    crearTaco();
  }

  function crearTaco() {
    const taco = document.createElement("img");
    taco.src = "img/taco.png"; 
    taco.classList.add("taco-lluvia");

    // Posición horizontal de inicio aleatoria (incluye margen para la inclinación)
    const inicioX = Math.random() * (window.innerWidth + 200);
    taco.style.left = `${inicioX}px`;

    // Tamaños variados para simular profundidad
    const tamano = Math.random() * 25 + 25; // entre 25px y 50px
    taco.style.width = `${tamano}px`;

    // Duración y tiempos de caída variados
    const duracion = Math.random() * 3 + 3; // cae entre 3 y 6 segundos
    const retraso = Math.random() * 5; // tiempo de espera inicial

    taco.style.animationDuration = `${duracion}s`;
    taco.style.animationDelay = `${retraso}s`;

    document.body.appendChild(taco);
  }
});
