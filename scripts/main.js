document.addEventListener("DOMContentLoaded", () =>{
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
    }, 5000);    
});

window.onload = function () {
    // Variables
    const images = [
        'img/montanya.jpg',
        'img/parque.jpg',
        'img/palmeras.jpg'
    ];

    const timeInterval = 1000;
    let currentPosition = 0;
    let backButton = document.querySelector('#retroceder');
    let advanceButton = document.querySelector('#avanzar');
    let img = document.querySelector('#imagen');
    let playButton = document.querySelector('#play');
    let stopButton = document.querySelector('#stop');
    let interval;

    // Función para pasar fotos
    function pasarFoto() {
        if(currentPosition >= images.length - 1) {
            currentPosition = 0;
        } else {
            currentPosition++;
        }
        renderizarImagen();
    }

    // Función para retroceder foto
    function retrocederFoto() {
        if(currentPosition <= 0) {
            currentPosition = images.length - 1;
        } else {
            currentPosition--;
        }
        renderizarImagen();
    }

    // Función que actualiza la imagen dependiendo de posiciónActual
    function renderizarImagen () {
        img.style.backgroundImage = `url(${images[currentPosition]})`;
    }

    // Activar autoplay
    function playIntervalo() {
        interval = setInterval(pasarFoto, timeInterval);
        // Desactivamos los botones de control
        advanceButton.setAttribute('disabled', true);
        backButton.setAttribute('disabled', true);
        playButton.setAttribute('disabled', true);
        stopButton.removeAttribute('disabled');

    }

    function stopIntervalo() {
        clearInterval(interval);
        // Activamos los botones de control
        advanceButton.removeAttribute('disabled');
        backButton.removeAttribute('disabled');
        playButton.removeAttribute('disabled');
        stopButton.setAttribute('disabled', true);
    }

    // Eventos
    advanceButton.addEventListener('click', pasarFoto);
    backButton.addEventListener('click', retrocederFoto);
    playButton.addEventListener('click', playIntervalo);
    stopButton.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
}
