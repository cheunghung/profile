
// array for system to randomly pick out colors
var buttonColours = ["red", "blue", "green", "yellow"];

// system array
var gamePattern = [];

// user array
var userClickedPattern = [];

// starting variables
var started = false;
var level = 0;

// Press any key to start 1st level
// further keystrokes will not add new level
// can ignore below keystroke event afterwards & proceed to listen for click
$(document).keypress(function() {

  // if (false)
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// For EACH user click for each memorized color
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  // add to user array
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  // call function to check against system array
  checkAnswer(userClickedPattern.length-1);
});

// checkAnswer(index of last color)
function checkAnswer(currentLevel) {

    // check if last color in both arrays is same?
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      // check if length of both arrays is same?
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

// add new level
function nextSequence() {

  // for each new level, the userClickedPattern array is cleared
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  // add randomly generated color to gamePattern array
  gamePattern.push(randomChosenColour);

  // a random color will flash & user memorize it
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
