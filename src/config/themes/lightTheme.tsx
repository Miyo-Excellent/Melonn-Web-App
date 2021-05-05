import { nanoid } from 'nanoid';
import { ThemesNamesEnum } from 'utils';
import type { ThemeType } from 'types';

const lightTheme: ThemeType = {
  id: nanoid(),
  name: ThemesNamesEnum.DARK,
  data: {
    text: '',
    textAccent: '',
    primary: '',
    secondary: '',
    tertiary: '',
  },
};

export default lightTheme;
