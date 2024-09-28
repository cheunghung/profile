

// greeting

// var date = new Date();
// var hour = date.getHours();

// if (hour < 12) {
//   document.querySelector(".greeting").innerHTML = "Good Morning.";
// }
// else if (hour < 18) {
//   document.querySelector(".greeting").innerHTML = "Good Afternoon.";
// }
// else {
//   document.querySelector(".greeting").innerHTML = "Good Evening.";
// }


// function([string1, string2],target id,[color1,color2]) 


var date = new Date();
var hour = date.getHours();

if (hour < 12) {
  consoleText(['Hello, Good Morning.', 'Welcome to My Page.',], 'text',[]);
}
else if (hour < 18) {
  consoleText(['Hello, Good Afternoon.', 'Welcome to My Page.',], 'text',[]);
}
else {
  consoleText(['Hello, Good Evening.', 'Welcome to My Page.',], 'text',[]);
}


// consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#11999E'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 2000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 2000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 50)  // Faster typing speed by reducing from 120 to 50ms
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 300)   // Faster cursor blink by reducing from 400 to 300ms
}






// copyright year

var year = date.getFullYear()
document.querySelector(".year").innerHTML = year;


// play music

const audio = new Audio('sounds/mangoo-inside-you.mp3'); // Change this to your music file path

// Set the audio to loop indefinitely
audio.loop = true;

// Button to pause/resume music
const toggleButton = document.getElementById('toggleMusic');

toggleButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        toggleButton.textContent = 'Pause Music';
    } else {
        audio.pause();
        toggleButton.textContent = 'Play Music';
    }
});



// // fade in webpage

// window.addEventListener('load', function() {
//   document.body.style.opacity = 1; // Fade in by setting opacity to 1
// });


// fade in images


document.addEventListener('DOMContentLoaded', function () {
  // Select all images with the 'fade-out' class
  const faders = document.querySelectorAll('.fade-out');

  // Options for the observer
  const options = {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the image is visible
  };

  // Callback function for the observer
  const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      } else {
        entry.target.classList.remove('fade-in');
      }
    });
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(handleIntersect, options);

  // Observe each fader
  faders.forEach(fader => {
    observer.observe(fader);
  });
});


// disable right click


document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  alert('© Copyright 2024 Jackie Chan');
});



// hide the loader and show the main content after the page loads.

window.addEventListener("load", function () {
  // Simulate a small delay before hiding the loader
  setTimeout(function () {
    // Fade out the loader
    document.querySelector(".loader").style.display = "none";

    // Fade in the main content
    document.getElementById("main-content").classList.remove("hidden");
    document.getElementById("main-content").classList.add("visible");
  }, 2300); // Adjust the delay time as needed
});