import { startApp } from 'relm/react-dom';

// No practical change here; just a different filename
import * as FancyGreeting from './fancy-greeting';

const container = document.createElement('div');

// Here we create a wrapper component so
// that we can pass some props to our
// FancyGreeting component
const Wrapper = {
  view () {
    return (
      <FancyGreeting name={'Bob'} />
    );
  }
};

// We start the app with the wrapper as our
// top level component instead of FancyGreeting
startApp(container, Wrapper);

document.body.appendChild(container);
