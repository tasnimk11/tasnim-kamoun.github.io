import { Box, Stack, Typography } from '@mui/material'

const HomePage = () => {
  return (

    <Stack direction={"row"} sx={{ justifyContent: "center", alignItems: "center", width: "100%",}} spacing={10}>
      <Box
        component="text"
        sx={{
          height : 300, 
        }}
      >
        <Typography textAlign={"right"} variant='h3' fontWeight={900} >TASNIM KAMOUN</Typography>
        <Typography textAlign={"right"} variant='h6'>Software Engineer and Business Developer</Typography>
        <Typography textAlign={"right"} variant='subtitle1'>  </Typography>
        <Typography textAlign={"right"} variant='subtitle1'>... description</Typography>
      </Box>
      
      

      <Box
        component="img"
        src="./homepage-id-pic.jpg"
        alt="Tasnim's Photo"
        sx={{
          width: 300, 
          height: 300, 
          borderRadius: "50%", // Example for a circular image
          objectFit: "cover", // Ensures the image fits nicely
        }}
      />      
      
    </Stack>
  )
}

export default HomePage