import { nanoid } from 'nanoid';
import { Route, Switch } from 'react-router-dom';

export default ({ routes }: { routes: any[] }) => (
  <Switch>
    {(routes || []).map((route = {}) => (
      <Route key={nanoid()} {...route} />
    ))}
  </Switch>
);
