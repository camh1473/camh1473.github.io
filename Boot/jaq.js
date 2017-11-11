$(document).ready(function() {
    "use strict"; 
    // setBindings();
    // toggle();
    // Start of use strict

 
      // var tame = document.getElementById("anime");
      // tame.addEventListener("click", console.log('hit'));

      // var bang = function(){
      //   target.classList.remove("animated");
      //   setTimeout(function(){target.classList.add("animated")},10);

        
      // }
      window.on('scroll', , function() {
        console.log(this.scrollTop() );
      });

// function example() {
//     var tempScrollTop = window.scrollTop();
//     console.log("Scroll from Top: " + tempScrollTop.toString());
// };
    
function setBindings() {
  $('nav a').click(function(e){
    e.preventDefault();
    var sectionPart = "#" + e.currentTarget.id + "Part";


    $('html body').animate({
      scrollTop: $(sectionPart).offset().top
    }, 1000)
    
  })

}
})