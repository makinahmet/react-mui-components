import React from 'react'
import { Grid, createTheme } from '@mui/material'
import Navbar1 from './Navbar1';
import Footer1 from './Footer1';

function Responsive4() {

    const defaultTheme = createTheme();

  return (
    <Grid bgcolor={defaultTheme.palette.primary.dark}>
        <Grid container xs={12} sm item justifyContent={'center'} bgcolor={defaultTheme.palette.primary.dark}>
            <Grid item container sx={{maxWidth:"1200px"}} bgcolor={defaultTheme.palette.primary.dark}>
                <Navbar1/>
            </Grid>
        </Grid>
        <Grid container xs={12} sm item justifyContent={'center'} bgcolor={defaultTheme.palette.primary.light}>
            <Grid item container sx={{maxWidth:"1200px", height:"200px"}} bgcolor={defaultTheme.palette.primary.light}>
                CONTENT
            </Grid>
        </Grid>
        <Grid container xs={12} sm item justifyContent={'center'} bgcolor={defaultTheme.palette.primary.dark}>
            <Grid item container sx={{maxWidth:"1200px"}} bgcolor={defaultTheme.palette.secondary.dark}>
                <Footer1/>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Responsive4