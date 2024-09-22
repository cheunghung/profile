// greeting

var date = new Date();
var hour = date.getHours();

if (hour < 12) {
  document.querySelector(".greeting").innerHTML = "Good Morning.";
}
else if (hour < 18) {
  document.querySelector(".greeting").innerHTML = "Good Afternoon.";
}
else {
  document.querySelector(".greeting").innerHTML = "Good Evening.";
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



// fade in webpage

window.addEventListener('load', function() {
  document.body.style.opacity = 1; // Fade in by setting opacity to 1
});


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


