import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Tab, Tabs } from '@material-ui/core';

import { TabPanel } from 'components';
import { tabPanelA11yProps } from 'utils';
import { InvoicesModule, ProfileModule, SalesModule, ShipmentsModule } from 'modules';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    minHeight: 'calc(100vh - 16px)',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (_event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Grid container>
        <Grid item>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="Invoices" {...tabPanelA11yProps(0)} />
              <Tab label="Products" {...tabPanelA11yProps(1)} />
              <Tab label="Profile" {...tabPanelA11yProps(2)} />
              <Tab label="Sales" {...tabPanelA11yProps(3)} />
              <Tab label="Shipments" {...tabPanelA11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={1}>
              <InvoicesModule />
            </TabPanel>

            <TabPanel value={value} index={2}>
              <ProfileModule />
            </TabPanel>

            <TabPanel value={value} index={3}>
              <SalesModule />
            </TabPanel>

            <TabPanel value={value} index={4}>
              <ShipmentsModule />
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
