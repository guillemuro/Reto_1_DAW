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
/*let i = 1;
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

let j = 1;
var restar_p = document.getElementById('resta_py'),
    sumar_p = document.getElementById('suma_py'),
    numActual_p = document.getElementById('numero_py');
restar_p.addEventListener('click', function(){
    if (j > 1) {
        j--;
        numActual_p.innerText = j;
        console.log(j);
    }
});
sumar_p.addEventListener('click', function(){
    j++;
    numActual_p.innerText = j;
    console.log(j);
});

let a = 1;
var restar_php = document.getElementById('resta_php'),
    sumar_php = document.getElementById('suma_php'),
    numActual_php = document.getElementById('numero_php');
restar_php.addEventListener('click', function(){
    if (a > 1) {
        a--;
        numActual_php.innerText = a;
        console.log(a);
    }
});
sumar_php.addEventListener('click', function(){
    a++;
    numActual_php.innerText = a;
    console.log(a);
});

let e = 1;
var restar_ruby = document.getElementById('resta_rub'),
    sumar_ruby = document.getElementById('suma_rub'),
    numActual_ruby = document.getElementById('numero_rub');
restar_ruby.addEventListener('click', function(){
    if (e > 1) {
        e--;
        numActual_ruby.innerText = e;
        console.log(e);
    }
});
sumar_ruby.addEventListener('click', function(){
    e++;
    numActual_ruby.innerText = e;
    console.log(e);
});

let b = 1;
var restar_sw = document.getElementById('resta_sw'),
    sumar_sw = document.getElementById('suma_sw'),
    numActual_sw = document.getElementById('numero_sw');
restar_sw.addEventListener('click', function(){
    if (b > 1) {
        b--;
        numActual_sw.innerText = b;
        console.log(b);
    }
});
sumar_sw.addEventListener('click', function(){
    b++;
    numActual_sw.innerText = b;
    console.log(b);
});

let c = 1;
var restar_js = document.getElementById('resta_js'),
    sumar_js = document.getElementById('suma_js'),
    numActual_js = document.getElementById('numero_js');
restar_js.addEventListener('click', function(){
    if (c > 1) {
        c--;
        numActual_js.innerText = c;
        console.log(c);
    }
});
sumar_js.addEventListener('click', function(){
    c++;
    numActual_js.innerText = c;
    console.log(c);
});

let d = 1;
var restar_k = document.getElementById('resta_k'),
    sumar_k = document.getElementById('suma_k'),
    numActual_k = document.getElementById('numero_k');
restar_k.addEventListener('click', function(){
    if (d > 1) {
        d--;
        numActual_k.innerText = d;
        console.log(d);
    }
});
sumar_k.addEventListener('click', function(){
    d++;
    numActual_k.innerText = d;
    console.log(d);
});

let f = 1;
var restar_c = document.getElementById('resta_c'),
    sumar_c = document.getElementById('suma_c'),
    numActual_c = document.getElementById('numero_c');
restar_c.addEventListener('click', function(){
    if (f > 1) {
        f--;
        numActual_c.innerText = f;
        console.log(f);
    }
});
sumar_c.addEventListener('click', function(){
    f++;
    numActual_c.innerText = f;
    console.log(f);
});*/