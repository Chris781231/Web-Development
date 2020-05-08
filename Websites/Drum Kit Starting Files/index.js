// Define Sound
var tom1Sound = new Audio('sounds/tom-1.mp3');
var tom2Sound = new Audio('sounds/tom-2.mp3');
var tom3Sound = new Audio('sounds/tom-3.mp3');
var tom4Sound = new Audio('sounds/tom-4.mp3');
var crashSound = new Audio('sounds/crash.mp3');
var snareSound = new Audio('sounds/snare.mp3');
var kickSound = new Audio('sounds/kick-bass.mp3');

// Detecting Button Press
var drumButtons = document.querySelectorAll(".drum");
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  drumButtons[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);
});


function makeSound(key) {

  switch (key) {
    case 'w':
      tom1Sound.play();
      break;
    case 'a':
      tom2Sound.play();
      break;
    case 's':
      tom3Sound.play();
      break;
    case 'd':
      tom4Sound.play();
      break;
    case 'j':
      snareSound.play();
      break;
    case 'k':
      crashSound.play();
      break;
    case 'l':
      kickSound.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

//Animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
