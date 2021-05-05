import { Redirect } from 'react-router-dom';

import { DashboardScreen, SignInScreen, SignUpScreen } from 'modules';

const allRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => <Redirect to="/auth" />,
    exact: true,
    strict: true,
    // sensitive: false,
  },
  {
    path: '/auth',
    name: 'Verification',
    component: () => <Redirect to="/auth/sign-in" />,
    exact: true,
    strict: true,
    // sensitive: false,
  },
  {
    path: '/auth/sign-in',
    name: 'Sign In',
    component: SignInScreen,
    // exact: false,
    strict: true,
    // sensitive: false,
  },
  {
    path: '/auth/sign-up',
    name: 'Sign Up',
    component: SignUpScreen,
    // exact: false,
    strict: true,
    // sensitive: false,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardScreen,
    exact: true,
    strict: true,
    // sensitive: false,
  },
];

export default allRoutes;
