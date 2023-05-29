var button_pay = document.querySelector(".boton_pagar"),
  elemento = document.querySelector(".elemento"),
  popupPedido = document.querySelector(".popup_pedidorealizado"),
  cerrarPopupPedidoRealizado = document.querySelector(".cerrar_popup"),
  circulo_tick = document.querySelector(".circ"),
  clicPrimero = true;

button_pay.addEventListener("click", function () {
  popupPedido.classList.add("active");
});

cerrarPopupPedidoRealizado.addEventListener("click", function () {
  popupPedido.classList.remove("active");
});