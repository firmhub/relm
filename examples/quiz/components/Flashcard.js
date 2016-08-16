import { Button, Radio } from '../../../src/ui';

export default function Flashcard (h, { props, styles }) {
  return h('section.card', { style: props.style }, [
    h('header.question', props.question),
    h('ul.options', props.options.map(option)),
    footer()
  ]);

  function footer () {
    if (!props.selection) return null;

    return h('footer.footer', [
      h('div', { style: { marginBottom: '1rem', fontSize: '1.1em' } }, [
        h('strong', props.selection === props.answer ? 'Correct! ' : 'Wrong! '),
        props.reason
      ]),
      h('Button', { className: styles.Button.primary, onClick: props.onNext }, 'Next question')
    ]);
  }

  function option (opt, i) {
    const showAnswer = Boolean(props.selection);
    const isSelected = opt === props.selection;
    const isGood = showAnswer && opt === props.answer;
    const isBad = !isGood && isSelected;
    const variant = isGood ? 'good' : (isBad ? 'bad' : 'normal'); // eslint-disable-line no-nested-ternary

    return h('Option', {
      className: styles[variant],
      name: 'answer',
      value: i,
      label: opt,
      disabled: showAnswer,
      checked: isSelected,
      onChange: () => props.onChange(opt)
    });
  }
}

Flashcard.components = {
  Button,
  Option: Radio,
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

  .normal[disabled] > input {
    visibility: hidden;
  }

  .bad extends .normal {
    background-color: #FFCFCF;
    cursor: default;
  }

  .good extends .normal {
    background-color: #D4FCD2;
    cursor: default;
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
