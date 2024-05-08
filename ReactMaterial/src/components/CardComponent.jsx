import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'

function CardComponent(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia component="img" image={props.image} width={"100%"}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.cardHeader}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.content}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default CardComponent