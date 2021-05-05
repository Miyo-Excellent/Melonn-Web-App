import { ReactChild } from 'react';

import ThemeType from './ThemeType';

type ThemeProviderPropTypes = {
  children: ReactChild | ReactChild[] | null;
  themes: ThemeType[];
};

export default ThemeProviderPropTypes;
