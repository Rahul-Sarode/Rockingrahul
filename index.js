
// For Mouse Click
for (var n = 0; n < (document.querySelectorAll(".drum").length); n++)
{
  document.querySelectorAll(".set button")[n].addEventListener("click", press);

  function press() {
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed);
    addAnimation(buttonPressed);
  }

}

// For Keyboard Press
document.addEventListener("keydown", keys);

  function keys() {
  makeSound(event.key);
  addAnimation(event.key);
}

//Sound Function
function makeSound(key) {

  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;


    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    default:
  }

}

// Animation Function
function addAnimation(currentKey){
  var activeButton= document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function()
  {
    activeButton.classList.remove("pressed");
  },100);


}
