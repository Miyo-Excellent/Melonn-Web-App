import { Dispatch } from 'redux';
import { redirectToAuthTypes } from '../types';
import { setError, setUserData } from './';

export default () => async (dispatch: Dispatch) => {
  try {
    /** @TODO: SIGN OUT LOGIC */
    // await firebase.auth().signOut();

    dispatch({ type: redirectToAuthTypes.signOut });

    dispatch(
      setUserData({
        _id: '',
        email: '',
        lastname: '',
        name: '',
        phoneNumber: '',
        roles: [],
      })
    );
  } catch ({ message = '', code = '' }) {
    dispatch(
      setError({
        message,
        code,
      })
    );
  }
};
