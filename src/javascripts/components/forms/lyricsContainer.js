const lyricsContainer = () => {
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#main').innerHTML = `
    <form class="container" id="lyricsContainer">
      <div class="form-group">
        <h1>Song Lyric Search Form</h1>
        <label for="artist">Artist:</label>
        <input type="text" class="form-control" id="artist" aria-describedby="artist" placeholder="Queen" required>
      </div>
      <div class="form-group">
        <label for="songTitle">Song title:</label>
        <input type="text" class="form-control" id="songTitle" placeholder="Under Pressure" required>
      </div>
      <button type="submit" class="btn btn-success btn-lg" id="searchLyrics">SEARCH FOR LYRICS</button>
    </form>`;
};

export default lyricsContainer;
