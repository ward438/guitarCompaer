import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import GuitarCardTemplate from '../templates/guitarCardTemplate';
import handler from '../../pages/api/guitars/[id]'





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




export default function PrsGuitars() {
  const [expanded, setExpanded] = React.useState(false);  
  const [prsGuitars, setPrsGuitars] = React.useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    fetchData()
  }, []);



  const fetchData = () => {
    fetch('http://localhost:3000/api/guitars?make=Taylor')
      .then((response) => response.json())
      .then(response => {      
        prsGuitarsFilter(response)      
      })
  }

  const prsGuitarsFilter = (response) => {
    let result = response.filter(guitar => guitar.make === 'PRS')    
    return setPrsGuitars(result)
  }

  
  return (
    <>     
      <Grid container spacing={2} >
        <Item style={{ display: 'flex', flexWrap: 'wrap' }}>
          {prsGuitars.map((data, id) =>
            <GuitarCardTemplate
              key={id}
              guitar={data} />)}
        </Item>
      </Grid>
     




    </>
  );
}