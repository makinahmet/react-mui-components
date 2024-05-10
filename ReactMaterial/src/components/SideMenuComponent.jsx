import React from 'react'
import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper } from '@mui/material'
import { Home } from '@mui/icons-material'
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';

function SideMenuComponent() {
  return (
    <Paper>
        <MenuList>
            <MenuItem>
                <ListItemIcon><Home/></ListItemIcon>
                <ListItemText>Home</ListItemText>
            </MenuItem>
            <MenuItem>
                <ListItemIcon><InfoIcon/></ListItemIcon>
                <ListItemText>About Us</ListItemText>
            </MenuItem>
            <MenuItem>
                <ListItemIcon><EmailIcon/></ListItemIcon>
                <ListItemText>Contact Us</ListItemText>
            </MenuItem>
        </MenuList>
    </Paper>
  )
}

export default SideMenuComponent