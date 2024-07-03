import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Viewmovies = () => {
const rows=[{mname:'Movie1',mdesc:'Movie1',mdirector:'ManiRatnam'},{mname:'Movie2',mdesc:'Movie2',mdirector:'ShajiKailas'}]

  return (
    <div>
        {rows.map((item)=>(
         <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Movie of the Day
        </Typography>
        <Typography variant="h5" component="div">
        {item.mname}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.mdesc}
        </Typography>
        <Typography variant="body2">
          {item.mdirector}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  ))}
  
  </div>
  )
}

export default Viewmovies