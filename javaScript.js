var button = document.querySelector('#search-button');
var currentCity = document.querySelector("#currentCity");
var input = document.querySelector('#citySearch');
var cityname = document.querySelector('#date1');
var desc = document.querySelector('#desc1');
var wind = document.querySelector('#temp1');
var myAPI = "308cb06555dd8f32cf29b8034f750d6d";
var forecastCards = document.querySelector('#day2');

// Button function to clear local storage and clear contents
$("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
    forecastCards.innerHTML = "";
});

// RETRIVE ITEM FROM STORAGE AFTER HITTING REFRESH BTN
//https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance

function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }
    return values;
}
for (let i = 0; i < currentCity.length; i++) {
    console.log(document.getElementById(`${i}`))
    document.getElementById(`${i}`).value = localStorage.getItem(`${i}`)
}

//grabs values from city divs and saves them to local storage
for (var i = 0; i < button.length; i++) {
    $("#search-button").click(function (event) {
        var entry = event.target.previousElementSibling.value;
        if (entry == null) {
            return;
        }
        var timeName = event.target.previousElementSibling.getAttribute("id");
        console.log(timeName)
        localStorage.setItem(timeName, entry);
    })
};

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
                    //i to look every 8 index (which is 1 day) 40 index=5 days (8timesolts x 5days=40)
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

    // let forecastContainer = document.querySelector("#weatherCards");
    let forecastIconDiv = document.createElement("div");
    let forecastTempDiv = document.createElement("div");
    let forecastDescDiv = document.createElement("div");
    let headerDiv = document.createElement("h3")
    let boxesDiv = document.createElement("div")

    boxesDiv.setAttribute("class", "w3-col", "13", "m6", "w3-margin-bottom");
    headerDiv.setAttribute("class", "card-header bg-info");
    forecastTempDiv.classList.add("box");
    forecastIconDiv.classList.add("box");
    forecastDescDiv.classList.add("box");

    headerDiv.innerHTML = `Date:<br>${day.dt_txt.slice(0, -8)}`
    forecastIconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">`;
    forecastTempDiv.innerHTML = `Temp:<br>${day.main.temp} °F`;
    forecastDescDiv.innerHTML = `Description:<br>${day.weather[0].description}`;

    boxesDiv.append(headerDiv,
        forecastIconDiv,

        forecastTempDiv,

        forecastDescDiv
    )

    forecastCards.append(boxesDiv);
    console.log(day);
}


