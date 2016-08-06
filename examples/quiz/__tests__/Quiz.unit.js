import test from 'ava';
import Quiz from '../components/Quiz';
import { renderAcceptanceTest } from '../../../src/packages/inferno-server';

const mockState = {
  topic: 'myTopic',
  question: 'secondQuestion',
  skippedTopics: {
    otherTopic: true
  },
  topics: {
    myTopic: {
      label: 'My topic',
      questions: {
        firstQuestion: {},
        secondQuestion: {},
      }
    },
    otherTopic: {
      label: 'Other topic',
      questions: {
        a: {},
        b: {}
      }
    }
  }
};

test('Loading state', renderAcceptanceTest(Quiz, {
  styles: {},
  state: {},
}));

test('Normal state', renderAcceptanceTest(Quiz, {
  state: mockState,
  actions: {
  },
  styles: {
    TopicToggle: {
      active: 'active-toggle-button-class'
    }
  },
}));
