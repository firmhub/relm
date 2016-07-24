import _ from 'lodash';
import * as UI from './ui';

function shuffleTopics (topics) {
  const randomTopic = _.sample(topics);
  const question = _.sample(randomTopic.questions);
  const options = _.shuffle(question.o);
  return { topics, question, options };
}

export default function Quiz (h, { actions, state, components: x }) {
  const question = state.question;
  if (!question) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <x.Navigation topics={state.topics} />
      <x.Flashcard
        style={{ margin: '2rem 0' }}
        question={question.q}
        reason={question.r}
        answer={_.first(question.o)}
        options={state.options}
        selection={state.selection}
        onChange={actions.checkAnswer}
        onNext={actions.nextQuestion}
      />
    </div>
  );
}

Quiz.components = {
  Navigation,
  Flashcard,
  Pane: UI.Pane,
};

Quiz.actions = {
  initializeState (state) {
    return state.set('question', null);
  },

  updateTopics (state, topics) {
    return state.merge(shuffleTopics(topics)).set('isChecked', false);
  },

  checkAnswer (state, value) {
    return state.set('selection', value);
  },

  nextQuestion (state) {
    return state.merge(shuffleTopics(state.topics)).set('selection', null);
  }
};


function Flashcard (h, { props, styles, components: x }) {
  const showAnswer = Boolean(props.selection);

  return (
    <section className={styles.card} style={props.style}>
      <header className={styles.question}>
        {props.question}
      </header>
      <ul className={styles.options}>
        {props.options.map(optionView)}
      </ul>
      {!showAnswer ? null : (
        <footer className={styles.footer}>
          <div style={{ marginBottom: '1rem', fontSize: '1.1em' }}>
            <strong>{props.selection === props.answer ? 'Correct! ' : 'Wrong! '}</strong>
            {props.reason}
          </div>
          <x.Button className={styles.Button.primary} onClick={props.onNext}>
            Next question
          </x.Button>
        </footer>
      )}
    </section>
  );

  function optionView (opt, i) {
    const isSelected = opt === props.selection;
    const isGood = showAnswer && opt === props.answer;
    const isBad = !isGood && isSelected;
    const variant = isGood ? 'good' : (isBad ? 'bad' : 'normal'); // eslint-disable-line no-nested-ternary

    return (
      <x.Option
        styles={{ container: styles[variant], disabled: styles.disabled }}
        name='answer'
        label={opt}
        disabled={showAnswer}
        checked={isSelected}
        value={i}
        onChange={() => props.onChange(opt)}
      />
    );
  }
}

Flashcard.components = {
  Option: UI.Radio,
  Button: UI.Button,
};

Flashcard.styles = (css, { components: { Option } }) => css`
  .card {
    position: relative;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2)
    , 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .card:before {
    pointer-events: none;
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2)
    , 0 8px 0 -3px #f6f6f6
    , 0 9px 1px -3px rgba(0, 0, 0, 0.2)
    , 0 16px 0 -6px #f6f6f6
    , 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }

  .question {
    font-size: 1.4em;
    line-height: 1.4;
    padding: 1.5rem;
    color: inherit;
    box-sizing: border-box;
    border-bottom: 1px solid #ededed;
    font-smoothing: antialiased;
  }

  .options {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .normal extends ${Option.container} {
    font-size: 1.2em;
  }

  .normal:not(.disabled):hover {
    background-color: #ededed;
    cursor: pointer;
  }
  .bad extends .normal {
    background-color: #FFCFCF;
    cursor: default;
  }

  .good extends .normal {
    background-color: #D4FCD2;
    cursor: default;
  }

  .disabled > input {
    visibility: hidden;
  }

  .normal > label {
    line-height: 2;
  }

  .footer {
    color: #777;
    padding: 10px 15px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
  }
`;


function Navigation (h, { props, styles, components: { Nav } }) {
  return (
    <Nav>
      <h5 className={styles.Nav.title}>Topics</h5>
      {_.map(props.topics, (it) => (
        <a className={[styles.Nav.item, styles.Nav.active]}>
          <span className='icon icon-home'></span>{it.label}
        </a>
      ))}
    </Nav>
  );
}

Navigation.components = {
  Nav: UI.Nav
};
