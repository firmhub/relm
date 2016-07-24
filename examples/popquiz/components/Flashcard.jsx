/* eslint-disable no-use-before-define */
import * as UI from './ui';

export default function Flashcard (h, { props, styles, components: x }) {
  return (
    <section className={styles.card}>
      <header className={styles.question}>
        {props.question}
      </header>
      <ul className={styles.options}>
        {props.options.map((opt, i) => (
          <x.Option
            className={styles.option}
            checked={opt.isCorrect}
            name='answer'
            label={opt.label}
            value={i}
          />
        ))}
      </ul>
      <footer className={styles.footer}>
        {props.options[0].reason}
      </footer>
    </section>
  );
}

Flashcard.components = {
  Option: UI.Radio
};

Flashcard.styless = css => css`
  .card {
    position: relative;
    margin: 4rem 2rem;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2)
    , 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .card:before {
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

  .option {
    font-size: 1.2em;
  }

  .option > label {
    line-height: 2;
  }

  .correct {
    background: green;
  }

  .incorrect {
    background: red;
  }

  .footer {
    color: #777;
    padding: 10px 15px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
  }
`;
