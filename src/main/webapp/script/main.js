function devolverValor() {
    let url = "http://localhost:8081/src/Controller?ACTION=USER.FIND"; /* Aquí defines la URL a la cual realizarás la solicitud */

    fetch(url) /* Realizas una solicitud fetch a la URL especificada */
        .then(response => response.json()) /* Parseas la respuesta de la solicitud como JSON */
        .then(json => {
            console.log(json); /* Imprimes el JSON en la consola */
        })
        .catch(error => {
            console.error(error); /* Manejas cualquier error que ocurra durante la solicitud */
        });
}

