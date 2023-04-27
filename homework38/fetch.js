const selectForm = document.forms.select;
const API_ENDPOINT = "https://api.openweathermap.org";
const API_WEATHER = `${API_ENDPOINT}/data/2.5/weather`;

getWeather();

function renderData(weatherData) {
    const cityVal = weatherData.name;
    const city = document.querySelector(".city-value");
    city.innerHTML = cityVal;

    const tempVal = Math.round(weatherData.main["temp"]);
    const temperature = document.querySelector(".temperature");
    temperature.innerHTML = `${tempVal}°`;

    const pressureVal = weatherData.main["pressure"];
    const pressure = document.querySelector(".pressure-value");
    pressure.innerHTML = pressureVal;

    const descriptionVal = weatherData.weather[0].description;
    const description = document.querySelector(".summaryText");
    description.innerHTML = descriptionVal;

    const humidityVal = weatherData.main.humidity;
    const humidity = document.querySelector(".humidity-val");
    humidity.innerHTML = humidityVal;

    const speedVal = weatherData.wind.speed;
    const speed = document.querySelector(".wind-speed");
    speed.innerHTML = speedVal;
    
    const degVal = weatherData.wind.deg;
    const deg = document.querySelector(".wind-deg");
    deg.innerHTML = degVal;

    const iconId = weatherData.weather[0].icon;
    const icon = document.querySelector(".img-src");
    icon.setAttribute("src",`${API_ENDPOINT}/img/w/${iconId}.png`)
};

async function getWeather() {
    try {
        const select = document.getElementById("city");
        const valOfselected = select.options[select.selectedIndex].value;
        const weatherPromise = await fetch(`${API_WEATHER}?q=${valOfselected}&units=metric&APPID=5d066958a60d315387d9492393935c19`);

        if (!weatherPromise.ok) {
            const message = "Error " + weatherPromise.status;
            throw new Error(message);
        }
   
        const weatherData = await weatherPromise.json();
        renderData(weatherData);

    } catch (e) {
        alert(e);
    }
}


selectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeather();
});