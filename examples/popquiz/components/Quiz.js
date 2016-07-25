import _ from 'lodash';
import * as UI from './ui';
import Flashcard from './Flashcard';

// Takes a set of topics and finds a random question
// to display (omitting any skipped topics)
//
// topics: dict(ID, Topic) -> skippedTopics: dict(ID, Bool) -> state: Obj
function shuffleTopics (topics, skippedTopics = {}) {
  // Get a random topic and question
  const topic = _.chain(topics).keys().reject(id => skippedTopics[id]).sample().value();  // Str
  const questions = _.get(topics, [topic, 'questions']);      // dict(Num, Obj)
  const shuffled = _.shuffle(questions);
  const weakest = _.find(shuffled, q => (q.confidence || 0) < 150) || _.first(shuffled);

  // Shuffle the question's options
  const question = _.findKey(questions, x => x === weakest);  // Str
  const options = _.shuffle(questions[question].o);

  // Set the resulting properties on state
  return { topics, topic, question, options, selection: null };
}

function getQuestion (state) {
  return _.get(state, ['topics', state.topic, 'questions', state.question]);
}

function incrementStats (obj, attempt) {
  if (attempt.correct) obj.correct = (obj.correct || 0) + 1;
  obj.total = (obj.total || 0) + 1;
  return obj;
}

export default function Quiz (h, { actions, state, components: x }) {
  const question = getQuestion(state);
  if (!question) return null;

  const topicStats = _.reduce(state.attempts, (agg, attempt) => {
    agg[attempt.topic] = incrementStats(agg[attempt.topic] || {}, attempt);
    return agg;
  });

  return (
    <div style={{ padding: '2rem' }}>
      <x.Navigation
        topics={state.topics}
        stats={topicStats}
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
        onChange={actions.updateSelection}
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
    return state.merge({ question: null, skippedTopics: {}, attempts: [] });
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
    return state.merge(shuffled);
  },

  updateSelection (state, value) {
    // A selection was made, so update the question's confidence based on answer
    const question = getQuestion(state);
    const answerIsCorrect = value === _.first(question.o);
    const change = (question.confidence || 0) + (answerIsCorrect ? 100 : -50);
    const confidence = _.max([-100, _.min([change, 200])]);
    const path = ['topics', state.topic, 'questions', state.question, 'confidence'];

    // Save the selection and the confidence
    return state.set('selection', value).set(path, confidence);
  },

  nextQuestion (state) {
    const shuffled = shuffleTopics(state.topics, state.skippedTopics);
    return state.merge(shuffled);
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

    // console.log(_.map(topic.questions, q => q.confidence || 0));

    const confidence = _.chain(topic.questions)
      .map(q => q.confidence || 0)
      .mean()
      .floor()
      .value();

    return (
      <a className={classes} onClick={() => props.onToggle(id)}>
        <span className={styles.count}>{confidence}</span>
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
