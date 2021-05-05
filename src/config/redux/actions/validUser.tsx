import { isEmpty } from 'lodash';
import { UserModelType } from 'types';
import setLoadingState from './setLoadingState';
import { setAccess, setError, setUserData } from './';
import { redirectToAuthTypes } from '../types';
import signOut from './signOut';
import { Dispatch } from 'redux';

export default (user: UserModelType) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoadingState(true));

    dispatch(setAccess(!isEmpty(user)));

    dispatch({ type: redirectToAuthTypes.validUser });

    if (!isEmpty(user)) {
      dispatch(setUserData(user, dispatch));
    } else {
      dispatch(signOut());
    }

    dispatch(setLoadingState(false));
  } catch ({ message = '', code = '' }) {
    dispatch(
      setError({
        message,
        code,
      })
    );
  }
};
