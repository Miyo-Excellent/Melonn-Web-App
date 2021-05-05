import type { ReactChild } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function TabPanel({
  children,
  value,
  index,
  ...other
}: {
  children: ReactChild;
  value: any;
  index: number;
}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
