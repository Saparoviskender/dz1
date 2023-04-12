
function moveRight(element, distance) {
   var currentLeft = parseInt(element.style.left) || 0;
   if (currentLeft + distance < element.parentNode.offsetWidth - element.offsetWidth) {
     element.style.left = currentLeft + distance + "px";
     setTimeout(function() {
       moveRight(element, distance);
     }, 10);
   }
 }
 var child = document.getElementById("child");
 moveRight(child, 10);
 






  function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    if (password.length < 4 || password.length > 30) {
      document.getElementById("result").innerHTML = "пароль должен от 4 до 30 символов";
    } else if (!/\d/.test(password)) {
      document.getElementById("result").innerHTML = "пароль должен содержать хотябы одну цифру";
    } else if (password.length < 8) {
      document.getElementById("result").innerHTML = "пароль должен не менее 8 символов";
    } else if (password !== confirmPassword) {
      document.getElementById("result").innerHTML = "пароли не совпадают";
    } else {
      document.getElementById("result").innerHTML = "пароли совпадают все ок";
    }
  }
  

  function togglePassword() {
    let passwordField = document.getElementById("password");
    let showPasswordButton = document.getElementById("show-password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      showPasswordButton.innerHTML = "&#128064;";
    } else {
      passwordField.type = "password";
      showPasswordButton.innerHTML = "&#128065;";
    }
  }
