import { ThemeProvider as Provider } from 'styled-components';

import { useTheme } from 'hooks';

import { ThemeProviderPropTypes } from 'types';
import { withProps } from 'utils';

import { GlobalStyleComponent } from '.';

export default function ThemeProvider({ children, themes: appThemes }: ThemeProviderPropTypes) {
  const { theme, doChangeTheme, doChangeThemes } = useTheme({ themes: appThemes });

  const elementProps = {
    theme,
    doChangeTheme,
    doChangeThemes,
  };

  const elements = withProps(children, elementProps);

  return (
    <Provider theme={theme.data}>
      <>
        <GlobalStyleComponent />

        {elements}
      </>
    </Provider>
  );
}
