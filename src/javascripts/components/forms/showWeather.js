const showWeather = (weatherObject) => {
  document.querySelector('.actualWeatherContainer').innerHTML += `
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="http://openweathermap.org/img/w/${weatherObject.weather[0].icon}.png" alt="Card image cap">
    <div class="card-body text-dark">
    <h5 class="card-title text-dark">${weatherObject.name}</h5>
    <p class="card-text text-dark">${Math.floor((((weatherObject.main.temp) - 273.15) * 9) / 5 + 32)} Degrees | ${weatherObject.weather[0].main}</p>
  </div>
</div>`;
};

export default showWeather;
