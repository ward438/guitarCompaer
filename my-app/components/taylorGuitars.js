import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from '../pages/home'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;



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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

  export default function TaylorGuitars() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <>


      
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

            {/* <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Guitar List" {...a11yProps(1)} />
          <Tab label="Guitar Showdown" {...a11yProps(2)} />
          <Tab label="About" {...a11yProps(3)} />
        </Tabs> */}
        
          </Box>

          {/* <Grid item >
        {Object.entries(sideMenuDictionary)
          .map(([key, value]) => <Item key={key} style={{ top: '0', background: '#81a2ff82', color: 'white', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{value}</Item>
          )}
      </Grid> */}
          <TabPanel value={value} index={0}>
            <Home />
          </TabPanel>
        </Box>



        <Stack direction="row" spacing={2}>
          <Link
            href={'/'}
          >
            <Button variant="contained" color="success">
              Home
            </Button>

          </Link>

        </Stack>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                T
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://www.taylorguitars.com/sites/default/files/styles/multi_column_guitar_dark/public/responsive-guitar-detail/Taylor-K24ce-Koa-fr-v-class-2018.png?itok=i4UaojWg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                large plate and set aside, leaving chicken and chorizo in the pan. Add
                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and
                peppers, and cook without stirring, until most of the liquid is absorbed,
                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                mussels, tucking them down into the rice, and cook again without
                stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </>
    );
  }
}