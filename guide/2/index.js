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
      // Create a react element using the
      // FancyGreeting's view; notice we are
      // not passing the full component to react;
      // just the view function plus the props we
      // want to pass
      <FancyGreeting.view name={'Bob'} />
    );
  }
};

// We start the app with the wrapper as our
// top level component instead of FancyGreeting
startApp(container, Wrapper);

document.body.appendChild(container);
