// Simple form submit action

document.getElementById("contactForm").addEventListener("submit", function(event) {

  event.preventDefault();

  alert("Message sent successfully!");

  this.reset();

});