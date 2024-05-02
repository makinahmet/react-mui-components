import React from 'react'
import { Grid} from '@mui/material';
import {createTheme} from '@mui/material';

function Responsive2() {

    const defaultTheme = createTheme();

  return (
    <Grid container direction={'column'} color={defaultTheme.palette.primary.contrastText}>
        <Grid item height={50} bgcolor={defaultTheme.palette.primary.dark} padding={1}>
            RESPONSIVE 2
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

export default Responsive2