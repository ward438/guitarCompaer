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




export default function GibsonGuitars() {
  const [expanded, setExpanded] = React.useState(false);  
  const [gibsonGuitars, setGibsonGuitars] = React.useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    fetchData()
  }, []);



  const fetchData = () => {
    fetch('http://localhost:3000/api/guitars?make=Gibson')
      .then((response) => response.json())
      .then(response => {      
        gibsonGuitarsFilter(response)      
      })
  }

  const gibsonGuitarsFilter = (response) => {
    let result = response.filter(guitar => guitar.make === 'Gibson')    
    return setGibsonGuitars(result)
  }

  
  console.log('taylorGuitars: ', gibsonGuitars)
  return (
    <>     
      <Grid container spacing={2} >
        <Item style={{ display: 'flex', flexWrap: 'wrap' }}>
          {gibsonGuitars.map((data, id) =>
            <GuitarCardTemplate
              key={id}
              guitar={data} />)}
        </Item>
      </Grid>
     




    </>
  );
}