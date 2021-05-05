type ProfileInitialStateType = {
  user: {
    _id: string | undefined;
    email: string | undefined;
    name: string | undefined;
    lastname: string | undefined;
    phoneNumber: string | undefined;
    role: { _id: string }[] | undefined;
  };
};

export default ProfileInitialStateType;
