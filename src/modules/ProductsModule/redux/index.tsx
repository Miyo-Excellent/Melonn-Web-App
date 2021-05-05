import type { Reducer } from 'redux';

import productsInitialState from './initialState';

const productsReducer: Reducer = (_state: any = productsInitialState, action) => {
  switch (action.type) {
    default:
      return _state;
  }
};

export * from './actions';

export { productsReducer, productsInitialState };
