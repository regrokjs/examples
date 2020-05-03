import Header from '../components/Header';
import React from 'react';
import { useStore } from '@regrokjs/core';
import { store } from '../store';

const ConnectedHeader = () => {
  const [, { addTodo }] = useStore(store.todos);
  return <Header addTodo={addTodo} />;
};

export default ConnectedHeader;
