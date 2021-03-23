import axios from 'axios';

const getLyrics = (artist, songTitle) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
    .then((response) => {
      document.querySelector('#searchLyrics').innerHTML = 'SEARCH FOR LYRICS';
      resolve(response.data);
    }).catch((error) => reject(error));
});

export default getLyrics;
