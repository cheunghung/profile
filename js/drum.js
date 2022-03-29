
// Finding no. of drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Adding event listners to each button
for (var i = 0; i < numberOfDrumButtons; i++) {

// event listner to detect mouse click
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

// event listner to detect key pressed
  document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);

});

// Function to make sound
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

// Animate button
function buttonAnimation(currentKey) {

  // locate button
  var activeButton = document.querySelector("." + currentKey);

  // Add class to style when clicked/ pressed
  activeButton.classList.add("pressed");

  // Remove class after timeout
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
