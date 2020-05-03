import { Slice } from '@regrokjs/core';
import { SHOW_ALL } from '../constants/TodoFilters';

export class VisibilityFilterSlice extends Slice {
  state = {
    filter: SHOW_ALL,
  };
  setVisibilityFilter(value) {
    this.setState((state) => {
      state.filter = value;
    });
  }
}
