/* eslint-env mocha, browser */
/* globals expect, relm */
describe('inferno-dom can start an app', () => {
  it('renders a hello world into the dom', (done) => {
    const div = document.createElement('div');
    const initialHTML = '';

    const timer = setInterval(() => {
      if (div.innerHTML === initialHTML) return;
      expect(div.innerHTML).to.equal('<h1>Hello World!</h1>');
      clearInterval(timer);
      done();
    }, 200);

    function HelloWorld (h) {
      return h('h1', 'Hello World!');
    }

    relm.start(HelloWorld, { el: div });
  });
});
