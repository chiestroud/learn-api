import displayJokeContainer from '../components/forms/jokeContainer';
import lyricsContainer from '../components/forms/lyricsContainer';

const navEvents = () => {
  document.querySelector('#jokes').addEventListener('click', () => {
    displayJokeContainer();
  });
  document.querySelector('#lyrics').addEventListener('click', () => {
    lyricsContainer();
  });
  document.querySelector('#weather').addEventListener('click', () => {
    console.warn('weather');
  });
};

export default navEvents;
