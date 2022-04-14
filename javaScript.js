var button = document.querySelector('#search-button');
var currentCity = document.querySelector("#currentCity");
var input = document.querySelector('#citySearch');
var cityname = document.querySelector('#date1');
var desc = document.querySelector('#desc1');
var wind = document.querySelector('#temp1');
var myAPI = "308cb06555dd8f32cf29b8034f750d6d";
var forecastCards = document.querySelector('#day2');

button.addEventListener('click', function () {
    var city = currentCity.value
    console.log(city)

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&APPID=" + myAPI)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    // `#day${i}`
                    console.log(data);
                    forecastCards.innerHTML = '';
                    //i to look every 8 index (which is 1 day) 40 index=5 days
                    forecastCards.textContent = "";
                    for (let i = 0; i < 40; i += 8) {
                        displayWeather(data.list[i]);
                    }
                });
            } else {
                alert('Error: ' + response.statusText);

            }
        }); ``

    localStorage.setItem('searchedCity', city);


})

/**
 * this function takes the results from the Weather API and displays it to the DOM.
 * @param {object} day 
 */

function displayWeather(day) {

    let forecastContainer = document.querySelector("#weatherCards");
    let forecastIconDiv = document.createElement("div");
    let forecastTempDiv = document.createElement("div");
    let forecastDescDiv = document.createElement("div");
    let headerDiv = document.createElement("h3")
    let boxesDiv = document.createElement("div")
    boxesDiv.setAttribute("class", "col-12 col-sm-6 col-lg-4 mb-3");
    headerDiv.innerHTML = `Date:<br>${day.dt_txt.slice(0, -8)}`
    headerDiv.setAttribute("class", "card-header bg-info");

    forecastIconDiv.classList.add("box");
    forecastIconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">`;


    forecastTempDiv.classList.add("box");
    forecastTempDiv.innerHTML = `Temp:<br>${day.main.temp} °F`;


    forecastDescDiv.classList.add("box");
    forecastDescDiv.innerHTML = `Description:<br>${day.weather[0].description}`;

    boxesDiv.append(headerDiv,
        forecastIconDiv,

        forecastTempDiv,

        forecastDescDiv
    )

    forecastContainer.append(boxesDiv);
    console.log(day);
}


