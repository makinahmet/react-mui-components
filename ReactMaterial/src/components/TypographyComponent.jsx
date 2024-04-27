import React from 'react';
import { Typography } from '@mui/material';

function TypographyComponent() {
  return (
    <div>
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
    </div>
  )
}

export default TypographyComponent