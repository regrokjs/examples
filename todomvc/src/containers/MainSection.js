import React from 'react';
import MainSection from '../components/MainSection';
import { useStore } from '@regrokjs/core';
import { store } from '../store';

const MainSectionContainer = () => {
  const [{ todos }, actions, { getCompletedTodoCount }] = useStore(store.todos);
  const todosCount = todos.length;
  return (
    <MainSection
      actions={actions}
      todosCount={todosCount}
      completedCount={getCompletedTodoCount()}
    />
  );
};

export default MainSectionContainer;
