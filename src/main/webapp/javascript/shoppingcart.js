//ESTO ES EL CONTADOR DEL ICONO
//DEFINIR VARIABLES


let contadorIcono = document.querySelector('.contador_productos');
let menu = document.querySelector('.cuerpo_menu');
let contador = sessionStorage.getItem('contador') || 0;


//INCREMENTAR CONTADOR AL DARLE CLIC AL BOTON AÑADIR AL CARRITO
menu.addEventListener('click', function (event) {
    if (event.target.classList.contains('boton_carrito') || event.target.closest('.boton_carrito')) {
        contador++;
        contadorIcono.textContent = contador.toString();
        sessionStorage.setItem('contador', contador);
    }
});

contadorIcono.textContent = contador.toString();



// DARLE AL BOTÓN (REGISTRO DE A QUE PRODUCTOS LES DAS CLIC, Y LO MANDA AL CARRITO)
var botonesCarrito = document.getElementsByClassName('boton_carrito');

for (var i = 0; i < botonesCarrito.length; i++) {
  botonesCarrito[i].addEventListener('click', function() {
    var producto = this.parentNode.getElementsByClassName('info_nombre_precio')[0];
    var nombre = producto.getElementsByClassName('nombre_producto')[0].textContent;
    var precio = producto.getElementsByClassName('precio_producto')[0].textContent;

    // Obtener los productos del carrito almacenados en el localStorage
    var productosEnCarrito = localStorage.getItem('productosEnCarrito');

    if (productosEnCarrito) {
      // Si hay productos en el carrito, se convierte la cadena en un objeto
      productosEnCarrito = JSON.parse(productosEnCarrito);
    } else {
      // Si no hay productos en el carrito, se inicializa como un objeto vacío
      productosEnCarrito = {};
    }

    // Verificar si el producto ya está en el carrito
    if (productosEnCarrito[nombre]) {
      // Si el producto ya está en el carrito, se incrementa la cantidad
      productosEnCarrito[nombre].cantidad++;
    } else {
      // Si el producto no está en el carrito, se agrega con una cantidad inicial de 1
      productosEnCarrito[nombre] = {
        nombre: nombre,
        precio: precio,
        cantidad: 1
      };
    }

    // Guardar los productos actualizados en el carrito en el localStorage
    localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
  });
}



// DESPLEGABLE (CARRITO)
document.addEventListener('DOMContentLoaded', function() {
    var carritoElement = document.getElementById('carrito');
    var subtotalElement = document.querySelector('.subtotal');
    var shippingCostsElement = document.querySelector('.shippingcosts');
    var totalElement = document.querySelector('.total_precio');
  
    var subtotal = 0;
  
    // Obtener los productos del carrito almacenados en el localStorage
    var productosEnCarrito = localStorage.getItem('productosEnCarrito');
  
    if (productosEnCarrito) {
      // Si hay productos en el carrito, se convierte la cadena en un objeto
      productosEnCarrito = JSON.parse(productosEnCarrito);
  
      // Recorrer los productos en el carrito y mostrar su información
      for (var nombreProducto in productosEnCarrito) {
        var producto = productosEnCarrito[nombreProducto];
        var elementoProducto = document.createElement('div');
        elementoProducto.classList.add('producto_agregado_carrito');
  
        var imgCarrito = document.createElement('img');
        imgCarrito.classList.add('img_carrito');
        imgCarrito.src = '../imagenes/imagen_prueba.png'; /*CAMBIAR*/
        imgCarrito.alt = 'carrito';
        elementoProducto.appendChild(imgCarrito);
  
        var informacionProductoCarrito = document.createElement('div');
        informacionProductoCarrito.classList.add('informacion_producto_carrito');
        elementoProducto.appendChild(informacionProductoCarrito);
  
        var h2NombreProducto = document.createElement('h2');
        h2NombreProducto.textContent = producto.nombre;
        informacionProductoCarrito.appendChild(h2NombreProducto);
  
        var divFlex = document.createElement('div');
        divFlex.classList.add('flex');
        informacionProductoCarrito.appendChild(divFlex);
  
        var divQuantity = document.createElement('div');
        divQuantity.classList.add('quantity');
        divFlex.appendChild(divQuantity);
  
        var pQuantity = document.createElement('p');
        pQuantity.textContent = 'Quantity ';
        divQuantity.appendChild(pQuantity);
  
        var divQuantityBoton = document.createElement('div');
        divQuantityBoton.classList.add('quantity_boton');
        divQuantity.appendChild(divQuantityBoton);
  
        var spanNumero = document.createElement('span');
        spanNumero.classList.add('numero');
        spanNumero.innerHTML = '<strong>' + producto.cantidad + '</strong>';
        divQuantityBoton.appendChild(spanNumero);
  
        var h3Precio = document.createElement('p'); /*OJO*/
        h3Precio.textContent = '$ ' + producto.precio + '/ unit';
        divFlex.appendChild(h3Precio);
  
        var precioTotalProductos = document.createElement('h3');
        precioTotalProductos.textContent = '$ ' + (parseFloat(producto.precio) * producto.cantidad).toFixed(2);
        divFlex.appendChild(precioTotalProductos);
        
  
        var precioFinal = parseFloat(producto.precio) * producto.cantidad; // Cálculo del precio final
        subtotal += precioFinal; // Sumar al subtotal
  
        carritoElement.appendChild(elementoProducto);
      }
    } else {
        // Si no hay productos en el carrito, se muestra un mensaje indicando que está vacío
        carritoElement.textContent = 'The shopping cart is empty!';
    }
    // Mostrar los valores iniciales de las variables en el HTML
    subtotalElement.textContent = '$ ' + subtotal.toFixed(2);
    shippingCostsElement.textContent = '$ ' + '2.50';
    totalElement.textContent = '$ ' + (subtotal + 2.50).toFixed(2);
  });














//ESTA ES LA PAGINA DEL CARRITO
//ELECCION TIENDA IN-STORE PICK UP
function toggleHoverColor(element) {
    var opcionesTienda = document.querySelectorAll(".opcion_tienda");

    opcionesTienda.forEach(function (opcion) {
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

button_pay.addEventListener("click", function () {
    elemento.classList.toggle("drawn");
    popupPedido.classList.add("active");
});

cerrarPopupPedidoRealizado.addEventListener("click", function () {
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

resta.addEventListener('click', function () {
    if (i > 1) {
        i--;
        cantidad.innerText = i;
        console.log(i);
    }
});

suma.addEventListener('click', function () {
    i++;
    cantidad.innerText = i;
    console.log(i);
});

window.addEventListener('beforeunload', function () {
    localStorage.setItem("cantidadActual", i);
});
