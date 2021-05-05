import { ChangeEventHandler, useMemo } from 'react';
import { TextField } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import type { PaletteColorOptions } from '@material-ui/core/styles/createPalette';
import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextFieldProps,
} from '@material-ui/core/TextField/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default ({
  color,
  id,
  label,
  ...otherProps
}:
  | TextFieldProps
  | StandardTextFieldProps
  | FilledTextFieldProps
  | OutlinedTextFieldProps
  | {
      color: PaletteColorOptions | any;
      id?: string;
      label: string;
      type: string;
      fullWidth?: boolean;
      onChange: ChangeEventHandler;
    }) => {
  const classes = useStyles();

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: color,
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <TextField className={classes.margin} label={label} id={id} {...otherProps} />
    </ThemeProvider>
  );
};
