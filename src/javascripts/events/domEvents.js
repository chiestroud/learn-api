import displayJokeContainer from '../components/forms/jokeContainer';
import showJoke from '../components/forms/showJoke';
import showLyrics from '../components/forms/showLyrics';
import getJoke from '../helpers/data/jokeData';
import getLyrics from '../helpers/data/lyricsData';

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
    if (e.target.id.includes('searchLyrics')) {
      e.preventDefault();
      const artist = document.querySelector('#artist').value;
      const songTitle = document.querySelector('#songTitle').value;
      document.querySelector('#searchLyrics').innerHTML = 'Loading...';
      getLyrics(artist, songTitle).then((songObject) => showLyrics(songObject));
    }
  });
};

export default domEvents;
