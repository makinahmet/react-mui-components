import React from 'react';
import { Grid} from '@mui/material';
import {createTheme} from '@mui/material';

function Responsive1() { 

    const defaultTheme = createTheme();
    const siteWidth = "1200px";
    const menuWith = "200px";

  return (
    <Grid container justifyContent="center" color={'primary'}>
        <Grid container height={50} justifyContent="center" item xs={12} bgcolor={defaultTheme.palette.primary.dark}>
            <Grid item xs={12} bgcolor={defaultTheme.palette.primary.dark} style={{maxWidth:siteWidth}}>Header</Grid>
        </Grid>
        <Grid container height={200} justifyContent="center" item xs={12} bgcolor={defaultTheme.palette.primary.light}>
            <Grid item container direction="row" xs={12} style={{maxWidth:siteWidth}}>
                <Grid item padding={1} margin={1} xs={12} sm={2}  bgcolor={defaultTheme.palette.primary.dark} style={{minWidth:menuWith}}>Menu</Grid>
                <Grid item padding={1} margin={1} xs={12} sm bgcolor={defaultTheme.palette.primary.dark}>Content</Grid>
            </Grid>
        </Grid>
        <Grid container height={50} justifyContent="center" item xs={12} bgcolor={defaultTheme.palette.primary.dark}>
            <Grid bgcolor={defaultTheme.palette.primary.dark} item xs={12} style={{maxWidth:siteWidth}}>Footer</Grid>
        </Grid>
    </Grid>
  )
}

export default Responsive1;