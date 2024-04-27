import React from 'react'
import { Button, ButtonGroup, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'

function ButtonComponent() {
  return (
    <div>
          <Stack direction={"row"} useFlexGap sx={{ flexWrap: 'wrap', gap: 2}}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text" color="secondary">Text</Button>
            <Button variant="contained" color="secondary">Contained</Button>
            <Button variant="outlined" color="secondary">Outlined</Button>
            <Button variant="text" color="error">Text</Button>
            <Button variant="contained" color="error">Contained</Button>
            <Button variant="outlined" color="error">Outlined</Button>
            <Button variant="text" color="warning">Text</Button>
            <Button variant="contained" color="warning">Contained</Button>
            <Button variant="outlined" color="warning">Outlined</Button>
            <Button variant="text" color="info">Text</Button>
            <Button variant="contained" color="info">Contained</Button>
            <Button variant="outlined" color="info">Outlined</Button>
            <Button variant="text" color="success">Text</Button>
            <Button variant="contained" color="success">Contained</Button>
            <Button variant="outlined" color="success">Outlined</Button>
            <Stack display={"block"}>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>
            <Button variant="contained" href="www.google.com">href Button</Button>
            <Stack direction={"row"}>
              <ButtonGroup variant='contained' color='success'>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </Stack>
        </Stack>
        <Stack direction={"row"} spacing={2}>
              <ButtonGroup variant='contained' color='secondary' orientation='vertical'>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
              </ButtonGroup>
              <ButtonGroup variant='contained' color='warning' orientation='vertical'>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
              </ButtonGroup>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <ToggleButton>Toggle Button</ToggleButton>
          <ToggleButtonGroup>
            <ToggleButton>Left</ToggleButton>
            <ToggleButton>Center</ToggleButton>
            <ToggleButton>Right</ToggleButton>
          </ToggleButtonGroup>
        </Stack>  
    </div>
  )
}

export default ButtonComponent