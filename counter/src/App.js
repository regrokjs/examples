import React from 'react';
import { RegrokProvider } from '@regrokjs/core';
import { store } from './store';
import { Counter } from './Counter';

function App() {
  return (
    <RegrokProvider store={store}>
      <Counter />
    </RegrokProvider>
  );
}

export default App;
