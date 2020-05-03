import React from 'react';
import { render } from 'react-dom';
import { RegrokProvider } from '@regrokjs/core';
import App from './components/App';
import { store } from './store';
import 'todomvc-app-css/index.css';

render(
  <RegrokProvider store={store}>
    <App />
  </RegrokProvider>,
  document.getElementById('root')
);
