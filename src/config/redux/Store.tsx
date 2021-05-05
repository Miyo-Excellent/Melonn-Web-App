import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Reducer from './Reducer';

import { isDevelopment } from 'utils';

export default class Store {
  reducer = new Reducer();
  isDevelopment = isDevelopment();
  developmentMiddlewares = [thunk];
  productionMiddlewares = [];
  middlewares = this.isDevelopment ? this.developmentMiddlewares : this.productionMiddlewares;

  composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  get = () => createStore(this.reducer.all, this.composeEnhancers(applyMiddleware(...this.middlewares)));
}
