//display current date/time using moment.js
var today = moment();
$("#currentDay").text(today.format("llll"));

//global variables
// Set global variables, including Open Weather Maps API Key
var myAPI = "308cb06555dd8f32cf29b8034f750d6d";
var currentCity = document.querySelector(".currentCity");
var lastCity = "";
//when they click past cities link
var historyBtn = document.querySelector('#pastSearch');
//where the retreived data goes
var forecastContainer = document.querySelector('.infoContainer');
//show the city name inline
var nameofCitySearched = document.querySelector('#searchedCity');




// Function to get and display the current conditions on Open Weather Maps
var getCurrentForecast = function () {
    // Obtain city name from the search box
    // var city = currentCity.value;
    console.log(currentCity.value);
    // Set the apiUrl to fetch from API using weather search
    // var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + myAPI;
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    });
};


// var displayCities = function (repos, searchTerm) {
//     if (repos.length === 0) {
//         forecastContainer.textContent = 'No repositories found.';
//         return;
//     }
//     nameofCitySearched.textContent = searchTerm;

//     for (var i = 0; i < days.length; i++) { //loop through the values
//         console.log(days[i].datetime + ": tempmax=" + days[i].tempmax + ", tempmin=" + days[i].tempmin); //printing the date,time,max & min temp.
//     }
// };

// // Function to save the city to localStorage
// var saveCity = (newCity) => {
//     let cityExists = false;
//     // Check if City exists in local storage
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage["cities" + i] === newCity) {
//             cityExists = true;
//             break;
//         }
//     }

//     // Save to localStorage if city is new
//     if (cityExists === false) {
//         localStorage.setItem('cities' + localStorage.length, newCity);
//     }
// }
// New city search button event listener
// $('#search-button').on("click", getCurrentForecast)
console.log(getCurrentForecast);

// //Source: https://www.visualcrossing.com/resources/documentation/weather-api/how-to-load-weather-data-in-javascript/

// //FETCH API request
// fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key=TDLC3H3DG4HX8RMZBXMNRAPY8&contentType=json", {
//     "method": "GET",
//     "headers": {
//     }
// })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// //output some of the information to the JavaScript console.
// function processWeatherData(response) {

//     var location = response.resolvedAddress;
//     var days = response.days;
//     console.log("Location: " + location); //print out the location address
//     for (var i = 0; i < days.length; i++) { //through the values
//         console.log(days[i].datetime + ": tempmax=" + days[i].tempmax + ", tempmin=" + days[i].tempmin); //printing the date,time,max & min temp.
//     }
// }