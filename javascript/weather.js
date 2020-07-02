const API_KEY = 'f45610611a10099a1ac47767f60fb43c';

const COORDS = 'coords';

const weather = document.querySelector('.weather');

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${
            // lon - 0.041962
            // lon - 0.092273
            lon - 0.0671175
            //
        }&APPID=${API_KEY}&units=metric`
    )
        .then(function (response) {
            const weatherObj = response.json();
            return weatherObj;
        })

        .then(function (weatherObj) {
            const image = new Image();

            image.src = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`;
            image.classList.add('weather-image');
            weather.innerText = ` ${weatherObj.name} ${weatherObj.main.temp} ℃`;
            console.log(weatherObj);

            weather.appendChild(image);
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
    maximumAge: 30000,
    timeout: 27000,
};
function getCoords() {
    navigator.geolocation.getCurrentPosition(success, fail, options);
}

function loadWeather() {
    currentCoords = JSON.parse(localStorage.getItem(COORDS));

    if (currentCoords === null) {
        getCoords();
    } else {
        getWeather(currentCoords.lat, currentCoords.lon);
    }
}

loadWeather();

// 37.6 - 127.14
