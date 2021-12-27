import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
// import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

// const element = (
// 	<div className="greeting">My name is John Doe. I'm 17 years old</div>
// );

ReactDOM.render( <App />, rootElement);