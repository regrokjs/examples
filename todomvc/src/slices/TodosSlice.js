import { Slice } from '@regrokjs/core';

const initialState = {
  todos: [
    {
      text: 'Use Regrok',
      completed: false,
      id: 0,
    },
  ],
};

export class TodosSlice extends Slice {
  state = initialState;
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
  getCompletedTodoCount() {
    return this.state.todos.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    );
  }
}
