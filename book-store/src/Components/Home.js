import React from 'react'
import { Box
 } from '@mui/system'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div>
    <Box display="flex" flexDirecton="column" alignItems={"center"}>
    <Button LinkComponent={Link} to="/books" sx={{marginTop:25,background:' orangered',marginLeft:63} } variant="contained">
    <Typography variant="h3">View all Products</Typography>
    </Button>
     
    </Box>
    </div>
  )
}
