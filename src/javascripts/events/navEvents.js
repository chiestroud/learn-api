import displayJokeContainer from '../components/forms/jokeContainer';
import lyricsContainer from '../components/forms/lyricsContainer';
import weatherContainer from '../components/forms/weatherContainer';

const navEvents = () => {
  document.querySelector('#jokes').addEventListener('click', () => {
    displayJokeContainer();
  });
  document.querySelector('#lyrics').addEventListener('click', () => {
    lyricsContainer();
  });
  document.querySelector('#weather').addEventListener('click', () => {
    weatherContainer();
  });
};

export default navEvents;
