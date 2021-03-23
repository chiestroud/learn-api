import displayJokeContainer from '../components/forms/jokeContainer';

const navEvents = () => {
  document.querySelector('#jokes').addEventListener('click', () => {
    displayJokeContainer();
  });
};

export default navEvents;
