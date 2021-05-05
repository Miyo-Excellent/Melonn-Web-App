import type { Reducer } from 'redux';

import salesInitialState from './initialState';

const salesReducer: Reducer = (_state: any = salesInitialState, action) => {
  switch (action.type) {
    default:
      return _state;
  }
};

export * from './actions';

export { salesReducer, salesInitialState };
