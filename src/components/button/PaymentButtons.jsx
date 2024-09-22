import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } ,position: 'absolute',left:'700px',top:'500px'}}>
      <div >
        <Button variant="outlined" size="medium" sx={{borderColor: 'black',borderRadius:'1px',color:'black'}} >
          Customer
        </Button>
        <Button variant="outlined" size="medium" sx={{borderColor: 'black',borderRadius:'1px',color:'black'}}>
          Coupoun
        </Button>
        <Button variant="outlined" size="medium" sx={{borderColor: 'black',borderRadius:'1px',color:'black'}}>
          Discount
        </Button>
       
      </div>
    </Box>
  );
}
