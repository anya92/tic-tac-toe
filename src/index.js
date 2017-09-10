import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import '../node_modules/normalize.css/normalize.css';

import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
