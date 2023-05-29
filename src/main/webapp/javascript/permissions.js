let creacionProducto = document.querySelector('.prod_crear');
let botonCrearProducto = document.querySelector('.button');
let botonReject = document.getElementById("button_close");
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

//CREAR PRODUCTOS
let button_add = document.getElementById("button_add");
button_add.addEventListener('click', function () {
    let nombre = document.getElementById("input_name").value;
    let descripcion = document.getElementById("input_description").value;
    let precio = document.getElementById("input_price").value;
    let imagen = encodeURI(document.getElementById("input_img").value);
    let categoria = document.getElementById("select_categoria").value;
    let titulo = document.getElementById("input_title").value;

    fetch('http://localhost:8081/src/Controller?ACTION=PRODUCT.ADD&NAME=' + nombre + '&DESC=' + descripcion + '&PRECIO=' + precio + '&IMG=' + titulo + '&CATEGORIA=' + categoria + '&TITLE=' + imagen).then(function (response) {

        response.json().then(function (json) {
            if (json == '0') {
                alert("The data has been saved succesfully")

            } else {
                alert("The data has been saved succesfully")
                window.location.href = "../index.html"
            }


        });
    })
        .catch(function (error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
});












//ABRIR POPUP DE LOS PRODUCTOS YA EXISTENTES + CERRAR (X)
// let producto = document.querySelector('.prod'); //PRODUCTO
let producto = document.getElementById("prod");
let x_cerrar = document.querySelector('.icono_cerrar');

x_cerrar.addEventListener('click', function (e) {
    e.preventDefault();
    edicionProducto.classList.remove('active');
});