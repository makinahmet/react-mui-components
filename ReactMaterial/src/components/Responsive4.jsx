import React from 'react'
import { Grid, createTheme, Box, Typography } from '@mui/material'
import Navbar1 from './Navbar1';
import Footer1 from './Footer1';

function Responsive4() {

    const defaultTheme = createTheme();

  return (
    <Grid bgcolor={defaultTheme.palette.primary.dark} color={defaultTheme.palette.primary.contrastText}>
        <Grid container xs={12} sm item justifyContent={'center'} bgcolor={defaultTheme.palette.primary.dark}>
            <Grid item container sx={{maxWidth:"1200px"}} bgcolor={defaultTheme.palette.primary.dark}>
                <Navbar1/>
            </Grid>
        </Grid>
        <Grid container xs={12} sm item justifyContent={'center'} bgcolor={defaultTheme.palette.primary.light}>
            <Grid item container sx={{maxWidth:"1200px", minHeight:"200px"}} bgcolor={defaultTheme.palette.primary.light}>
                <Grid xs={12} sm={6} item container alignItems={"center"}>
                    <Grid item>
                        <Grid><Typography variant='h3'>Move Faster</Typography></Grid>
                        <Grid><Typography variant='h3' color={"#222"}>with intuitive<br/> React UI tools</Typography></Grid>
                        <Grid>
                            <Typography variant='body1'>
                                MUI offers a comprehensive suite of free UI tools to help you ship new features faster.
                                Start with Material UI, our fully-loaded component library, or bring your own design system 
                                to our production-ready components.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} sm={6} item bgcolor={defaultTheme.palette.primary.light}>
                    <Box component="img" width={"100%"} src="../src/assets/images/bagHero.png"/>
                </Grid>
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