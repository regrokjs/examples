import { createSlice, createStore } from '@regrokjs/core';
import { TodosSlice } from './slices/TodosSlice';
import { VisibilityFilterSlice } from './slices/VisibilityFilterSlice';

export const store = createStore({
  todos: createSlice(TodosSlice),
  visibilityFilter: createSlice(VisibilityFilterSlice),
});
