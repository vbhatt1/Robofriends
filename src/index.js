import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello greeting={'Welcome to React'} />, document.getElementById('root'));
registerServiceWorker();
