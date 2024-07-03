import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Addmovies = () => {
  return (
    
         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Movie Name"
          
        />
        </div>
        <div>
        <TextField
          
          id="outlined-required"
          label="Movie Image"
          
        />
        </div>
        <div>
        <TextField
          id="outlined-multiline-static"
          label="Movie Description"
          multiline
          rows={4}
          
        />
        </div>
        <div>
        <TextField
          id="outlined-required"
          label="Movie Director"
          
         
        />
        </div>
    </div>
    </Box>
  )
}

export default Addmovies