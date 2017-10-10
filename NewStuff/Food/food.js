  "use strict";

// Menu Icon Animation
var wrapperMenu = document.querySelector(".handle");

function iconAni(){
wrapperMenu.addEventListener("click", function() {
  wrapperMenu.classList.toggle("open");
});
}

// // show and hide navList

var navToggle = document.querySelector(".handle");
var showMe = document.getElementById("navList");

function hideList(){
  navToggle.addEventListener("click", () =>
    showMe.classList.toggle("hide"));
}


//  FUNCTION CALLS
hideList();
iconAni();
 



