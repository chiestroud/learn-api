// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';
import startApp from './helpers/startApp';

const init = () => {
  startApp();

  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();
