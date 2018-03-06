$(document).ready(function() {
    var long;
    var lat;
    var fTemp;
    var cTemp;
    var tempSwap = true;

    // var cloudy = url(../image/cloudy.svg)
    // ---------------------JS CSS Styling-------------------------
    $("#city").css("font-size", "1.5em");
    $("#temp").css("font-size", "3em");
    // $("#icon").css("backgroundColor", "red")
    $("#icon").css('background-image', 'url('+/weather/sun.svg+')');
    // -------------------------End Styling-------------------
    // ---------------------GEOLOCATION COORDS---------------
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // -------------------------OpenWeather API URL w/ geolocaion coords-----------------------

            var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=e8939826fde9e588893ac315d48a2897";
            // var api = "http://api.openweathermap.org/data/2.5/weather?q="+cityValue+"&appid=e8939826fde9e588893ac315d48a2897";
            // -------------------End API------------------------
            $.getJSON(api, function(data) {
                // -----------------------JSON call for Open Weather API----------------
                var condition = data.weather[0].description;
                var kTemp = data.main.temp;
                var windSpeed = data.wind.speed;
                windSpeed = (2.237 * (windSpeed));
                var city = data.name;
                var weatherType = data.weather[0].main;

                // Temp in fahrenheit
                fTemp = (kTemp) * (9 / 5) - 459.67;
                // Temp in Celcius
                cTemp = kTemp - 273;


                console.log(data.coord.lon);
                console.log(data.coord.lat);
                console.log(data);
                console.log(fTemp);
                console.log(cTemp);
                console.log(kTemp);
                console.log(api);
                console.log(weatherType);
                // 		-------------placing values from OpenWeather JSON into html thru JQ DOM---------------
                $("#city").html(city);
                $("#condition").html(condition);
                $("#windSpeed").html(Math.round(windSpeed) + " mph winds");
                $("#temp").html(Math.round(fTemp) + " &#8457");


                // -------------temp conversion Fahr to Celc-----------
                $("#temp").click(function() {
                    if (tempSwap === false) {
                        $("#temp").html(Math.round(cTemp) + " &#8451");
                        tempSwap = true;
                    } else {
                        $("#temp").html(Math.round(fTemp) + " &#8457");
                        tempSwap = false;
                    }
                });
                // ------------------end Temp Conversion-------------
            });
            if (weatherType === "Clouds") {
                console.log(CLEAR);
                // $("#icon").css("background-image", "url('../weather/sun.svg')")
                $("#icon").css("backgroundColor", "blue")
            } 
            else {
            	$("#icon").css("backgroundColor", "white")
            };
            // 			----------------------------end JSON-------------------
        });

    }
    // ------------------End GeoLocation-----------
});