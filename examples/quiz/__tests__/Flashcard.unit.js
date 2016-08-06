import test from 'ava';
import Flashcard from '../components/Flashcard';
import { renderAcceptanceTest } from '../../../src/packages/inferno-server';

test('No option selected', renderAcceptanceTest(Flashcard, {
  state: {},
  props: {
    question: 'Some question?',
    options: [
      'True',
      'False'
    ],
  },
  styles: {
    question: 'something'
  },
}));
