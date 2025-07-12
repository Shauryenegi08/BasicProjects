const apiKey = "73dc81226ef507b90ad2a4ea6b44aa0e";

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const weatherResult = document.getElementById("weatherResult");

    if (!city) {
        weatherResult.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        weatherResult.innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        weatherResult.innerHTML = `<p>${error.message}</p>`;
    }
}
