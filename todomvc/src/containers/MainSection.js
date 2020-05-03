import React from 'react';
import MainSection from '../components/MainSection';
import { getCompletedTodoCount } from '../selectors';
import { useStore } from '@regrokjs/core';
import { store } from '../store';

const MainSectionContainer = () => {
  const [{ todos }, actions] = useStore(store.todos);
  const todosCount = todos.length;
  const completedCount = getCompletedTodoCount(todos);
  return (
    <MainSection
      actions={actions}
      todosCount={todosCount}
      completedCount={completedCount}
    />
  );
};

export default MainSectionContainer;
