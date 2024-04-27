import { Stack } from "@mui/material";       //for spacing
import { Typography } from "@mui/material";  //font typography
import { Button } from "@mui/material";      //button component

function App() {

  let spacing = 5;

  return (
    <Stack spacing={spacing} >

      {/* Font Typography */}
      <Stack direction={"row"}>
        <Typography variant="h1" color="common">heading 1</Typography>
        <Typography variant="h2" color="primary">heading 2</Typography>
        <Typography variant="h3" color="secondary">heading 3</Typography>
        <Typography variant="h4" color="error">heading 4</Typography>
        <Typography variant="h5" style={{color:"green"}}>heading 5</Typography>
        <Typography variant="h6">heading 6</Typography>

        <Typography variant="subtitle1">sub title 1</Typography>
        <Typography variant="subtitle2">sub title 2</Typography>

        <Typography variant="body1">body 1</Typography>
        <Typography variant="body2">body 2</Typography>
      </Stack>
      <hr />
      <Stack Stack direction={"row"} useFlexGap sx={{ flexWrap: 'wrap', gap: 2}}>
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
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
        <Button variant="contained" href="www.google.com">href Button</Button>
      </Stack>
    </Stack>
  )
}

export default App
