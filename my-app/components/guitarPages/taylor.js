import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import AcademySeriesCard from '../templates/academySeriesCard'
import GsMiniSeriesCard from '../templates/gsMini'

import Link from 'next/link'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function TayloyGuitars() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>

      {/* <Stack direction="row" spacing={2}>
        <Link
          href={'/'}
        >
          <Button variant="contained" color="success">
            Home
          </Button>

        </Link>

      </Stack> */}
      <Grid container spacing={2} >
        <Grid item xs={2.5}>
          <Item style=
            {{
              // height: '90vh',
              background: '#81a2ff82',
              color: 'white'
            }}>
            <Box style={{ color: 'white' }}>Academy Series</Box>
            <AcademySeriesCard />
          </Item>
        </Grid>
        <Grid item xs={2.5} >
          <Item style=
            {{
              background: '#81a2ff82',
              color: 'white'
            }}>
            <Box style={{ color: 'white' }}>100 Series</Box>
            <GsMiniSeriesCard />
          </Item>
        </Grid>
      </Grid>



    </>
  );
}