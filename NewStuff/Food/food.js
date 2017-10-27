  "use strict";

  // Menu Icon Animation
  var wrapperMenu = document.querySelector(".handle");

  function iconAni() {
    wrapperMenu.addEventListener("click", function() {
      wrapperMenu.classList.toggle("open");
    });
  }

  // show and hide navList

  var navToggle = document.querySelector(".handle");
  var showMe = document.getElementById("navList");

  function hideList() {
    navToggle.addEventListener("click", () =>
      showMe.classList.toggle("hide"));
  }

  // Map Initialization
  function initMap() {
    var uluru = { lat: 30.263481, lng: -97.7628586 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  // slider definitions
  var next = document.getElementById("nextImg");
  var prev = document.getElementById("prevImg");
  // document.getElementById("slider");

  // Slider Start position
  var i = 0;
  var images = [];
  var time = 4000;

  // image List
  images[0] = "day_busy.jpg";
  images[1] = "eggsRolls.jpg";
  images[2] = "truck.jpg";
  images[3] = "nina.jpg";
  images[4] = "entree.jpg";

  // Change image
  function changeImg() {
    slider.style.backgroundImage = "url('" + images[i] + "')";

    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setTimeout("changeImg()", time);
  }

  // slider buttons
  function buttons() {
    //          ***PRV BTN***

    prev.addEventListener("click", function() {
      if (i < images.length + 1 && i > 1) {
        i--;
      } else {
        i = images.length;
      }
      slider.style.backgroundImage = "url('" + images[i - 1] + "')";
    })
    //        ***NEXT BTN*** 

    next.addEventListener("click", function() {
      if (i < images.length) {
        i++;
      } else {
        i = 1;
      }
      slider.style.backgroundImage = "url('" + images[i - 1] + "')";
    })
  }


// fade
var fadeInFrom = 0;
var fadeOutFrom = 10;

function fadeIn(slider){
  slider.style.display = "grid";
  var newSetting = fadeInFrom /10;
  slider.style.opacity =  newSetting;

  fadeInFrom++;
  if(fadeInFrom == 10) {
  slider.style.opacity = 1;
  clearTimeout(loopTimer);
  fadeInFrom = 0;
  return false;
  }

  var loopTimer = setTimeout("fadeIn(/"+slider+"/)",50);
}

function fadeOut(slider){
  // slider.style.display = "grid";
  var newSetting = fadeInFrom /10;
  slider.style.opacity =  newSetting;

  fadeOutFrom--;
  if(fadeInFrom == 0) {
  slider.style.opacity = 0;
  slider.style.display = "none";
  clearTimeout(loopTimer);
  fadeInFrom = 10;
  return false;
  }


  var loopTimer = setTimeout("fadeOut(/"+slider+"/)",50);

}


  //  FUNCTION CALLS
  buttons();
  changeImg();
  hideList();
  iconAni();