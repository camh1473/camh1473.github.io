$(document).ready(function(){
	"use strict"
// smooth scroll
  $(".navLink").click((e) => {
  e.preventDefault();

    var sectionPart = "#" + e.currentTarget.id + "Part";

    $('html, body').animate({
        scrollTop: $(sectionPart).offset().top - $(".navWrapper").height()
    }, 1500);
});

  // Logo scroll
   $("#logoLg").click((e) => {
  e.preventDefault();


    $('html, body').animate({
        scrollTop: $("#hero").offset().top - $(".navWrapper").height()
    }, 1500);
});



});
