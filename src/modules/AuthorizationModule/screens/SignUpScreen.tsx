import { Container, Grid, Paper } from '@material-ui/core';
import { Input } from 'components';
import { lightBlue } from '@material-ui/core/colors';

export default () => (
  <Container>
    <Grid container>
      <Grid item>
        <Paper elevation={2}>
          <Grid container>
            <Grid item xs={12}>
              <Input color={lightBlue} label="name" type="text" />
            </Grid>

            <Grid item xs={12}>
              <Input color={lightBlue} label="lastname" type="text" />
            </Grid>

            <Grid item xs={12}>
              <Input color={lightBlue} label="Phone Number" type="phone" />
            </Grid>

            <Grid item xs={12}>
              <Input color={lightBlue} label="Email" type="email" />
            </Grid>

            <Grid item xs={12}>
              <Input color={lightBlue} label="Password" type="password" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);
