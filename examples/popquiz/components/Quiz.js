import _ from 'lodash';
import * as UI from './ui';
import Flashcard from './Flashcard';

function shuffleTopics (topics, skippedTopics = {}) {
  const randomTopic = _.sample(_.omitBy(topics, (it, id) => skippedTopics[id]));
  const question = _.sample(randomTopic.questions);
  const options = _.shuffle(question.o);
  return { topics, question, options };
}

export default function Quiz (h, { actions, state, components: x }) {
  const question = state.question;
  if (!question) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <x.Navigation
        topics={state.topics}
        skippedTopics={state.skippedTopics}
        onToggle={actions.toggleTopic}
      />
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
    return state.merge({ question: null, skippedTopics: {} });
  },

  toggleTopic (state, topicId) {
    // When a topic is being hidden, first check that it is not the last visibe one
    if (!state.skippedTopics[topicId]) {
      const remaining = _.omitBy(state.topics, (it, id) => state.skippedTopics[id]);
      if (_.size(remaining) < 2) return state;
    }

    // Toggle the topic then shuffle the remaining ones
    const update = state.set(['skippedTopics', topicId], !state.skippedTopics[topicId]);
    return update.merge(shuffleTopics(update.topics, update.skippedTopics));
  },

  updateTopics (state, topics) {
    const shuffled = shuffleTopics(topics, state.skippedTopics);
    return state.merge(shuffled).set('selection', null);
  },

  checkAnswer (state, value) {
    return state.set('selection', value);
  },

  nextQuestion (state) {
    const shuffled = shuffleTopics(state.topics, state.skippedTopics);
    return state.merge(shuffled).set('selection', null);
  }
};

function Navigation (h, { props, styles }) {
  return (
    <nav style={{ lineHeight: 2.5, textAlign: 'center' }}>
      {_.map(props.topics, topicView)}
    </nav>
  );

  function topicView (topic, id) {
    const classes = {
      [styles.tag]: true,
      [styles.active]: !props.skippedTopics[id]
    };

    return (
      <a className={classes} onClick={() => props.onToggle(id)}>
        <span className={styles.count}>{_.size(topic.questions)}</span>
        <span className={styles.label}>{topic.label}</span>
      </a>
    );
  }
}

Navigation.styles = (css) => css`
  .tag {
    background-color: #eeeeee;
    border-radius: 16px;
    padding: 4px 1em 4px 0;
    transition: background-color 0.4s;
    white-space: nowrap;
    display: inline-block;
    line-height: 1;
    margin-right: 1rem;
  }

  .tag.active {
    background-color: #90caf9;
  }

  .label {
    margin-left: 0.5em;
  }

  .count {
    background-color: #ffe0b2;
    border-radius: 16px;
    padding: 3px 8px;
  }
`;
