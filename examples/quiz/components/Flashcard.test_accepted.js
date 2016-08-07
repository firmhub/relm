exports[`Correct option selected`] = `
<section>
  <header
    className="Question-class ">
    Some question?
  </header>
  <ul>
    <Option
      checked="true"
      disabled="true"
      label="True"
      name="answer"
      onChange="[Function onChange]"
      styles={
        Object {
          "container": "Good-option-class",
          "disabled": "Disabled-option-class"
        }
      }
      value="0" />
    <Option
      checked="false"
      disabled="true"
      label="False"
      name="answer"
      onChange="[Function onChange]"
      styles={
        Object {
          "container": "Normal-option-class",
          "disabled": "Disabled-option-class"
        }
      }
      value="1" />
  </ul>
  <footer>
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
<section>
  <header
    className="Question-class ">
    Some question?
  </header>
  <ul>
    <Option
      checked="false"
      disabled="true"
      label="True"
      name="answer"
      onChange="[Function onChange]"
      styles={
        Object {
          "container": "Good-option-class",
          "disabled": "Disabled-option-class"
        }
      }
      value="0" />
    <Option
      checked="true"
      disabled="true"
      label="False"
      name="answer"
      onChange="[Function onChange]"
      styles={
        Object {
          "container": "Bad-option-class",
          "disabled": "Disabled-option-class"
        }
      }
      value="1" />
  </ul>
  <footer>
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
<section>
  <header
    className="Question-class ">
    Some question?
  </header>
  <ul>
    <Option
      checked="false"
      disabled="false"
      label="True"
      name="answer"
      onChange="[Function onChange]"
      styles={
        Object {
          "container": "Normal-option-class",
          "disabled": "Disabled-option-class"
        }
      }
      value="0" />
    <Option
      checked="false"
      disabled="false"
      label="False"
      name="answer"
      onChange="[Function onChange]"
      styles={
        Object {
          "container": "Normal-option-class",
          "disabled": "Disabled-option-class"
        }
      }
      value="1" />
  </ul>
  
</section>
`;


