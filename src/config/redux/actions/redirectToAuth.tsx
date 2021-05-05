import { Dispatch } from 'redux';
import { redirectToAuthTypes } from '../types';
import setError from './setError';

export default (path = '/auth') => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: redirectToAuthTypes.redirectToAuth(path) });
  } catch ({ message = '', code = '' }) {
    dispatch(
      setError({
        message,
        code,
      })
    );
  }
};
