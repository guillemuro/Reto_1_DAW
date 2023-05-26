function registrar() {
    // Obtenemos los valores de los campos de email, password y username
    let email = document.getElementById("email").value;
    let password = document.getElementById("message").value;
    let username = document.getElementById("name").value;

    // Realizamos una solicitud fetch para registrar al usuario en el servidor
    fetch('http://localhost:8081/src/Controller?ACTION=USER.ADD&EMAIL=' + email + '&PASS=' + password + '&USERNAME=' + username)
        .then(function (response) {
            response.json().then(function (json) {

                // Verificamos la respuesta del servidor
                if (json == '1') {
                    // Si la respuesta es '1', el registro fue exitoso
                    alert("The data has been saved successfully");
                    // Redirigimos al usuario a la página de inicio
                    window.location.href = "../index.html";
                    // Guardamos el ID del usuario en el almacenamiento local (localStorage)
                    localStorage.setItem("userId", json.userId);
                } else {
                    // Si la respuesta no es '1', hubo un problema con el registro
                    alert("Try again");
                }
            });
        })
        .catch(function (error) {
            console.log('Hubo un problema con la petición Fetch: ' + error.message);
        });
}
