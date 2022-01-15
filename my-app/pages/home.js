import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GuitarCardTemplate from '../components/templates/guitarCardTemplate'



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function Home() {



  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >        
        <Grid item xs={6} >
          <Item style=
            {{              
              background: '#81a2ff82',
              color: 'white'
            }}> Selected Guitars: 
              
            </Item>

        </Grid>
        <Grid item xs={6}>
          <Item style=
            {{              
              background: '#81a2ff82',
              color: 'white'
            }}>Guitar 2</Item>
        </Grid>

        <Grid item xs={12} >
          <Item style={{ float: 'right', width: '100%', background: '#81a2ff82', color: 'white' }}>Footer</Item>
        </Grid>

      </Grid>

    </Box>
  )

}

export default Home