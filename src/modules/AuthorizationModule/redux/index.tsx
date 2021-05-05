import type { Reducer } from 'redux';

import authorizationInitialState from './initialState';

const authorizationReducer: Reducer = (_state: any = authorizationInitialState, action) => {
  switch (action.type) {
    default:
      return _state;
  }
};

export * from './actions';

export { authorizationReducer, authorizationInitialState };
