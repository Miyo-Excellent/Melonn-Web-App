import type { Reducer } from 'redux';

import profileInitialState from './initialState';
import types from './types';

const profileReducer: Reducer = (_state: any = profileInitialState, action) => {
  switch (action.type) {
    case types.setUserData:
      return {
        ..._state,
        user: action.payload,
      };
    default:
      return _state;
  }
};

export * from './actions';

export { profileReducer, profileInitialState, types };
