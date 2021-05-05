import styled from 'styled-components';
import { Container, Grid, Paper } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import { ChangeEventHandler, MouseEventHandler, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { Button, Input } from 'components';
import { setUserData } from 'config';
import { melonn as melonnService } from 'services';

import Constants from '../../../constants';

const Main = styled(Grid)`
  min-height: calc(100vh - 15px);
`;

const Form = styled(Grid)`
  padding: 0 0 10px 0;
`;

export default ({ history }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const constants = useMemo(() => new Constants(), []);

  const dispatch: Dispatch = useDispatch();

  const onSubmit: MouseEventHandler = async ({}): Promise<void> => {
    const { data }: any = await melonnService.signIn(email, password);

    if (!!data) {
      const { user, token } = data;
      localStorage.setItem(constants.app.localStorage.tokenKey, token);
      dispatch(setUserData(user));
      history.replace('/dashboard');
    }
  };

  const onChangeEmail: ChangeEventHandler = ({ target }) => {
    setEmail(target.value || '');
  };

  const onChangePassword: ChangeEventHandler = ({ target }) => {
    setPassword(target.value || '');
  };

  return (
    <Main container justify="center" alignItems="center">
      <Grid item xs={12} sm={8} lg={6} xl={4}>
        <Container component={Paper}>
          <Form container>
            <Grid item xs={12}>
              <Input color={lightBlue} label="Email" type="email" fullWidth onChange={onChangeEmail} />
            </Grid>

            <Grid item xs={12} style={{ margin: '0 0 20px 0' }}>
              <Input color={lightBlue} label="Password" type="password" fullWidth onChange={onChangePassword} />
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth onClick={async _event => onSubmit(_event)} style={{ color: 'white' }}>
                Sign In
              </Button>
            </Grid>
          </Form>
        </Container>
      </Grid>
    </Main>
  );
};
