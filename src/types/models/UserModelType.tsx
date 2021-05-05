type UserModelType = {
  _id: string;
  name: string;
  phoneNumber: string;
  lastname: string;
  email: string;
  roles: { _id: string }[];
};

export default UserModelType;
