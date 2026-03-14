const button = document.getElementById("changeTextBtn");
const message = document.getElementById("message");

button.addEventListener("click", function() {
  message.textContent = "You clicked the button! JavaScript is working!";
});

// JavaScript code to toggle dark mode
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

