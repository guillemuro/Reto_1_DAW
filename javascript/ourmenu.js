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
var abrirInfoOracle = document.getElementById('oracle'),
    abrirInfoMysql = document.getElementById('mysql'),
    abrirInfoMongo = document.getElementById('mongo'),
    abrirInfoPostgre = document.getElementById('postgre'),
    abrirInfoLaravel = document.getElementById('laravel'),
    abrirInfoReact = document.getElementById('react'),
    abrirInfoAngular = document.getElementById('angular'),
    abrirInfoSymfony = document.getElementById('symfony'),
    abrirInfoDebian = document.getElementById('debian'),
    abrirInfoFedora = document.getElementById('fedora'),
    abrirInfoLinux = document.getElementById('linux'),
    abrirInfoUbuntu = document.getElementById('ubuntu'),
    abrirInfoNetbeans = document.getElementById('netbeans'),
    abrirInfoEclipse = document.getElementById('eclipse'),
    abrirInfoVisual = document.getElementById('visual'),
    abrirInfoIntellij = document.getElementById('intellij'),
    oracle = document.getElementById('oracle_popup'),
    mysql = document.getElementById('mysql_popup'),
    mongo = document.getElementById('mongo_popup'),
    postgre = document.getElementById('postgre_popup'),
    laravel = document.getElementById('laravel_popup'),
    react = document.getElementById('react_popup'),
    angular = document.getElementById('angular_popup'),
    symfony = document.getElementById('symfony_popup'),
    debian = document.getElementById('debian_popup'),
    fedora = document.getElementById('fedora_popup'),
    linux = document.getElementById('linux_popup'),
    ubuntu = document.getElementById('ubuntu_popup'),
    netbeans = document.getElementById('netbeans_popup'),
    eclipse = document.getElementById('eclipse_popup'),
    visual = document.getElementById('visual_popup'),
    intellij = document.getElementById('intellij_popup');



abrirInfoOracle.addEventListener('click', function(){
    oracle.classList.add('active');
});