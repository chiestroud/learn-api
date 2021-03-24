import navBuilder from '../components/navBuilder';
import openPageBuilder from '../components/openPageBuilder';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import domBuilder from './views/domBuilder';

const startApp = () => {
  domBuilder();
  navBuilder();
  navEvents();
  domEvents();
  openPageBuilder();
};

export default startApp;
