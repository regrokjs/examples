import { createSlice, createStore } from '@regrokjs/core';

const counter = createSlice({
  initialState: {
    value: 0,
  },
  increment() {
    this.state.value++;
  },
});

export const store = createStore({
  counter,
});
