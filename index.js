function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round (response.data.main.temp);
}

let apiKey = "fc23ccd0a04eee182512a62ffe2b81be";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kent&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);