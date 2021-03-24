const weatherContainer = () => {
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#main').innerHTML = `
  <div class="actualWeatherContainer d-flex justify-content-center mb-5"></div>
    <form class="container" id="weatherContainer">
      <div class="form-group">
        <h1>Watch The Weather</h1>
        <label for="artist"></label>
        <input type="text" class="form-control" id="location" aria-describedby="location" placeholder="Zip Code, City, etc" required>
      </div>
      <button type="submit" class="btn btn-success btn-lg" id="searchWeather">Submit</button>
    </form>`;
};

export default weatherContainer;
