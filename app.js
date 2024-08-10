const API_KEY = "d20984f34a1aeef66d7d5da21b7f5d6d";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
let inputData = document.querySelector('.search input');
let inputBtn = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(cityName) {
    try {
        const response = await fetch(url + `&q=${cityName}&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        let data = await response.json();
        console.log(data);
        document.querySelector('.city-name').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = data.main.temp + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind-speed').innerHTML = data.wind.speed + "m/s";
        document.querySelector('.temp-desc').innerHTML = data.weather[0].description;

        if (data.weather[0].main=="Clouds"){
            weatherIcon.src = "./images/cloudy.png"
        }

        else if (data.weather[0].main=="Clear"){
            weatherIcon.src = "./images/clear-sky.png"
        }

        else if (data.weather[0].main=="Rain"){
            weatherIcon.src = "./images/rain.png"
        }

        else if (data.weather[0].main=="Drizzle"){
            weatherIcon.src = "./images/drizzle.png"
        }

        else if (data.weather[0].main=="Mist"){
            weatherIcon.src = "./images/fog.png"
        }

        if (data.weather[0].main=="Snow"){
            weatherIcon.src = "./images/snow.png"
        }


    } catch (error) {
        console.error(error);
        document.querySelector('.city-name').innerHTML = "City Not Found";
        document.querySelector('.temp').innerHTML = "--°C";
        document.querySelector('.humidity').innerHTML = "--%";
        document.querySelector('.wind-speed').innerHTML = "--m/s";
    }
}


inputBtn.addEventListener("click", () => {
    let cityName = inputData.value;
    if (cityName) {
        checkWeather(cityName);
    } else {
        document.querySelector('.city-name').innerHTML = "City Not Found";
        document.querySelector('.temp').innerHTML = "--°C";
        document.querySelector('.humidity').innerHTML = "--%";
        document.querySelector('.wind-speed').innerHTML = "--m/s";
    }
});

inputData.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let cityName = inputData.value;
        if (cityName) {
            checkWeather(cityName);
        } else {
            document.querySelector('.city-name').innerHTML = "City Not Found";
            document.querySelector('.temp').innerHTML = "--°C";
            document.querySelector('.humidity').innerHTML = "--%";
            document.querySelector('.wind-speed').innerHTML = "--m/s";
        }
    }

    });
