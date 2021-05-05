import { useMemo } from 'react';
import { Navigator, ReduxProvider, Router, routes, ThemeProvider, Themes } from 'config';

export default function App() {
  const themes: Themes = useMemo(() => new Themes(), []);
  return (
    <ReduxProvider>
      <ThemeProvider themes={themes.all}>
        <Router>
          <Navigator routes={routes} />
        </Router>
      </ThemeProvider>
    </ReduxProvider>
  );
}
