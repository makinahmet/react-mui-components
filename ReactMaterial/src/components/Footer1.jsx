import React from 'react'
import { Grid, createTheme, Box, Link, MenuItem, MenuList } from '@mui/material';

function Footer1() {

    const defaultTheme = createTheme();
    const fontColor = defaultTheme.palette.primary.contrastText;
    const backGroundColor = defaultTheme.palette.primary.dark;

  return (
    <Grid container direction={'row'} justifyContent={'center'} alignItems={'center'} minHeight={100} bgcolor={backGroundColor} color={fontColor}>
        <Grid item xs={12} sm>
            <Grid item container justifyContent={'center'} alignItems={'center'} padding={3}>
                <Box component="img" width={50} src="../src/assets/images/reactLogo.png"/>
            </Grid>
        </Grid>
        <Grid item xs={12} sm container alignItems={"center"} justifyContent={'center'}>
            <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </Grid>
        <Grid item xs={12} sm container alignItems={"center"} justifyContent={'center'}>
            <MenuList>
                <MenuItem>
                    <Link color={defaultTheme.palette.primary.contrastText} underline="hover" target='_blank' href="#">
                        Carriers
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link color={defaultTheme.palette.primary.contrastText} underline="hover" target='_blank' href="#">
                        Cookie Policy
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link color={defaultTheme.palette.primary.contrastText} underline="hover" target='_blank' href="#">
                        Privacy Policy
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link color={defaultTheme.palette.primary.contrastText} underline="hover" target='_blank' href="#">
                        Terms Of use
                    </Link>
                </MenuItem>
            </MenuList>
        </Grid>
    </Grid>
  )
}

export default Footer1