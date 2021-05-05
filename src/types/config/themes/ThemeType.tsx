import ThemesNamesEnum from 'utils/enums/ThemesNamesEnum';

type ThemeType = {
  id: string;
  name: ThemesNamesEnum;
  data: {
    text: string;
    textAccent: string;
    primary: string;
    secondary: string;
    tertiary: string;
  };
};

export default ThemeType;
