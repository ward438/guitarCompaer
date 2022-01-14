import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TaylorMenuButton from '../components/guitarButtons/taylorButton'
import MartinMenuButton from '../components/guitarButtons/martinGuitarButton'
import PaulReedSmithButton from '../components/guitarButtons/prsButton'
import GibsonButton from '../components/guitarButtons/gibsonButton'
import FenderButton from '../components/guitarButtons/fenderButton'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function Home() {

  const sideMenuDictionary = {
    menu1: <TaylorMenuButton />,
    menu2: <MartinMenuButton />,
    menu3: <GibsonButton />,
    menu4: <FenderButton />,
    menu5: <PaulReedSmithButton />,
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        {/* <Grid item xs={2} >
          {Object.entries(sideMenuDictionary)
            .map(([key, value]) => <Item key={key} style={{ top: '0', background: '#81a2ff82', color: 'white', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>{value}</Item>
            )}
        </Grid> */}

        <Grid item xs={6} >
          <Item style=
            {{
              // height: '90vh',
              background: '#81a2ff82',
              color: 'white'
            }}>Guitar 1</Item>

        </Grid>
        <Grid item xs={6}>
          <Item style=
            {{
              // height: '90vh',
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