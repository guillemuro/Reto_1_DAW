/*BOTON SCROLL*/
let mybutton = document.getElementById("boton_scroll");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



/*ZONA PRIVADA*/
var btnAbrirPopup = document.getElementById('header_candado'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('x_zona_privada');

btnAbrirPopup.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});


//PAGINA WORK WITH US
let btnAbrirAnuncio = document.querySelector('.oferta_trabajo'),
	btnCerrarAnuncio = document.querySelector('.icono_cerrar'),
	AnuncioDesplegable = document.querySelector('.oferta_trabajo_popup');

btnAbrirAnuncio.addEventListener('click', function(){
	AnuncioDesplegable.classList.add('active');
});

btnCerrarAnuncio.addEventListener('click', function(e) {
	e.preventDefault();
	AnuncioDesplegable.classList.remove('active');
});