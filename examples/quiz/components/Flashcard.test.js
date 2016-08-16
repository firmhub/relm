import test from 'ava';
import Flashcard from './Flashcard';
import { renderAcceptanceTest } from '../../../src/packages/inferno-server';

const mockStyles = {
  question: 'Question-class',
  normal: 'Normal-option-class',
  good: 'Good-option-class',
  bad: 'Bad-option-class',
  disabled: 'Disabled-option-class',
  Button: { primary: 'Next-question-button-class' }
};

test('No option selected', renderAcceptanceTest(Flashcard, {
  styles: mockStyles,
  state: {},
  props: {
    question: 'Some question?',
    options: [
      'True',
      'False'
    ],
  },
}));

test('Correct option selected', renderAcceptanceTest(Flashcard, {
  styles: mockStyles,
  state: {},
  props: {
    question: 'Some question?',
    selection: 'True',
    answer: 'True',
    options: [
      'True',
      'False'
    ],
  },
}));

test('Incorrect option selected', renderAcceptanceTest(Flashcard, {
  styles: mockStyles,
  state: {},
  props: {
    question: 'Some question?',
    selection: 'False',
    answer: 'True',
    options: [
      'True',
      'False'
    ],
  },
}));
