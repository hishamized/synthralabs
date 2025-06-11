// app.js

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");
const forecastSection = document.getElementById("forecast");
const forecastCards = document.getElementById("forecastCards");

function fetchCurrentWeather(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City or ZIP code not found.");
        } else {
          throw new Error("Failed to fetch weather data. Please try again.");
        }
      }
      return response.json();
    })
    .then((data) => {
      displayWeather(data);
      localStorage.setItem("lastLocation", location);
      fetchForecast(location);
    })
    .catch((err) => {
      showError(err.message);
    });
}

function displayWeather(data) {
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  weatherResult.classList.remove("d-none");
  weatherResult.innerHTML = `
    <h3>${data.name}, ${data.sys.country}</h3>
    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
   <img class="img-fluid" src="${icon}" alt="Weather Icon" style="max-width: 80px;">
  `;
}

searchBtn.addEventListener("click", () => {
  weatherResult.classList.add("d-none");
  weatherResult.innerHTML = "";
  forecastSection.classList.add("d-none");
  forecastCards.innerHTML = "";

  const location = searchInput.value.trim();
  if (location !== "") {
    fetchCurrentWeather(location);
  }
});

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

window.addEventListener("load", () => {
  const lastLocation = localStorage.getItem("lastLocation");
  if (lastLocation) {
    fetchCurrentWeather(lastLocation);
  }
});

function fetchForecast(location) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayForecast(data);
    })
    .catch(() => {
      forecastSection.classList.add("d-none");
    });
}

function displayForecast(data) {
  forecastCards.innerHTML = "";
  const dailyData = {};

  data.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!dailyData[date] && item.dt_txt.includes("12:00:00")) {
      dailyData[date] = item;
    }
  });

  Object.keys(dailyData)
    .slice(0, 5)
    .forEach((date) => {
      const item = dailyData[date];
      const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

      const card = `
      <div class="col-md-2 col-sm-4 mb-3">
        <div class="card text-center">
          <div class="card-body">
            <h6>${new Date(date).toDateString()}</h6>
            <img src="${icon}" alt="icon">
            <p>${item.main.temp}°C</p>
            <p>${item.weather[0].main}</p>
          </div>
        </div>
      </div>
    `;

      forecastCards.innerHTML += card;
    });

  forecastSection.classList.remove("d-none");
}

function showError(message) {
  weatherResult.classList.remove("d-none");
  weatherResult.innerHTML = `
    <div class="alert alert-danger" role="alert">
      ⚠️ ${message}
    </div>
  `;
  forecastSection.classList.add("d-none");
}
