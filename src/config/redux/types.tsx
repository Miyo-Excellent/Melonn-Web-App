export const redirectToAuthTypes = {
  redirectToAuth: (path = '') => `[Auth] Redirect To Auth Page (${path})`,
  validUser: '[Auth] Valid User',
  setAccess: '[Auth] Set Access',
  loadInitialData: '[Auth] Load Initial Data',
  googleSignIn: '[Auth] Google Sign In',
  signIn: '[Auth] Sign In',
  signUp: '[Auth] Sign Up',
  signOut: '[Auth] Sign Out',
};

export const setStatusTypes = {
  setLoadingState: '[UI] Set Loading State',
  setError: '[UI] Set Error',
  removeError: '[UI] Remove Error',
};
