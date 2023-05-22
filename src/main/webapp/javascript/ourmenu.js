window.onload = function () {

  fetch('http://localhost:8081/src/Controller?ACTION=PRODUCT.FIND&TYPE=2').then(function (response) {
    response.json().then(function (json) {
      let cuerpoMenu = document.getElementById("te")
      cuerpoMenu.innerHTML = ""
      json.forEach(element => {
        let div = document.createElement('div')
        div.innerHTML = `
            <div class="producto_cafe">
                <div class="informacion_producto_vendido">
                    <h4>${element.productDesc}</h4>
                    <p class="informacion_prod_vend_texto">
                    ${element.productTitle}
                    </p>
                    <div class="informacion_producto_vendido_flex">
                        <a class="enlace_producto" href="#"><p
                                class="botones_info">Allergens</p></a>
                        <a class="enlace_producto"
                            href="../otros/Nutritional_tables_CtrlAlt_Coffee.pdf"
                            title="Nutritional tables"
                            target="blank"><p class="botones_info">Nutritional
                                tables</p></a>
                    </div>
                </div>
                <div class="elemento_ocultado_posteriormente">
                    <img class="cafe_menu_1"
                        src="${element.productImg}" />
                    <div class="info_nombre_precio">
                        <p><strong>${element.productName}</strong></p>
                        <p>$ ${element.productPrice}0</p>
                    </div>
                </div>
            </div>
            <button class="boton_carrito" onclick="addProduct(${element.productId})">
                <svg viewBox="0 0 16 16" class="carrito_boton"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"><path
                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path></svg>
            </button>

              `
        cuerpoMenu.appendChild(div);
      });
    });
  })
    .catch(function (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
}





/*BOTON SCROLL*/
let mybutton = document.getElementById("boton_scroll");

window.onscroll = function () { scrollFunction() };

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

btnAbrirPopup.addEventListener('click', function () {
  overlay.classList.add('active');
  popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function (e) {
  e.preventDefault();
  overlay.classList.remove('active');
  popup.classList.remove('active');
});

