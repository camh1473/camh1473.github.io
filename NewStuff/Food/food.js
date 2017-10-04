$(document).ready(function(){
	"use strict";
	setBindings();
})

var links = $("nav a")
var link1 = document.getElementById("guide")
var linkz = document.getElementsByClassName("nav-link")
var link = document.querySelectorAll("nav a")

// setup of carousel
var i = 0;
var images = [];
var time = 3000;
// image list
images[0] = 'curry.jpg';
images[1] = 'busyDay.jpg';
images[2] = 'eggsRolls.jpg';
// change image
function  changeImg(){
var pics = document.getElementById("slide");
pics.src = images[i];

if(i < images.length-1){
  i++;
}else {
  i=0
}

setTimeout("changeImg()", time);
};

function changeColor(){
	links.innerHTML="HotSHIT!";
};

window.onload = changeImg ;

// setBindgins function
function setBindings() {
  link1.click(function(e){
    e.preventDefault();
    var sectionPart = "#" + e.currentTarget.id + "Part";

alert("hault");
    // $('html body').animate({
    //   scrollTop: $(sectionPart).offset().top
    // }, 1000)
    
  })

// last closing tag
}
