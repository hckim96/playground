const API_KEY = 'f45610611a10099a1ac47767f60fb43c';

const COORDS = 'coords';

const weather = document.querySelector('.weather');

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then(function (response) {
            const weatherObj = response.json();
            return weatherObj;
        })

        .then(function (weatherObj) {
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

const options = {
    enableHighAccuracy: true,
    maximumAge: 1,
    timeout: 1,
};
function getCoords() {
    navigator.geolocation.watchPosition(success, fail, options);
}

function loadWeather() {
    currentCoords = localStorage.getItem(COORDS);

    if (currentCoords === null) {
        getCoords();
    } else {
        getCoords();
    }
}

loadWeather();
