const openPageBuilder = () => {
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#main').innerHTML = `
  <div class="container">
    <h1> Welcome to Chie&apos;s API Experiment App. Please click navbar to proceed with your favorite API.</h1>
  </div>`;
};

export default openPageBuilder;
