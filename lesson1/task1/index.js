/* eslint-disable no-undef */
const getRootElem = document.querySelector('#root');

const greetingElem = React.createElement('div', { className: 'greeting' }, 'Hello, React!');
ReactDOM.render(greetingElem, getRootElem);
