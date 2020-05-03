import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../constants/TodoFilters';

export const getVisibleTodos = (visibilityFilter, todos) => {
  switch (visibilityFilter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + visibilityFilter);
  }
};
