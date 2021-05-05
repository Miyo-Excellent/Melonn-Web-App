import { Dispatch } from 'redux';
import { setStatusTypes } from '../types';

export default () => async (dispatch: Dispatch) => dispatch({ type: setStatusTypes.removeError });
