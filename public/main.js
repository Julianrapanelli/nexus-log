document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

//función para ocultar el navbar cuando uno scrollea
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
} 

//formulario de contacto

// referencia a la colección mensajes de firebase
var messagesRef = firebase.database().ref('messages');


document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
  e.preventDefault();
  
  //get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  //guardar mensaje
  saveMessage(name, email, message);
}

//función para sacar los valores del form
function getInputVal(id){
  return document.getElementById(id).value;
}
//función para guardar el mensaje para firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}