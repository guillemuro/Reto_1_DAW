/*BOTON SCROLL*/
let mybutton = document.getElementById("boton_scroll");

window.onscroll = function() {scrollFunction()};

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
window.onload = function() {
  var container = document.querySelector('.container');
  container.addEventListener('click', function() {
    container.classList.toggle('active');
  });

  var messageOverlay = document.querySelector('.message-overlay');
  messageOverlay.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  var closeButton = document.querySelector('.x_zona_privada');
  closeButton.addEventListener('click', function() {
    container.classList.remove('active');
  });
};