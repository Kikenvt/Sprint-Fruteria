window.addEventListener('DOMContentLoaded', function () {
	// Muestra el loader
    document.getElementById("loader").style.display = "flex";
	// Simula tiempo de carga
	setTimeout(function () {
		document.getElementById('loader').style.display = 'none';
		document.getElementById("main").style.display = "block";
	}, 8000);
});

