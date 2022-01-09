import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';
import './index.scss';

const Status = ({ isOnline }) => (isOnline ? <Online /> : <Offline />);

export default Status;

//algo
// 1. створюємо компоненту Status, яка приймає з props змінну isOnline, і в залежності від значення булевого isOnline, відмальовує статус користувача
// 2. створюємо компоненту Online у файлі Online.jsx, яка відмальовує span з текстом - All good
// 3. створюємо компоненту Offline у файлі Offline.jsx, яка відмальовує span з текстом - Offline і кнопку Recconect
