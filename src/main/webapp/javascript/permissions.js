let creacionProducto = document.querySelector('.prod_crear');
let botonCrearProducto = document.querySelector('.button');
let botonReject = document.getElementById("register_2");
let productosCuerpoMenu = document.querySelector('.cuerpo_mensaje');
let edicionProducto = document.getElementById("producto_actual_edicion"); //POP UP EDICION
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

    let peticiones = [];
    /*LOS CAFES SON RECOGIDOS EN LA BBDD*/
    for (let i = 0; i < 6; i++) {
        peticiones.push(fetch('http://localhost:8081/src/Controller?ACTION=PRODUCT.FIND&TYPE=' + (i + 1)))
    }

    Promise.all(peticiones).then(function (rs) {
        Promise.all(rs.map(x => x.json())).then((tipos) =>

            tipos.forEach(function (item) {
                let cuerpoMenu = document.getElementById("prod")
                //cuerpoMenu.innerHTML = ""
                item.forEach(element => {
                    let div = document.createElement('div')
                    div.addEventListener("click", function () {
                        edicionProducto.classList.add('active');
                    });
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
            }));
    })
        .catch(function (error) {
            console.log('Error try again' + error.message);
        });





}

//ABRIR POPUP DE LOS PRODUCTOS YA EXISTENTES + CERRAR (X)
// let producto = document.querySelector('.prod'); //PRODUCTO
let producto = document.getElementById("prod");
let x_cerrar = document.querySelector('.icono_cerrar');

x_cerrar.addEventListener('click', function (e) {
    e.preventDefault();
    edicionProducto.classList.remove('active');
});