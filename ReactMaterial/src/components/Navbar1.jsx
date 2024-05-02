import { Grid, createTheme, Box} from '@mui/material'
import React from 'react'

function Navbar1() {

    const defaultTheme = createTheme();

  return (
    <Grid container direction={"row"} alignItems={'center'}>
        <Grid item xs={12} sm={1} sx={{alignItems:{xs:"center"}, justifyContent:{xs:"center", sm:"flex-start"}}} container>
            <Box component="img" width={50} src="../src/assets/images/reactLogo.png"/>
        </Grid>
        <Grid item bgcolor={defaultTheme.palette.primary.main} padding={1} xs={12} sm>
            <Grid container item direction={'row'} padding={1}>
                <Grid item>
                    HOME &nbsp;&nbsp;&nbsp;
                </Grid>
                <Grid item>
                    ABOUT&nbsp;&nbsp;&nbsp;
                </Grid>
                <Grid item>
                    CONTACT
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Navbar1