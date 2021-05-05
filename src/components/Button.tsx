import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { lightBlue } from '@material-ui/core/colors';

export default withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(lightBlue[500]),
    backgroundColor: lightBlue[500],
    '&:hover': {
      backgroundColor: lightBlue[700],
    },
  },
}))(Button);
