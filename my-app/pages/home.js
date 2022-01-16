import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CompareGuitarCardTemplate from '../components/templates/compateGuitarCardTemplate'
import { useSelector } from "react-redux";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const cardStyle = {
  background: '#81a2ff82',
  color: 'white',
  display: 'flex',
  flexWrap: 'wrap',
  
}

function Home() {
  // state.guitars.value.selected    "guitars" is the string value of name in SelectedGuitarsReducer
  // 'value' is the key under "initialState"
  const selectedGuitars = useSelector((state => state.guitars.value.selected));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid item xs={12} >
          <Item style={cardStyle}>
            {/* {selectedGuitars.map(guitar=>{
                return <><span>{guitar.make} - {guitar.model}</span><br/></>
              })} */}
            {selectedGuitars.map((guitar, id) => {
              return <>
                <CompareGuitarCardTemplate
                  key={id}
                  guitar={guitar}                  
                />
                <br />
              </>
            })}
          </Item>
        </Grid>
        <Grid item xs={12} >
          <Item style={{ float: 'right', width: '100%', background: '#81a2ff82', color: 'white' }}>Footer</Item>
        </Grid>

      </Grid>

    </Box>
  )

}

export default Home