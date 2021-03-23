const showLyrics = (songObject) => {
  document.querySelector('#main').innerHTML += `
    <article class="lyrics-container" id="results" aria-live="polite">
      <h2>${document.querySelector('#songTitle').value.toUpperCase()}</h2>
      <h3>BY: ${document.querySelector('#artist').value.toUpperCase()}</h3>
    ${songObject.lyrics}
    </article>
  `;
};

export default showLyrics;
