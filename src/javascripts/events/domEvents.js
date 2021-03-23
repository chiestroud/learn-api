import displayJokeContainer from '../components/forms/jokeContainer';
import showJoke from '../components/forms/showJoke';
import getJoke from '../helpers/data/jokeData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('jokeGenerator')) {
      getJoke().then((jokeObject) => showJoke(jokeObject));
    }
    if (e.target.id.includes('getPunchLine')) {
      document.querySelector('.punchLine').style.display = 'block';
      document.querySelector('#hiddenGetNewJoke').style.display = 'block';
      document.querySelector('#getPunchLine').style.display = 'none';
    }
    if (e.target.id.includes('hiddenGetNewJoke')) {
      displayJokeContainer();
    }
  });
};

export default domEvents;
