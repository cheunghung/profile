// fading clouds
topCloud = setInterval(topFading, 1000);

function topFading() {
  document.querySelector(".top-cloud").classList.toggle("fading");
}


bottomCloud = setInterval(bottomFading, 1500);

function bottomFading() {
  document.querySelector(".bottom-cloud").classList.toggle("fading");
}

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
