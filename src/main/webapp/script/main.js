function devolverValor() {
    let url = "http://localhost:8080/src/Controller?ACTION=USER.FIND"/*DEBERIA IR EN EL PUERTO 8080?!*/
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
        })
        .catch(error => {
            console.error(error)
        });
}

/*B2B DEBE CORRER POR UN PUERTO DIFERENTE AL 8080 (8081)
Y LA PAGINA WEB DEBE CORRER POR EL PUERTO 80 Y 8080*/