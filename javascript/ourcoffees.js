
var abrirInfoJava = document.getElementById('java'),
    abrirInfoPython = document.getElementById('python'),
    abrirInfoPHP = document.getElementById('php'),
    abrirInfoRuby = document.getElementById('ruby'),
    abrirInfoSwift = document.getElementById('swift'),
    abrirInfoKotlin = document.getElementById('kotlin'),
    abrirInfoC = document.getElementById('c'), /*C#*/
    abrirInfoJavaScript = document.getElementById('javascript'),
    java = document.getElementById('java_popup'),
    python = document.getElementById('python_popup'),
    php = document.getElementById('php_popup'),
    ruby = document.getElementById('ruby_popup'),
    swift = document.getElementById('swift_popup'),
    kotlin = document.getElementById('kotlin_popup'),
    c = document.getElementById('c_popup'),
    javascript = document.getElementById('js_popup');


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
var btnCerrarPopup = document.getElementById('x_zona_privada');
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


var restar_p = document.getElementById('resta_py'),
    sumar_p = document.getElementById('suma_py'),
    numActual_p = document.getElementById('numero_py');
restar_p.addEventListener('click', function(){
    if (i > 1) {
        i--;
        numActual_p.innerText = i;
        console.log(i);
    }
});
sumar_p.addEventListener('click', function(){
    i++;
    numActual_p.innerText = i;
    console.log(i);
});


var restar_php = document.getElementById('resta_php'),
    sumar_php = document.getElementById('suma_php'),
    numActual_php = document.getElementById('numero_php');
restar_php.addEventListener('click', function(){
    if (i > 1) {
        i--;
        numActual_php.innerText = i;
        console.log(i);
    }
});
sumar_php.addEventListener('click', function(){
    i++;
    numActual_php.innerText = i;
    console.log(i);
});


var restar_ruby = document.getElementById('resta_rub'),
    sumar_ruby = document.getElementById('suma_rub'),
    numActual_ruby = document.getElementById('numero_rub');
restar_ruby.addEventListener('click', function(){
    if (i > 1) {
        i--;
        numActual_ruby.innerText = i;
        console.log(i);
    }
});
sumar_ruby.addEventListener('click', function(){
    i++;
    numActual_ruby.innerText = i;
    console.log(i);
});

var restar_sw = document.getElementById('resta_sw'),
    sumar_sw = document.getElementById('suma_sw'),
    numActual_sw = document.getElementById('numero_sw');
restar_sw.addEventListener('click', function(){
    if (i > 1) {
        i--;
        numActual_sw.innerText = i;
        console.log(i);
    }
});
sumar_sw.addEventListener('click', function(){
    i++;
    numActual_sw.innerText = i;
    console.log(i);
});

var restar_js = document.getElementById('resta_js'),
    sumar_js = document.getElementById('suma_js'),
    numActual_js = document.getElementById('numero_js');
restar_js.addEventListener('click', function(){
    if (i > 1) {
        i--;
        numActual_js.innerText = i;
        console.log(i);
    }
});
sumar_js.addEventListener('click', function(){
    i++;
    numActual_js.innerText = i;
    console.log(i);
});


var restar_k = document.getElementById('resta_k'),
    sumar_k = document.getElementById('suma_k'),
    numActual_k = document.getElementById('numero_k');
restar_k.addEventListener('click', function(){
    if (i > 1) {
        i--;
        numActual_k.innerText = i;
        console.log(i);
    }
});
sumar_k.addEventListener('click', function(){
    i++;
    numActual_k.innerText = i;
    console.log(i);
});


var restar_c = document.getElementById('resta_c'),
    sumar_c = document.getElementById('suma_c'),
    numActual_c = document.getElementById('numero_c');
restar_c.addEventListener('click', function(){
    if (i > 1) {
        i--;
        numActual_c.innerText = i;
        console.log(i);
    }
});
sumar_c.addEventListener('click', function(){
    i++;
    numActual_c.innerText = i;
    console.log(i);
});

