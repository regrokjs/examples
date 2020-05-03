import { createSlice, createStore, Slice } from '@regrokjs/core';

class CounterSlice extends Slice {
  constructor(config) {
    super(config);
    this.state = { value: 0 };
  }
  increment() {
    this.setState((state) => {
      state.value++;
    });
  }
}

export const store = createStore({
  counter: createSlice(CounterSlice),
});
