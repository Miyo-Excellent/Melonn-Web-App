import { useEffect, useState } from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { redirectToAuth, setAccess } from './redux/actions';
import { getLocalToken } from 'utils';
import { UserModelType } from 'types';

export default () => {
  const location = useLocation();

  const user: UserModelType = useSelector((state: any) => state.profile.user);

  const [checking, setChecking] = useState(false);

  const dispatch = useDispatch();

  const inAuthRoutes: boolean = /^\/auth\//.test(location.pathname);

  // const handleCloseBackdrop = () => setChecking(false);

  useEffect(() => {
    getLocalToken().then((token: string) => {
      dispatch(setAccess(!!token));
      setChecking(true);
    });
  }, []);

  if (!checking)
    return (
      <Backdrop open={!checking} style={{ zIndex: 9999 }}>
        <CircularProgress style={{ color: 'white' }} />
      </Backdrop>
    );

  if (!inAuthRoutes && !!checking && !user) {
    const path = '/auth/sign-in';

    dispatch(redirectToAuth(path));

    return <Redirect to={path} />;
  }

  return null;
};
