import React from 'react';
import { useStore } from '@regrokjs/core';
import Link from '../components/Link';
import { store } from '../store';

const FilterLink = (props) => {
  const [{ filter }, { setVisibilityFilter }] = useStore(
    store.visibilityFilter
  );
  const active = props.filter === filter;
  return (
    <Link active={active} setFilter={() => setVisibilityFilter(props.filter)}>
      {props.children}
    </Link>
  );
};

export default FilterLink;
