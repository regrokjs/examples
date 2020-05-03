import React from 'react';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../selectors';
import { useStore } from '@regrokjs/core';
import { store } from '../store';

const VisibleTodoList = () => {
  const [{ todos }, actions] = useStore(store.todos);
  const [{ filter }] = useStore(store.visibilityFilter);
  const filteredTodos = getVisibleTodos(filter, todos);
  return <TodoList filteredTodos={filteredTodos} actions={actions} />;
};

export default VisibleTodoList;
