import { types as profileTypes } from 'modules/ProfileModule/redux';
import { UserModelType } from 'types';

export default (userData: UserModelType | any) => ({
  type: profileTypes.setUserData,
  payload: userData,
});
