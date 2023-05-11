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



/*POP UPS PRODUCTOS*/
var abrirInfoJava = document.getElementById('java'),
    abrirInfoPython = document.getElementById('python'),
    abrirInfoPHP = document.getElementById('php'),
    abrirInfoRuby = document.getElementById('ruby'),
    abrirInfoSwift = document.getElementById('swift'),
    abrirInfoKotlin = document.getElementById('kotlin'),
    abrirInfoC = document.getElementById('c'),
    abrirInfoJavaScript = document.getElementById('javascript'),
    java = document.getElementById('java_popup'),
    python = document.getElementById('python_popup'),
    php = document.getElementById('php_popup'),
    ruby = document.getElementById('ruby_popup'),
    swift = document.getElementById('swift_popup'),
    kotlin = document.getElementById('kotlin_popup'),
    c = document.getElementById('c_popup'),
    javascript = document.getElementById('javascript_popup');


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
abrirInfoJavaScript.addEventListener('click', function(){
    javascript.classList.add('active');
});
abrirInfoKotlin.addEventListener('click', function(){
    kotlin.classList.add('active');
});
abrirInfoC.addEventListener('click', function(){
    c.classList.add('active');
});



/*BOTON CERRAR*/
var btnCerrarPopup = document.getElementById('x_zona_privada_x');
btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	java.classList.remove('active');
});
var btnCerrarPopup_p = document.getElementById('x_zona_privada_p');
btnCerrarPopup_p.addEventListener('click', function(e){
	e.preventDefault();
	python.classList.remove('active');
});
var btnCerrarPopup_php = document.getElementById('x_zona_privada_php');
btnCerrarPopup_php.addEventListener('click', function(e){
	e.preventDefault();
	php.classList.remove('active');
});
var btnCerrarPopup_ruby = document.getElementById('x_zona_privada_ruby');
btnCerrarPopup_ruby.addEventListener('click', function(e){
	e.preventDefault();
	ruby.classList.remove('active');
});
var btnCerrarPopup_swift = document.getElementById('x_zona_privada_swift');
btnCerrarPopup_swift.addEventListener('click', function(e){
	e.preventDefault();
	swift.classList.remove('active');
});
var btnCerrarPopup_js = document.getElementById('x_zona_privada_js');
btnCerrarPopup_js.addEventListener('click', function(e){
	e.preventDefault();
	javascript.classList.remove('active');
});
var btnCerrarPopup_k = document.getElementById('x_zona_privada_k');
btnCerrarPopup_k.addEventListener('click', function(e){
	e.preventDefault();
	kotlin.classList.remove('active');
});
var btnCerrarPopup_c = document.getElementById('x_zona_privada_c');
btnCerrarPopup_c.addEventListener('click', function(e){
	e.preventDefault();
	c.classList.remove('active');
});



/*BOTON QUANTITY*/
let java_i = 1;
var restar_java = document.getElementById('resta_j'),
    sumar_java = document.getElementById('suma_j'),
    numActual_java = document.getElementById('numero_j');
restar_java.addEventListener('click', function(){
    if (java_i > 1) {
        java_i--;
        numActual_java.innerText = java_i;
        console.log(java_i);
    }
});
sumar_java.addEventListener('click', function(){
    java_i++;
    numActual_java.innerText = java_i;
    console.log(java_i);
});


let python_i = 1;
var restar_python = document.getElementById('resta_py'),
    sumar_python = document.getElementById('suma_py'),
    numActual_python = document.getElementById('numero_py');
restar_python.addEventListener('click', function(){
    if (python_i > 1) {
        python_i--;
        numActual_python.innerText = python_i;
        console.log(python_i);
    }
});
sumar_python.addEventListener('click', function(){
    python_i++;
    numActual_python.innerText = python_i;
    console.log(python_i);
});


let php_i = 1;
var restar_php = document.getElementById('resta_php'),
    sumar_php = document.getElementById('suma_php'),
    numActual_php = document.getElementById('numero_php');
restar_php.addEventListener('click', function(){
    if (php_i > 1) {
        php_i--;
        numActual_php.innerText = php_i;
        console.log(php_i);
    }
});
sumar_php.addEventListener('click', function(){
    php_i++;
    numActual_php.innerText = php_i;
    console.log(php_i);
});


let ruby_i = 1;
var restar_rub = document.getElementById('resta_rub'),
    sumar_rub = document.getElementById('suma_rub'),
    numActual_rub = document.getElementById('numero_rub');
restar_rub.addEventListener('click', function(){
    if (ruby_i > 1) {
        ruby_i--;
        numActual_rub.innerText = ruby_i;
        console.log(ruby_i);
    }
});
sumar_rub.addEventListener('click', function(){
    ruby_i++;
    numActual_rub.innerText = ruby_i;
    console.log(ruby_i);
});


let swift_i = 1;
var restar_sw = document.getElementById('resta_sw'),
    sumar_sw = document.getElementById('suma_sw'),
    numActual_sw = document.getElementById('numero_sw');
restar_sw.addEventListener('click', function(){
    if (swift_i > 1) {
        swift_i--;
        numActual_sw.innerText = swift_i;
        console.log(swift_i);
    }
});
sumar_sw.addEventListener('click', function(){
    swift_i++;
    numActual_sw.innerText = swift_i;
    console.log(swift_i);
});


let javascript_i = 1;
var restar_js = document.getElementById('resta_js'),
    sumar_js = document.getElementById('suma_js'),
    numActual_js = document.getElementById('numero_js');
restar_js.addEventListener('click', function(){
    if (javascript_i > 1) {
        javascript_i--;
        numActual_js.innerText = javascript_i;
        console.log(javascript_i);
    }
});
sumar_js.addEventListener('click', function(){
    javascript_i++;
    numActual_js.innerText = javascript_i;
    console.log(javascript_i);
});


let kotlin_i = 1;
var restar_k = document.getElementById('resta_k'),
    sumar_k = document.getElementById('suma_k'),
    numActual_k = document.getElementById('numero_k');
restar_k.addEventListener('click', function(){
    if (kotlin_i > 1) {
        kotlin_i--;
        numActual_k.innerText = kotlin_i;
        console.log(kotlin_i);
    }
});
sumar_k.addEventListener('click', function(){
    kotlin_i++;
    numActual_k.innerText = kotlin_i;
    console.log(kotlin_i);
});


let c_i = 1;
var restar_c = document.getElementById('resta_c'),
    sumar_c = document.getElementById('suma_c'),
    numActual_c = document.getElementById('numero_c');
restar_c.addEventListener('click', function(){
    if (c_i > 1) {
        c_i--;
        numActual_c.innerText = c_i;
        console.log(c_i);
    }
});
sumar_c.addEventListener('click', function(){
    c_i++;
    numActual_c.innerText = c_i;
    console.log(c_i);
});