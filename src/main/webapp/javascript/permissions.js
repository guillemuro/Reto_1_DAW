let creacionProducto = document.querySelector('.prod_crear');
let botonCrearProducto = document.querySelector('.button');
let botonReject = document.getElementById("register_2");
let productosCuerpoMenu = document.querySelector('.cuerpo_mensaje');
// .productos_cuerpo_mensaje


//ABRIR POPUP DE CREAR UN NUEVO PRODUCTO
botonCrearProducto.addEventListener('click', function () {
    creacionProducto.classList.add('active');
});

botonReject.addEventListener('click', function (e) {
    e.preventDefault();
    creacionProducto.classList.remove('active');
});


window.onload = function () {

    /*LOS CAFES SON RECOGIDOS EN LA BBDD*/
    fetch('http://localhost:8081/src/Controller?ACTION=PRODUCT.FIND&TYPE=1').then(function (response) {
        response.json().then(function (json) {
            let cuerpoMenu = document.getElementById("prod")
            cuerpoMenu.innerHTML = ""
            json.forEach(element => {
                let div = document.createElement('div')
                div.innerHTML = `
                    <div class="prod" id="prod">
                        <div class="producto_zona_privada"
                            id="prod_zona_privada">
                            <img class="imagen_prueba"
                                src="${element.productImg}" alt="imagen" />
                            <h3><strong>${element.productName}</strong></h3>
                        </div>
                    </div>
                `
                cuerpoMenu.appendChild(div);
            });
        });
    })
        .catch(function (error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });



}

//ABRIR POPUP DE LOS PRODUCTOS YA EXISTENTES + CERRAR (X)
// let producto = document.querySelector('.prod'); //PRODUCTO
let producto = document.getElementById("prod");
let edicionProducto = document.getElementById("producto_actual_edicion"); //POP UP EDICION
let x_cerrar = document.querySelector('.icono_cerrar');

producto.addEventListener('click', function () {
    edicionProducto.classList.add('active');
});

x_cerrar.addEventListener('click', function (e) {
    e.preventDefault();
    edicionProducto.classList.remove('active');
});