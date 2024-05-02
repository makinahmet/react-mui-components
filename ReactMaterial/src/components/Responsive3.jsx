import React from 'react'
import { Grid, createTheme } from '@mui/material'
import Navbar1 from './Navbar1';

function Responsive3() {

    const defaultTheme = createTheme();

  return (
    <Grid container direction={'column'} color={defaultTheme.palette.primary.contrastText}>
        <Grid container alignItems={'center'} item bgcolor={defaultTheme.palette.primary.dark} padding={1}>
            <Navbar1/>
        </Grid>
        <Grid item height={200} bgcolor={defaultTheme.palette.primary.light} padding={1}>
            CONTENT
        </Grid>
        <Grid item height={50} bgcolor={defaultTheme.palette.primary.dark} padding={1}>
            FOOTER
        </Grid>
    </Grid>
  )
}

export default Responsive3