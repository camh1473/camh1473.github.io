$(document).ready(function() {
    "use strict"; 
    setBindings();
    // Start of use strict
})
function setBindings() {
  $('nav a').click(function(e){
    e.preventDefault();
    var sectionPart = "#" + e.currentTarget.id + "Part";


    $('html body').animate({
      scrollTop: $(sectionPart).offset().top
    }, 1000)
    
  })

}
