const API_KEY = 'f45610611a10099a1ac47767f60fb43c';

const COORDS = 'coords';

const weather = document.querySelector('.weather');

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then(function (response) {
            console.log(response);
            const weatherObj = response.json();
            return weatherObj;
        })

        .then(function (weatherObj) {
            console.log(weatherObj);
            console.log(weatherObj.coord.lat);
            weather.innerText = ` ${weatherObj.name}  ${weatherObj.main.temp} ℃`;
        });
}
function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat, lon);
}
function fail() {
    console.log('fail to get coords');
}
function getCoords() {
    navigator.geolocation.getCurrentPosition(success, fail);
}

function loadWeather() {
    currentCoords = localStorage.getItem(COORDS);

    if (currentCoords === null) {
        getCoords();
    } else {
    }
}

loadWeather();
