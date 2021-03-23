import joke from '../../../assets/jokeGenerator.jpg';

const displayJokeContainer = () => {
  document.querySelector('#main').innerHTML = `
  <div class="container" id="jokeContainer">
    <div class="title">
      <img src="${joke}" class="img-fluid" alt="Responsive image">
    </div>
    <div class="jokeDisplay"></div>
    <div class="punchLine"></div>
    <button type="button" class="btn btn-dark jokeButton" id="jokeGenerator">GET A JOKE</button>
  </div>`;
};

export default displayJokeContainer;
