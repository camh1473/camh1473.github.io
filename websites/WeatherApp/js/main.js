$(document).ready(function() {
    var long;
    var lat;
    var fTemp;
    var cTemp;
    var tempSwap = true;
    var citySearch = $("#city-search");
    var cityValue = citySearch.value

    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         long = position.coords.longitude;
    //         lat = position.coords.latitude;
    //         $("#data").html("Latitude: " + lat + "<br>Longitude: " + long);

            // API URL w/ geolocaion

            var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=e8939826fde9e588893ac315d48a2897";
            // var api = "http://api.openweathermap.org/data/2.5/weather?q="+cityValue+"&appid=e8939826fde9e588893ac315d48a2897";

            $.getJSON(api, function(data) {
                // JSON call for Open Weather API
                var condition = data.weather[0].description;
                var kTemp = data.main.temp;
                var windSpeed = data.wind.speed;
                windSpeed = (2.237 * (windSpeed));
                var city = data.name

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

                $("#city").html(city);
                $("#condition").html(condition);
                $("#windSpeed").html(windSpeed + " mph");
                $("#temp").html("It is currently " + fTemp + " &#8457");


                // Swap Fahr to Celc
                $("#temp").click(function() {
                    if (tempSwap === false) {
                        $("#temp").html("It is currently " + cTemp + " &#8451");
                        tempSwap = true;
                    } else {
                        $("#temp").html("It is currently " + fTemp + " &#8457");
                        tempSwap = false;
                    }
                });
                // fahr to celc ends
            });
             // chnge img to reflect weather



    //     });
    // }


});