import { createSlice, createStore, Slice } from '@regrokjs/core';
import { SHOW_ALL } from './constants/TodoFilters';

const initialState = {
  todos: [
    {
      text: 'Use Regrok',
      completed: false,
      id: 0,
    },
  ],
};

class TodosSlice extends Slice {
  constructor(config) {
    super(config);
    this.state = initialState;
  }
  addTodo(text) {
    const { todos } = this.state;
    const id = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
    this.setState((state) => {
      state.todos.push({
        id,
        text,
        completed: false,
      });
    });
  }
  deleteTodo({ id }) {
    this.setState((state) => {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    });
  }
  editTodo(todo) {
    const { todos } = this.state;
    const index = todos.findIndex((t) => t.id === todo.id);
    this.setState((state) => {
      state.todos[index] = todo;
    });
  }
  completeTodo(todoId) {
    const { todos } = this.state;
    const index = todos.findIndex((t) => t.id === todoId);
    this.setState((state) => {
      state.todos[index].completed = true;
    });
  }
  completeAllTodos() {
    this.setState((state) => {
      state.todos.forEach((todo) => {
        todo.completed = true;
      });
    });
  }
  clearCompleted() {
    this.setState((state) => {
      state.todos = state.todos.filter((todo) => todo.completed === false);
    });
  }
}

class VisibilityFilterSlice extends Slice {
  constructor(config) {
    super(config);
    this.state = {
      filter: SHOW_ALL,
    };
  }
  setVisibilityFilter(value) {
    this.setState((state) => {
      state.filter = value;
    });
  }
}

export const store = createStore({
  todos: createSlice(TodosSlice),
  visibilityFilter: createSlice(VisibilityFilterSlice),
});
