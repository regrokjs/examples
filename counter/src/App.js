import React from 'react';
import { RegrokProvider } from '@regrokjs/core';
import { store } from './store';
import { Counter } from './Counter';

console.log(RegrokProvider);

function App() {
  return (
    <RegrokProvider store={store}>
      <Counter />
    </RegrokProvider>
  );
}

export default App;
