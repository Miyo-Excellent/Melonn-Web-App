import { Dispatch } from 'redux';
import { setStatusTypes } from '../types';

export default (loadingState = false) => (dispatch: Dispatch) =>
  dispatch({
    type: setStatusTypes.setLoadingState,
    payload: loadingState,
  });
