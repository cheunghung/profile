
// Hide game result
document.querySelector("h1").classList.add("invisible");

// User rolls dice
document.querySelector("p.instruc").addEventListener("click", function () {

  // Dice sound effects
  var roll = new Audio('sounds/dice-roll.mp3');
  roll.play();

  // Rolling dice 1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  var randomImageSource = "images/dice/" + randomDiceImage; //images/dice1.png - images/dice6.png
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  // Rolling dice 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var randomImageSource2 = "images/dice/" + randomDiceImage2;
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


  // If player 1 or 2 wins & draw
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩 ";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }


  // Make game result appear
  document.querySelector("h1").classList.remove("invisible");


})
