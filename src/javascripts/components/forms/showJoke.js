import joke from '../../../assets/jokeGenerator.jpg';

const showJoke = (jokeObject) => {
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#main').innerHTML = `
  <div class="container" id="jokeContainer">
    <div class="title">
      <img src="${joke}" class="img-fluid" alt="Responsive image">
    </div>
    <div class="jokeDisplay">${jokeObject.setup}</div>
    <div class="punchLine">${jokeObject.punchline}</div>
    <button type="button" class="btn btn-dark jokeButton" id="getPunchLine">GET PUNCHLINE</button>
    <button type="button" class="btn btn-dark jokeButton" id="hiddenGetNewJoke">GET A NEW JOKE</button>
  </div>`;
};

export default showJoke;
