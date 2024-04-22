// Regular JavaScript

// play sound effect when profile pic is clicked
document.querySelector(".profile-pic").addEventListener("click", function () {
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
});

// jQuery

// changes color of name on click
$("p.name").on("click", function () {
  $("p.name").css("color", "#9a29b9");
});
