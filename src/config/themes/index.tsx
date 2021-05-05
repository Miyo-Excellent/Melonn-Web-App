import lightTheme from './lightTheme';
import darkTheme from './darkTheme';
import GlobalStyleComponent from './GlobalStyleComponent';
import ThemeProvider from './Provider';

import { ThemeType } from 'types';

export default class Themes {
  all: ThemeType[] = [lightTheme, darkTheme];
}

export { lightTheme, darkTheme, GlobalStyleComponent, ThemeProvider, Themes };
