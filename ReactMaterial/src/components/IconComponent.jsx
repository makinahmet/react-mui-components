import React from 'react'
import { IconButton, Icon, Stack, Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import { Home } from '@mui/icons-material';

function IconComponent() {
  return (
    <Stack direction={"row"} spacing={5}>
      <IconButton color='primary'>
        <Send/>
      </IconButton>

      <Icon color='secondary'>
        <Home/>
      </Icon>
      
      <Button variant='contained' endIcon={<Send/>}>Send</Button>
      <Button variant='contained' startIcon={<Home/>}>Home</Button>
    </Stack>
  )
}

export default IconComponent