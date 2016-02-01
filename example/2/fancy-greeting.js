export function view (props) {
  // Here we are defining the new fancy
  // style we want our title to have
  const fancy = {
    fontFamily: 'Impact',
    fontSize: '4rem',
    textAlign: 'center',
    textShadow: '5px 5px 0px #ddd',

    // If a color is provided by the parent
    // then we use that color, otherwise, the
    // the greeting will be in red
    color: props.color || 'red',
  };

  // Apply the style to the h1 heading and
  // also set the text for the heading based
  // the name provided in props (or defaulting
  // to "Howdy stranger!")
  return (
    <h1 style={fancy}>
      Howdy {props.name || 'stranger'}!
    </h1>
  );
}
