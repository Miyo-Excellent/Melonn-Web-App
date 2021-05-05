import { Dispatch } from 'redux';
import { setError } from './';

export default (
  userData: {
    name: string;
    email: string;
    password: string;
  },
  onFinish: (userData: Dispatch) => void
) => async (dispatch: any) => {
  try {
    /** @TODO: SIGN UP LOGIC */
    // const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    // if (!!name) await user.updateProfile({ displayName: name });
    // dispatch({ type: types.signUp });
    // dispatch(setUserData(user));
    // await onFinish(user);
  } catch ({ message = '', code = '' }) {
    dispatch(
      setError({
        message,
        code,
      })
    );
  }
};
