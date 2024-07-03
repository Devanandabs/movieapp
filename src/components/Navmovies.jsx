import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';





const Navmovies = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
           
            
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            firstApp
          </Typography>
          <Link to={'/'}><Button style={{color:'white'}}>View Movies</Button></Link>
          <Link to={'/add'}><Button style={{color:'white'}}>Add Movie</Button></Link>
         
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navmovies