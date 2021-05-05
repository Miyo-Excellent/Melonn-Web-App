import type { Reducer } from 'redux';

import invoicesInitialState from './initialState';

const invoicesReducer: Reducer = (_state: any = invoicesInitialState, action) => {
  switch (action.type) {
    default:
      return _state;
  }
};

export * from './actions';

export { invoicesReducer, invoicesInitialState };
