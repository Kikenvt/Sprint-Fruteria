document.addEventListener("DOMContentLoaded", () =>{
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
    }, 4000);    
});

window.onload = () => {
    // Variables
    const images = [
        '/assets/imgs/aguacate.jpg',
        '/assets/imgs/apple.jpg',
        '/assets/imgs/arandanos.jpg',
        '/assets/imgs/kiwi.jpg',
        '/assets/imgs/manzana.jpg',
        '/assets/imgs/melon.jpg',
        '/assets/imgs/naranja.jpg',
        '/assets/imgs/piña.jpg',
        '/assets/imgs/kiwis.jpg',
        '/assets/imgs/naranja.jpg',
        '/assets/imgs/uvas.jpg',
    ];

    const timeInterval = 1000;
    let currentPosition = 0;
    let backButton = document.getElementById('backward');
    let advanceButton = document.getElementById('forward');
    let imgContainer = document.getElementById('images');
    let playButton = document.getElementById('play');
    let stopButton = document.getElementById('stop');
    let interval;

    // Función para pasar fotos
    function nextImage() {
        if(currentPosition >= images.length - 1) {
            currentPosition = 0;
        } else {
            currentPosition++;
        }
        showImage();
    }

    // Función para retroceder foto
    function previousImage() {
        if(currentPosition <= 0) {
            currentPosition = images.length - 1;
        } else {
            currentPosition--;
        }
        showImage();
    }

    // Función que actualiza la imagen dependiendo de posiciónActual
    function showImage () {
        imgContainer.style.backgroundImage = `url(${images[currentPosition]})`;
        console.log('Displaying image:', images[currentPosition]);
    }

    // Activar autoplay
    function playInterval() {
        interval = setInterval(nextImage, timeInterval);
        // Desactivamos los botones de control
        advanceButton.setAttribute('disabled', true);
        backButton.setAttribute('disabled', true);
        playButton.setAttribute('disabled', true);
        stopButton.removeAttribute('disabled');

    }

    function stopInterval() {
        clearInterval(interval);
        // Activamos los botones de control
        advanceButton.removeAttribute('disabled');
        backButton.removeAttribute('disabled');
        playButton.removeAttribute('disabled');
        stopButton.setAttribute('disabled', true);
    }

    // Eventos
    advanceButton.addEventListener('click', nextImage);
    backButton.addEventListener('click', previousImage);
    playButton.addEventListener('click', playInterval);
    stopButton.addEventListener('click', stopInterval);
    // Iniciar
    showImage();
}
