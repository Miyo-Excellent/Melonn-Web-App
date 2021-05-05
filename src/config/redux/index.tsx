import type { Store } from 'redux';

import ReduxProvider from './ReduxProvider';
import ReduxStore from './Store';

export default class Redux {
  reduxStore: ReduxStore = new ReduxStore();

  store: Store = this.reduxStore.get();
}
export * from './actions';

export { Redux, ReduxProvider, ReduxStore };
