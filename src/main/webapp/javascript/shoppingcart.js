//ESTO ES EL CONTADOR DEL ICONO
//DEFINIR VARIABLES
let contadorIcono = document.querySelector('.contador_productos');
let menuMerchandising = document.querySelector('.cuerpo_menu');
let contador = sessionStorage.getItem('contador') || 0;

//INCREMENTAR CONTADOR AL DARLE CLIC AL BOTON AÑADIR AL CARRITO
menuMerchandising.addEventListener('click', function(event) {
  if (event.target.classList.contains('boton_carrito') || event.target.closest('.boton_carrito')) {
    contador++;
    contadorIcono.textContent = contador.toString();
    sessionStorage.setItem('contador', contador);
  }
});

contadorIcono.textContent = contador.toString();







//ESTA ES LA PAGINA DEL CARRITO
//ELECCION TIENDA IN-STORE PICK UP
function toggleHoverColor(element) {
    var opcionesTienda = document.querySelectorAll(".opcion_tienda");
  
    opcionesTienda.forEach(function(opcion) {
      if (opcion === element) {
        opcion.classList.add("clicked");
      } else {
        opcion.classList.remove("clicked");
      }
    });
}
  

//POPUP PEDIDO REALIZADO
var button_pay = document.querySelector(".boton_pagar"),
    elemento = document.querySelector(".elemento"),
    popupPedido = document.querySelector(".popup_pedidorealizado"),
    cerrarPopupPedidoRealizado = document.querySelector(".cerrar_popup"),
    circulo_tick = document.querySelector(".circ"),
    clicPrimero = true;
  
button_pay.addEventListener("click", function() {
    elemento.classList.toggle("drawn");
    popupPedido.classList.add("active");
});
  
cerrarPopupPedidoRealizado.addEventListener("click", function() {
    popupPedido.classList.remove("active");
    elemento.classList.remove("drawn");
    if (clicPrimero) {
        circulo_tick.classList.add("transicion-activa");
        clicPrimero = false;
    }
});
  
  
//BOTON QUANTITY (LOCAL STORAGE)
var resta = document.querySelector(".resta"),
    suma = document.querySelector(".suma"),
    cantidad = document.querySelector(".numero"),
    i = localStorage.getItem("cantidadActual");
  
if (i) {
    cantidad.innerText = i;
} else {
    i = 1;
}
  
resta.addEventListener('click', function(){
    if (i > 1) {
        i--;
        cantidad.innerText = i;
        console.log(i);
    }
});
  
suma.addEventListener('click', function(){
    i++;
    cantidad.innerText = i;
    console.log(i);
});
  
window.addEventListener('beforeunload', function() {
    localStorage.setItem("cantidadActual", i);
});
