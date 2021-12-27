import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(
<Greeting	firstName = {'John'} secondName = {'Doe'} birthDate = {new Date('2004-01-01T11:11:11.819Z')}/>,
rootElement);