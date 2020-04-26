import * as React from 'react';
import { useStore } from '@regrokjs/core';
import { store } from './store';

export const Counter = () => {
  console.log(store.counter);
  const [{ value }, { increment }] = useStore(store.counter);
  return (
    <div>
      <div>Counter: {value}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
