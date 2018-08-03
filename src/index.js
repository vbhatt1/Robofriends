import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import {robots} from './robots';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CardList robotObject={robots} />, document.getElementById('root'));
registerServiceWorker();
