import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux';

import Store from './store';

console.log(Store.getState());

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
