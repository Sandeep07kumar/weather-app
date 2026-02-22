const apiKey = "0d35b8a854b1e6b7b38b652ec96804a7";

// 1️⃣ Get User Current Location Weather
navigator.geolocation.getCurrentPosition(position => {
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    fetch(https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric)
    .then(response => response.json())
    .then(data => {
        document.getElementById("localTemp").innerText =
            Temperature: ${data.main.temp} °C;
    })
    .catch(error => {
        document.getElementById("localTemp").innerText =
            "Unable to fetch location weather.";
    });

});

// 2️⃣ Get Weather by City Name
function getCityWeather() {

    const city = document.getElementById("cityInput").value;

    fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
    .then(response => {

        if (!response.ok) {
            throw new Error("City not found");
        }

        return response.json();
    })
    .then(data => {
        document.getElementById("cityTemp").innerText =
            Temperature in ${city}: ${data.main.temp} °C;
    })
    .catch(error => {
        document.getElementById("cityTemp").innerText =
            "❌ Your input city is not existing in world";
    });

}
