import { Dispatch } from 'redux';
import { redirectToAuthTypes } from '../types';
import { setError } from './';

export default (access = false) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: redirectToAuthTypes.setAccess, payload: access });
  } catch ({ message = '', code = '' }) {
    dispatch(setError({ message, code }));
  }
};
