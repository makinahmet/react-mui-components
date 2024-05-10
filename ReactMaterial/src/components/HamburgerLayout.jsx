import React from 'react'
import { useState } from 'react';
import { Button, createTheme, Drawer, Grid } from '@mui/material'
import SideMenuComponent from './SideMenuComponent';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function HamburgerLayout() {
    const defaultTheme = createTheme();

    const [drawerState, setDrawerState] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setDrawerState(newOpen);
    };

  return (
    <Grid container alignItems={'center'} direction={'column'} color={defaultTheme.palette.primary.contrastText}>
        <Grid container item justifyContent={'center'} bgcolor={defaultTheme.palette.primary.dark}>
            <Grid item container bgcolor={defaultTheme.palette.primary.dark} padding={3} style={{maxWidth:"1200px"}}>
                <Grid item sx={{display:{xs:"none", sm:"block"}}}> NAVBAR </Grid>
                <Grid item sx={{display:{xs:"block", sm:"none"}}}>
                    <Button onClick={toggleDrawer(true)}><MenuIcon sx={{color:"white"}}/></Button>
                    <Drawer open={drawerState}>
                        <Button onClick={toggleDrawer(false)}><CloseIcon sx={{color:"black"}}/></Button>
                        <SideMenuComponent/>
                    </Drawer>
                </Grid>
            </Grid>
        </Grid>
        <Grid container item height={200} justifyContent={'center'} bgcolor={defaultTheme.palette.primary.light}>
            <Grid container item bgcolor={defaultTheme.palette.primary.light} padding={1} style={{maxWidth:"1200px"}}>
                <Grid  padding={1} item sx={{display:{xs:"none", sm:"block"}, minWidth:{sm:"200px"}}} bgcolor={defaultTheme.palette.primary.light}>
                    <SideMenuComponent/>
                </Grid>
                <Grid  padding={1} item xs={12} sm bgcolor={defaultTheme.palette.primary.light}>
                    Content
                </Grid>
            </Grid>
        </Grid>
        <Grid container justifyContent={'center'} item height={50} bgcolor={defaultTheme.palette.primary.dark}>
            <Grid container bgcolor={defaultTheme.palette.primary.dark} style={{maxWidth:"1200px"}} padding={2}>
                FOOTER
            </Grid>
        </Grid>
    </Grid>
  )
}

export default HamburgerLayout