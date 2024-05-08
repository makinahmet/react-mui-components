import React from 'react'
import Responsive1 from './components/Responsive1'
import Responsive2 from './components/Responsive2'
import Responsive3 from './components/Responsive3'
import Responsive4 from './components/Responsive4'
import CardComponent from './components/CardComponent'

//import built in components
import { Grid, createTheme } from '@mui/material'

function App() {

  const defaultTheme = createTheme();

  return (
    <>
      <Responsive1 />
      <hr/>
      <Responsive2 />
      <hr/>
      <Responsive3 />
      <hr/>
      <Responsive4 />
      <hr/>
      <Grid container direction={"row"} justifyContent={"space-evenly"} bgcolor={defaultTheme.palette.primary.dark} padding={1}>
        <CardComponent location="https://www.google.com" image="../src/assets/images/bagHero.png" cardHeader="All Bags" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi explicabo excepturi libero, tenetur aut doloremque ad porro temporibus vel reiciendis quos culpa, accusamus ea. Excepturi, veritatis exercitationem. Accusamus, fugiat!"/>
        <CardComponent location="https://www.google.com" image="../src/assets/images/bag1.png" cardHeader="Little Tote" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi explicabo excepturi libero, tenetur aut doloremque ad porro temporibus vel reiciendis quos culpa, accusamus ea. Excepturi, veritatis exercitationem. Accusamus, fugiat!"/>
        <CardComponent location="https://www.google.com" image="../src/assets/images/bag2.png" cardHeader="Big tote" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi explicabo excepturi libero, tenetur aut doloremque ad porro temporibus vel reiciendis quos culpa, accusamus ea. Excepturi, veritatis exercitationem. Accusamus, fugiat!"/>
      </Grid>
      <hr/>
      
      <br/>
      <br/>
    </>
  )
}

export default App


