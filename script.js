const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY = "51d9e46afb1170a3585e56ddfc9d14a7"; // API Key for OpenWeatherMap API 

const getWeatherDetails = (cityName) => {
  const cityName = cityInput.value.trim();
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?&appid=${API_KEY}`;

  fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
   
    const uniqueForecastDays = [];
    const fiveDaysForecast = data.list.filter(forecast => {
        const forecastDate = new Date(forecast.dt_txt).getDate();
        if(!uniqueForecastDays.includes(forecastDate)) {
          return uniqueForecastDays.push(forecastDate);
        }
    });

    console.log(fiveDaysForecast)
  }).catch(() => {
    alert("An Error occured while fetching the weather forecast!");
  });
}

searchButton.addEventListener("click", getWeatherDetails);
