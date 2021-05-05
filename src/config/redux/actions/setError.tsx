import { setStatusTypes } from '../types';

export default (error: any) => ({
  type: setStatusTypes.setError,
  payload: error,
});
