import navBuilder from '../components/navBuilder';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import domBuilder from './views/domBuilder';

const startApp = () => {
  domBuilder();
  navBuilder();
  navEvents();
  domEvents();
};

export default startApp;
