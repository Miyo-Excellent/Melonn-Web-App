import type { Reducer } from 'redux';

import shipmentsInitialState from './initialState';

const shipmentsReducer: Reducer = (_state: any = shipmentsInitialState, action) => {
  switch (action.type) {
    default:
      return _state;
  }
};

export * from './actions';

export { shipmentsReducer, shipmentsInitialState };
