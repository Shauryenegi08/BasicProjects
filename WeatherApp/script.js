const apiKey = "13f453418f77ac179a7ab307c3807885"; 

async function getWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();
    const city = encodeURIComponent(cityInput);
    const weatherResult = document.getElementById("weatherResult");

    if (!cityInput) {
        weatherResult.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            weatherResult.innerHTML = `<p>City not found.</p>`;
        } else {
            weatherResult.innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        }
    } catch (error) {
        weatherResult.innerHTML = `<p>Error fetching weather data.</p>`;
        console.error(error);
    }
}
