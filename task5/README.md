-> Weather Dashboard

-> Description

This is a simple weather dashboard web application built as part of Task 5 for the Synthra Labs Internship. It allows users to search for real-time weather data by entering a city name or ZIP code. The app fetches current weather information using the OpenWeatherMap API and displays temperature, humidity, wind speed, and weather conditions. It also includes a five-day weather forecast and saves the last searched location using local storage.



-> Features

- Search weather by city name or Indian ZIP code
- Display current temperature, humidity, wind speed, and weather icon
- Error handling for invalid input or network failures
- Five-day weather forecast for searched location
- Uses local storage to retain last searched location across reloads
- Responsive design using Bootstrap



-> Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- OpenWeatherMap API
- LocalStorage (Browser Web Storage)



-> Folder Structure

```
weather-dashboard/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   └── icons/ (optional)
└── README.md
```



-> Setup Instructions

1. Clone or download this repository to your local machine.
2. Obtain a free API key from [https://openweathermap.org/api](https://openweathermap.org/api).
3. Replace the placeholder `YOUR_API_KEY` in `app.js` with your actual API key.
4. Open `index.html` in a web browser to run the application.



-> Notes

- When entering a ZIP code, the application assumes the country code `in` (India). For example, ZIP `190001` is treated as `190001,in`.
- The five-day forecast is based on daily entries at 12:00 PM, as provided by OpenWeatherMap's 3-hour interval forecast API.
- Error messages are shown if the API cannot find the location or if there is a connection issue.



-> Credits

This project was completed as part of the Synthra Labs Internship (Task 5) by Mohammad Hisham Mir.


