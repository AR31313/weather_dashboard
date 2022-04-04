var button = document.querySelector('#search-button');
var currentCity = document.querySelector("#currentCity");
var input = document.querySelector('#citySearch');
var cityname = document.querySelector('#date1');
var desc = document.querySelector('#desc1');
var wind = document.querySelector('#temp1');
var myAPI = "308cb06555dd8f32cf29b8034f750d6d";

button.addEventListener('click', function () {
    var city = currentCity.value
    console.log(city)

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + myAPI)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    wind.innerHTML = '';
                    wind.textContent = "hello";
                });
            } else {
                alert('Error: ' + response.statusText);

            }
        });

    localStorage.setItem('searchedCity', city);


})


