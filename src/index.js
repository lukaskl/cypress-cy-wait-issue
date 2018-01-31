import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import cache from './cache'

console.log('RENDER');
cache.other = 'thing';

ReactDOM.render(<App />, document.getElementById('root'));

