exports[`Correct option selected`] = `
<section
  className="card">
  <header
    className="Question-class">
    Some question?
  </header>
  <ul
    className="options">
    <Option
      checked="true"
      className="Good-option-class"
      disabled="true"
      label="True"
      name="answer"
      onChange="[Function onChange]"
      value="0" />
    <Option
      checked="false"
      className="Normal-option-class"
      disabled="true"
      label="False"
      name="answer"
      onChange="[Function onChange]"
      value="1" />
  </ul>
  <footer
    className="footer">
    <div
      style={
        Object {
          "fontSize": "1.1em",
          "marginBottom": "1rem"
        }
      }>
      <strong>
        Correct! 
      </strong>
    </div>
    <Button
      className="Next-question-button-class">
      Next question
    </Button>
  </footer>
</section>
`;

exports[`Incorrect option selected`] = `
<section
  className="card">
  <header
    className="Question-class">
    Some question?
  </header>
  <ul
    className="options">
    <Option
      checked="false"
      className="Good-option-class"
      disabled="true"
      label="True"
      name="answer"
      onChange="[Function onChange]"
      value="0" />
    <Option
      checked="true"
      className="Bad-option-class"
      disabled="true"
      label="False"
      name="answer"
      onChange="[Function onChange]"
      value="1" />
  </ul>
  <footer
    className="footer">
    <div
      style={
        Object {
          "fontSize": "1.1em",
          "marginBottom": "1rem"
        }
      }>
      <strong>
        Wrong! 
      </strong>
    </div>
    <Button
      className="Next-question-button-class">
      Next question
    </Button>
  </footer>
</section>
`;

exports[`No option selected`] = `
<section
  className="card">
  <header
    className="Question-class">
    Some question?
  </header>
  <ul
    className="options">
    <Option
      checked="false"
      className="Normal-option-class"
      disabled="false"
      label="True"
      name="answer"
      onChange="[Function onChange]"
      value="0" />
    <Option
      checked="false"
      className="Normal-option-class"
      disabled="false"
      label="False"
      name="answer"
      onChange="[Function onChange]"
      value="1" />
  </ul>
</section>
`;


