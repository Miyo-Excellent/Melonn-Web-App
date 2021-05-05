import type { Reducer } from 'redux';

import dashboardInitialState from './initialState';

const dashboardReducer: Reducer = (_state: any = dashboardInitialState, action) => {
  switch (action.type) {
    default:
      return _state;
  }
};

export * from './actions';

export { dashboardReducer, dashboardInitialState };
