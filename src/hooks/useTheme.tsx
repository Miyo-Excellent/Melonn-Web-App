import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import { ThemesNamesEnum } from 'utils';
import { ThemeType } from 'types';

export default function useTheme({ themes: rootThemes }: { themes: ThemeType[] }) {
  const [themes, setThemes] = useState(rootThemes);
  const [theme, setTheme] = useState(rootThemes.length ? rootThemes[0] : { data: {} });

  const doChangeTheme = (themeName: ThemesNamesEnum) => {
    const _theme: ThemeType | undefined = themes.find(({ name = '' }) => new RegExp(name).test(themeName));

    if (!_theme || isEmpty(_theme)) return console.log(`The ${themeName} theme is not valid`);

    setTheme(_theme);

    return null;
  };

  useEffect(() => {
    setThemes(rootThemes);
  }, [rootThemes]);

  return { theme, doChangeTheme, doChangeThemes: setThemes };
}
