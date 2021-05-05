import { Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MouseEventHandler, useMemo } from 'react';
import { Dispatch } from 'redux';

import { Button } from 'components';
import Constants from '../../constants';

import { setUserData } from 'config';

export default ({}: any) => {
  const history = useHistory();

  const constants = useMemo(() => new Constants(), []);
  // const user: UserModelType = useSelector((state: any) => state.profile.user);

  const dispatch: Dispatch = useDispatch();

  const onSignOut: MouseEventHandler = async ({}): Promise<void> => {
    localStorage.removeItem(constants.app.localStorage.tokenKey);
    dispatch(setUserData({}));
    history.replace('/');
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3">Profile Screen</Typography>
        {/*<Typography variant="h4">{`${user.name} ${user.lastname}`}</Typography>*/}
        <br />
        <br />

        <Button onClick={onSignOut}>Sing Out</Button>
      </Grid>
    </Grid>
  );
};
