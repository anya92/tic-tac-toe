import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

render(<h1>Tic Tac Toe</h1>, document.getElementById('root'));
registerServiceWorker();
