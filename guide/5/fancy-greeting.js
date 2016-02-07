import { component } from 'relm';

export default component('FancyGreeting', {
  view ({ name, styles }) {
    return (
      <h1 style={styles.heading}>
        Hello {name || 'stranger'}!
      </h1>
    );
  },

  styles: {
    heading: {
      fontFamily: 'Impact',
      fontSize: '4rem',
      textAlign: 'center',
      textShadow: '5px 5px 0px #ddd',
      color: 'red',
    }
  }
});
