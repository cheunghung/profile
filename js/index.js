// terminal text greeting

var date = new Date();
var hour = date.getHours();

if (hour < 12) {
  consoleText(['Hello, Good Morning.',  'Welcome to My Page', 'Please Enjoy Your Stay.'], 'text',[]);
}
else if (hour < 18) {
  consoleText(['Hello, Good Afternoon.', 'Welcome to My Page', 'Please Enjoy Your Stay.'], 'text',[]);
}
else {
  consoleText(['Hello, Good Evening.', 'Welcome to My Page', 'Please Enjoy Your Stay.'], 'text',[]);
}

// function([string1, string2],target id,[color1,color2]) 
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




// hide loader and show  main content

// window.addEventListener("load", function () {
//   // Simulate a small delay before hiding the loader
//   setTimeout(function () {
//     // Fade out the loader
//     document.querySelector(".loader").style.display = "none";

//     // Fade in the main content
//     document.getElementById("main-content").classList.remove("hidden");
//     document.getElementById("main-content").classList.add("visible");
//   }, 2000); // Adjust the delay time as needed
// });




// hide loader and show  main content + scrollspy code in general

// window.addEventListener("load", function () {
//   // Simulate a small delay before hiding the loader
//   setTimeout(function () {
//     // Fade out the loader
//     document.querySelector(".loader").style.display = "none";

//     // Fade in the main content
//     const mainContent = document.getElementById("main-content");
//     mainContent.classList.remove("hidden");
//     mainContent.classList.add("visible");

//   // Initialize ScrollSpy on the scrollable div
//   const scrollSpyElement = document.getElementById('scrollspy-container');
//   const scrollSpy = new bootstrap.ScrollSpy(scrollSpyElement, {
//     target: '#list-example',
//     offset: 50 // Adjust if needed
//   });


//         // Manually refresh ScrollSpy on scroll
//         scrollableContainer.addEventListener('scroll', function () {
//           bootstrap.ScrollSpy.getInstance(scrollableContainer).refresh();
//         });


//             // Refresh ScrollSpy on window resize to ensure sections are tracked properly
//     window.addEventListener('resize', function () {
//       scrollSpy.refresh();
//     });


//   }, 2000); // Adjust the delay time as needed
// });



// hide loader and show  main content + scrollspy specifically for following offset positions:
// About section offset: 30
// Hobbies section offset: 761
// Contact section offset: 2337


window.addEventListener("load", function () {
  // Simulate a small delay before hiding the loader
  setTimeout(function () {
    // Fade out the loader
    document.querySelector(".loader").style.display = "none";

    // Fade in the main content
    const mainContent = document.getElementById("main-content");
    mainContent.classList.remove("hidden");
    mainContent.classList.add("visible");

    // Initialize ScrollSpy on the scrollable div
    const scrollSpyElement = document.getElementById('scrollspy-container');

    // Calculate offsets for each section
    const aboutOffset = 30;   // Offset for About section
    const hobbiesOffset = 761; // Offset for Hobbies section
    const contactOffset = 2337; // Offset for Contact section

    // Function to calculate effective offset based on scroll position
    function getEffectiveOffset() {
      const scrollTop = scrollSpyElement.scrollTop;
      if (scrollTop < hobbiesOffset) {
        return aboutOffset; // Use About section offset
      } else if (scrollTop < contactOffset) {
        return hobbiesOffset; // Use Hobbies section offset
      } else {
        return contactOffset; // Use Contact section offset
      }
    }

    const scrollSpy = new bootstrap.ScrollSpy(scrollSpyElement, {
      target: '#list-example',
      offset: getEffectiveOffset() // Initial offset
    });

    // Manually refresh ScrollSpy on scroll
    scrollSpyElement.addEventListener('scroll', function () {
      scrollSpy.refresh();
      scrollSpy.offset = getEffectiveOffset(); // Update offset dynamically on scroll
    });

    // Refresh ScrollSpy on window resize to ensure sections are tracked properly
    window.addEventListener('resize', function () {
      scrollSpy.refresh();
    });

  }, 3000); // Adjust the delay time as needed
});
