import React from 'react'
import { Grid, createTheme } from '@mui/material'
import Navbar1 from './Navbar1';

function Responsive3() {

    const defaultTheme = createTheme();

  return (
    <Grid container alignItems={'center'} direction={'column'} color={defaultTheme.palette.primary.contrastText}>
        <Grid container item justifyContent={'center'} bgcolor={defaultTheme.palette.primary.dark}>
            <Grid item container bgcolor={defaultTheme.palette.primary.dark} padding={1} style={{maxWidth:"1200px"}}>
                <Navbar1/>
            </Grid>
        </Grid>
        <Grid container item height={200} justifyContent={'center'} bgcolor={defaultTheme.palette.primary.light}>
            <Grid container item bgcolor={defaultTheme.palette.primary.light} padding={1} style={{maxWidth:"1200px"}}>
                CONTENT
            </Grid>
        </Grid>
        <Grid container justifyContent={'center'} item height={50} bgcolor={defaultTheme.palette.primary.dark} padding={1}>
            <Grid container bgcolor={defaultTheme.palette.primary.dark} style={{maxWidth:"1200px"}}>
                FOOTER
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Responsive3