function devolverValor() {
    let url = "http://localhost:8080/src/Controller?ACTION=USER.FIND"
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
        })
        .catch(error => {
            console.error(error)
        });
}