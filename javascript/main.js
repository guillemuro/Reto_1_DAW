/*BOTON SCROLL*/
let mybutton = document.getElementById("boton_scroll");

window.onscroll = function() {scrollFunction()};

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

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});



/*PAGINA MERCHANDISING*/
var abrirInfoProducto1 = document.getElementById('producto_1'),
	abrirInfoProducto2 = document.getElementById('producto_2'),
	abrirInfoProducto3 = document.getElementById('producto_3'),
	abrirInfoProducto4 = document.getElementById('producto_4'),
	producto1 = document.getElementById('producto_1_popup'),
	producto2 = document.getElementById('producto_2_popup'),
	producto3 = document.getElementById('producto_3_popup'),
	producto4 = document.getElementById('producto_4_popup');

abrirInfoProducto1.addEventListener('click', function(){
	producto1.classList.add('active');
});
abrirInfoProducto2.addEventListener('click', function(){
	producto2.classList.add('active');
});
abrirInfoProducto3.addEventListener('click', function(){
	producto3.classList.add('active');
});
abrirInfoProducto4.addEventListener('click', function(){
	producto4.classList.add('active');
});


var btnCerrarPopup = document.getElementById('x_zona_privada_1');
btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	producto1.classList.remove('active');
});
var btnCerrarPopup1 = document.getElementById('x_zona_privada_2');
btnCerrarPopup1.addEventListener('click', function(e){
	e.preventDefault();
	producto2.classList.remove('active');
});
var btnCerrarPopup2 = document.getElementById('x_zona_privada_3');
btnCerrarPopup2.addEventListener('click', function(e){
	e.preventDefault();
	producto3.classList.remove('active');
});
var btnCerrarPopup3 = document.getElementById('x_zona_privada_4');
btnCerrarPopup3.addEventListener('click', function(e){
	e.preventDefault();
	producto4.classList.remove('active');
});


let i = 1;
var restar = document.getElementById('resta'),
    sumar = document.getElementById('suma'),
    numActual = document.getElementById('numero');
restar.addEventListener('click', function(){
    if (i > 1) {
        i--;
        numActual.innerText = i;
        console.log(i);
    }
});
sumar.addEventListener('click', function(){
    i++;
    numActual.innerText = i;
    console.log(i);
});



var restar_2 = document.getElementById('resta_2'),
    sumar_2 = document.getElementById('suma_2'),
    numActual_2 = document.getElementById('numero_2');
restar_2.addEventListener('click', function(){
    if (i > 1) {
        i--;
        numActual_2.innerText = i;
        console.log(i);
    }
});
sumar_2.addEventListener('click', function(){
    i++;
    numActual_2.innerText = i;
    console.log(i);
});



var restar_3 = document.getElementById('resta_3'),
    sumar_3 = document.getElementById('suma_3'),
    numActual_3 = document.getElementById('numero_3');
restar_3.addEventListener('click', function(){
    if (i > 1) {
        i--;
        numActual_3.innerText = i;
        console.log(i);
    }
});
sumar_3.addEventListener('click', function(){
    i++;
    numActual_3.innerText = i;
    console.log(i);
});



var restar_4 = document.getElementById('resta_4'),
    sumar_4 = document.getElementById('suma_4'),
    numActual_4 = document.getElementById('numero_4');
restar_4.addEventListener('click', function(){
    if (i > 1) {
        i--;
        numActual_4.innerText = i;
        console.log(i);
    }
});
sumar_4.addEventListener('click', function(){
    i++;
    numActual_4.innerText = i;
    console.log(i);
});




/*PAGINA OUR COFFEES*/
var abrirInfoJava = document.getElementById('java'),
	abrirInfoPython = document.getElementById('python'),
	abrirInfoPHP = document.getElementById('php'),
	abrirInfoRuby = document.getElementById('ruby'),
    abrirInfoSwift = document.getElementById('swift'),
    abrirInfoJS = document.getElementById('javascript'),
    abrirInfoKotlin = document.getElementById('kotlin'),
    abrirInfoC = document.getElementById('c'),
	java = document.getElementById('producto_1_popup'),
	python = document.getElementById('producto_2_popup'),
	php = document.getElementById('producto_3_popup'),
	ruby = document.getElementById('producto_4_popup'),
    swift = document.getElementById('producto_4_popup'),
    javascript = document.getElementById('producto_4_popup'),
    kotlin = document.getElementById('producto_4_popup'),
    c = document.getElementById('producto_4_popup');

abrirInfoJava.addEventListener('click', function(){
	java.classList.add('active');
});
abrirInfoPython.addEventListener('click', function(){
	python.classList.add('active');
});
abrirInfoPHP.addEventListener('click', function(){
	php.classList.add('active');
});
abrirInfoRuby.addEventListener('click', function(){
	ruby.classList.add('active');
});
abrirInfoSwift.addEventListener('click', function(){
	swift.classList.add('active');
});
abrirInfoJS.addEventListener('click', function(){
	javascript.classList.add('active');
});
abrirInfoKotlin.addEventListener('click', function(){
	kotlin.classList.add('active');
});
abrirInfoC.addEventListener('click', function(){
	c.classList.add('active');
});