const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="nav"></div>
  <div id="main"></div>`;
};

export default domBuilder;
