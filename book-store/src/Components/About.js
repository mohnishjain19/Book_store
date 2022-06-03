import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

export const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems="center">
      <Typography sx={{fontFamily:"fantasy"}} variant="h2">This is a CRUD Application</Typography>
      <Typography sx={{fontFamily:"fantasy"}} variant="h3">By Mohnish</Typography>
      </Box>
    </div>
  )
}
