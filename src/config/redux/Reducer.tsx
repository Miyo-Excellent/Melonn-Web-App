import { combineReducers } from 'redux';
import { authorizationReducer } from 'modules/AuthorizationModule/redux';
import { dashboardReducer } from 'modules/DashboardModule/redux';
import { invoicesReducer } from 'modules/InvoicesModule/redux';
import { productsReducer } from 'modules/ProductsModule/redux';
import { profileReducer } from 'modules/ProfileModule/redux';
import { salesReducer } from 'modules/SalesModule/redux';
import { shipmentsReducer } from 'modules/ShipmentsModule/redux';

export default class Reducer {
  all = combineReducers({
    authorization: authorizationReducer,
    dashboard: dashboardReducer,
    invoices: invoicesReducer,
    products: productsReducer,
    profile: profileReducer,
    sales: salesReducer,
    shipments: shipmentsReducer,
  });
}
