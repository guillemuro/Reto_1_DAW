function registrar() {

    let email = document.getElementById("email").value
    let password = document.getElementById("message").value
    let username = document.getElementById("name").value



    fetch('http://localhost:8081/src/Controller?ACTION=USER.ADD&EMAIL=' + email + '&PASS=' + password + '&USERNAME=' + username).then(function (response) {
        response.json().then(function (json) {
            if (json == '1') {
                alert("The data has been saved succesfully")
                window.location.href = "../index.html"
                localStorage.setItem("userId",)
            } else {
                alert("Try again")
            }


        });
    })
        .catch(function (error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
}