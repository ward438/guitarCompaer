import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GuitarCompare from '../pages/home'
import { useDispatch } from "react-redux";
import TayloyGuitars from './guitarPages/taylor'
import MartinGuitars from './guitarPages/martin'
import PrsGuitars from './guitarPages/prs'
import GibsonGuitars from './guitarPages/gibson'
import FenderGuitars from './guitarPages/fender'


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const [showGuitars, setShowGuitars] = React.useState([]);
  const showSelectedGuitars = () => {
  }

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
 

  const sideMenuDictionary = {
    menu1: 'Home',
    menu2: 'Taylor',
    menu3: 'Martin',
    menu4: 'Gibson',
    menu5: 'Fender',
    menu6: 'Paul Reed Smith',
  };


  return (
    
    <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ background: '#81a2ff82' }} >
        <Grid item >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {Object.entries(sideMenuDictionary)
              .map(([key, value]) => <Tab
                key={key}
                label={value}
                onChange={handleChange}
                style={{ top: '0', color: 'white', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{value}</Tab>
              )}
          </Tabs>
        </Grid>        
        
      </Box>
      
      <TabPanel value={value} index={0}>
        <GuitarCompare />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TayloyGuitars />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MartinGuitars />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GibsonGuitars />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <FenderGuitars />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <PrsGuitars />
      </TabPanel>
    </Box>
  );
}