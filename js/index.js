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


// fade images on load
const images = document.getElementsByTagName("img");
for (let image of images) {
  image.addEventListener("load", fadeImg);
  image.style.opacity = "0";
}

function fadeImg () {
  this.style.transition = "opacity 3s";
  this.style.opacity = "1";
}
