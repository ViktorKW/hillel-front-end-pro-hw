const html_weather = document.querySelector(".main-weather");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=ODESSA&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((response) => response.json())
  .then((weather_obj) => {
    html_weather.insertAdjacentHTML(
      "afterbegin",
      `<p>City: ${weather_obj.name}</p>
       <p>Temp: ${weather_obj.main.temp}°C</p>
       <p>Pressure: ${weather_obj.main.pressure} hPa</p>
       <p>Description: ${weather_obj.weather[0].description}</p>
       <p>Humidity: ${weather_obj.main.humidity}%</p>
       <p>Wind: ${weather_obj.wind.speed} km/h</p>
       <p>Wind direction: ${weather_obj.wind.deg}°</p>
       <img src = "http://openweathermap.org/img/w/${weather_obj.weather[0].icon}.png"><img>`
    );
  });
