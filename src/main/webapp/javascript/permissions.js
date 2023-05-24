let creacionProducto = document.querySelector('.prod_crear');
let botonCrearProducto = document.querySelector('.button');
let botonReject = document.getElementById("register_2");
let productosCuerpoMenu = document.querySelector('.cuerpo_mensaje'); 
// .productos_cuerpo_mensaje


//ABRIR POPUP DE CREAR UN NUEVO PRODUCTO
botonCrearProducto.addEventListener('click', function () {
    creacionProducto.classList.add('active');
});

botonReject.addEventListener('click', function(e) {
    e.preventDefault();
    creacionProducto.classList.remove('active');
});


//ABRIR POPUP DE LOS PRODUCTOS YA EXISTENTES + CERRAR (X)
// let producto = document.querySelector('.prod'); //PRODUCTO
let producto = document.getElementById("prod");
let edicionProducto = document.getElementById("producto_actual_edicion"); //POP UP EDICION
let x_cerrar = document.querySelector('.icono_cerrar');

producto.addEventListener('click', function() {
    edicionProducto.classList.add('active');
});

x_cerrar.addEventListener('click', function(e) {
    e.preventDefault();
    edicionProducto.classList.remove('active');
});